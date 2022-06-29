import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'

// 1. Create Context
const MovieContext = React.createContext()

const POPULAR = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_KEY}&language=en-US&sort_by=popularity.desc`
const TRENDING = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_KEY}`
const NOW_PLAYING = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_KEY}&language=en-US`
const UPCOMING = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_KEY}&language=en-US`
const TOP_RATED = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_KEY}&language=en-US`

// 2. Create Provider
const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([])
  const [sortedMovies, setSortedMovies] = useState([])
  const [bookmarks, setBookmarks] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [category, setCategory] = useState('popular')
  const [mode, setMode] = useState('light')

  const [user, setUser] = useState('')
  const [token, setToken] = useState('')

  // Get wishlist
  const getWishlist = async () => {
    const savedToken = localStorage.getItem('token')

    try {
      const response = await axios.get('/api/v1/wishlist', {
        headers: {
          Authorization: `Bearer ${savedToken}`
        }
      })
      setBookmarks(response.data.wishlists)
    } catch (error) {
      //console.log(error.response.data.message)
    }
  }

  useEffect(() => {
    if (user) {
      getWishlist()
    }
  }, [user])

  const loadMovies = async category => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })

    setLoading(true)
    setError('')

    let url

    if (category === 'popular') url = POPULAR
    if (category === 'trending') url = TRENDING
    if (category === 'now playing') url = NOW_PLAYING
    if (category === 'upcoming') url = UPCOMING
    if (category === 'top rated') url = TOP_RATED

    try {
      const response = await fetch(url)
      const data = await response.json()

      if (data.results.length === 0) {
        setLoading(false)
        setError({ show: true, msg: 'Movies not found!' })
      } else {
        setMovies(data.results)
        setSortedMovies(data.results)
        setLoading(false)
        setError('')
      }
    } catch (error) {
      setLoading(false)
      setError('Invalid URL!')
    }
  }

  useEffect(() => {
    // Set mode
    if (localStorage.getItem('mode') === null) {
      localStorage.setItem('mode', 'light')
      setMode('light')
    } else {
      setMode(localStorage.getItem('mode'))
    }

    // Get user
    const userName = localStorage.getItem('name')
    setUser(userName)
  }, [])

  // 3. Return values to children
  return (
    <MovieContext.Provider
      value={{
        loadMovies,
        movies,
        setMovies,
        sortedMovies,
        setSortedMovies,
        error,
        setError,
        loading,
        setLoading,
        category,
        setCategory,
        mode,
        setMode,
        user,
        setUser,
        token,
        setToken,
        bookmarks,
        setBookmarks,
        getWishlist
      }}
    >
      {children}
    </MovieContext.Provider>
  )
}

// 4. export created context (Important step)
export const useMovieContext = () => {
  return useContext(MovieContext)
}

export { MovieContext, MovieProvider }

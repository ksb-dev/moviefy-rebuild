import React, { useEffect, useRef } from 'react'

// Context
import { useMovieContext } from '../../context/context'

// Components
import Header from '../../components/Header/Header'
import Categories from '../../components/Categories/Categories'
import MovieList from '../../components/MovieList/MovieList'
import SmallHeader from '../../components/SmallHeader/SmallHeader'
import Logout from '../../components/Logout/Logout'

const Home = () => {
  const { mode, loadMovies } = useMovieContext()
  const hasFetchedData = useRef(false)

  useEffect(() => {
    if (!hasFetchedData.current) {
      loadMovies('popular')
      hasFetchedData.current = true
    }
  }, [loadMovies])

  return (
    <div className={mode === 'light' ? 'home light' : 'home dark'}>
      <Header />
      <SmallHeader />
      <Categories />
      <Logout />
      <MovieList category={'popular'} />
    </div>
  )
}

export default Home

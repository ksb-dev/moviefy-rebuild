import React, { useEffect, useRef } from 'react'

// Context
import { useMovieContext } from '../../context/context'

// Components
import Header from '../../components/Header/Header'
import Categories from '../../components/Categories/Categories'
import MovieList from '../../components/MovieList/MovieList'

const TopRated = () => {
  const { mode, loadMovies } = useMovieContext()
  const hasFetchedData = useRef(false)

  useEffect(() => {
    if (!hasFetchedData.current) {
      loadMovies('top rated')
      hasFetchedData.current = true
    }
  }, [loadMovies])

  return (
    <div className={mode === 'light' ? 'light' : 'dark'}>
      <Header />
      <Categories />
      <MovieList category={'top rated'} />
    </div>
  )
}

export default TopRated

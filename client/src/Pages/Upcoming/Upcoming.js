import React, { useEffect, useRef } from 'react'

// Context
import { useMovieContext } from '../../context/context'

// Components
import Header from '../../components/Header/Header'
import Categories from '../../components/Categories/Categories'
import MovieList from '../../components/MovieList/MovieList'

const Upcoming = () => {
  const { mode, loadMovies } = useMovieContext()
  const hasFetchedData = useRef(false)

  useEffect(() => {
    if (!hasFetchedData.current) {
      loadMovies('upcoming')
      hasFetchedData.current = true
    }
  }, [loadMovies])

  return (
    <div className={mode === 'light' ? 'light' : 'dark'}>
      <Header />
      <Categories />
      <MovieList category={'upcoming'} />
    </div>
  )
}

export default Upcoming

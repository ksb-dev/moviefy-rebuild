import React, { useEffect, useRef } from 'react'

// Context
import { useMovieContext } from '../../context/context'

// Components
import Header from '../../components/Header/Header'
import Categories from '../../components/Categories/Categories'
import MovieList from '../../components/MovieList/MovieList'
import SmallHeader from '../../components/SmallHeader/SmallHeader'

const Trending = () => {
  const { mode, loadMovies, user } = useMovieContext()
  const hasFetchedData = useRef(false)

  useEffect(() => {
    loadMovies('trending')

    if (user) window.location.reload()
  }, [])

  return (
    <div className={mode === 'light' ? 'light' : 'dark'}>
      <Header />
      <SmallHeader />
      <Categories />
      <MovieList category={'trending'} />
    </div>
  )
}

export default Trending

import React, { useEffect, useRef } from 'react'

// Context
import { useMovieContext } from '../../context/context'

// Components
import Header from '../../components/Header/Header'
import Categories from '../../components/Categories/Categories'
import MovieList from '../../components/MovieList/MovieList'
import SmallHeader from '../../components/SmallHeader/SmallHeader'

const NowPlaying = () => {
  const { mode, loadMovies } = useMovieContext()
  const hasFetchedData = useRef(false)

  useEffect(() => {
    if (!hasFetchedData.current) {
      loadMovies('now playing')
      hasFetchedData.current = true
    }
  }, [loadMovies])

  return (
    <div className={mode === 'light' ? 'light' : 'dark'}>
      <Header />
      <SmallHeader />
      <Categories />
      <MovieList category={'now playing'} />
    </div>
  )
}

export default NowPlaying

import React, { useEffect } from 'react'

// Context
import { useMovieContext } from '../../context/context'

// Components
import Header from '../../components/Header/Header'
import Categories from '../../components/Categories/Categories'
import MovieList from '../../components/MovieList/MovieList'
import SmallHeader from '../../components/SmallHeader/SmallHeader'

const Upcoming = () => {
  const { mode, loadMovies, user } = useMovieContext()

  useEffect(() => {
    loadMovies('upcoming')

    //if (user) window.location.reload()
  }, [])

  return (
    <div className={mode === 'light' ? 'light' : 'dark'}>
      <Header />
      <SmallHeader />
      <Categories />
      <MovieList category={'upcoming'} />
    </div>
  )
}

export default Upcoming

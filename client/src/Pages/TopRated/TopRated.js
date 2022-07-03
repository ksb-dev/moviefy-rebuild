import React, { useEffect } from 'react'

// Context
import { useMovieContext } from '../../context/context'

// Components
import Header from '../../components/Header/Header'
import Categories from '../../components/Categories/Categories'
import MovieList from '../../components/MovieList/MovieList'
import SmallHeader from '../../components/SmallHeader/SmallHeader'

const TopRated = () => {
  const { mode, loadMovies, user } = useMovieContext()

  useEffect(() => {
    loadMovies('top rated')

    //if (user) window.location.reload()
  }, [])

  return (
    <div className={mode === 'light' ? 'light' : 'dark'}>
      <Header />
      <SmallHeader />
      <Categories />
      <MovieList category={'top rated'} />
    </div>
  )
}

export default TopRated

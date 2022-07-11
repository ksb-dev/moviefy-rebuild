import React from 'react'
import { Link } from 'react-router-dom'

// Context
import { useMovieContext } from '../../context/context'

// Components
import MovieCard from '../MovieCard/MovieCard'

const MovieList = props => {
  const { mode, sortedMovies, error, loading } = useMovieContext()

  if (loading) {
    return (
      <div
        className={mode === 'light' ? 'loading lightBg1' : 'loading darkBg2'}
      >
        Loading...
      </div>
    )
  }

  if (error) {
    return (
      <div className={mode === 'light' ? 'error lightBg2' : 'error darkBg2'}>
        {error}
      </div>
    )
  }

  return (
    <div className='list'>
      <div className='list__main'>
        <div
          className={
            mode === 'light'
              ? 'list__main__category lightBg1'
              : 'list__main__category darkBg1'
          }
        >
          {/* category */}

          <p className={mode === 'light' ? 'darkColor1' : 'lightColor1'}>
            {props.category}
          </p>

          <p
            className={
              mode === 'light' ? 'length darkColor1' : 'length lightColor1'
            }
          >
            {sortedMovies.length}
          </p>
        </div>

        <div className='list__main__movies'>
          {/* MovieCard Component */}

          {sortedMovies &&
            sortedMovies.map(movie => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                id={movie.id}
                image={movie.poster_path}
                date={movie.release_date}
                vote={movie.vote_average}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default MovieList

import React, { useState, useEffect, useRef } from 'react'

// context
import { useMovieContext } from '../../context/context'

const Filter = () => {
  const { mode, movies, setSortedMovies } = useMovieContext()
  const [sortState, setSortState] = useState(false)
  const [filterValue, setFilterValue] = useState('All')
  const [filterState, setFilterState] = useState(false)

  const filterRef = useRef(null)

  useEffect(() => {
    const closeFilter = e => {
      if (!filterRef.current.contains(e.target)) setFilterState(false)
    }

    document.body.addEventListener('click', closeFilter)

    return () => {
      document.body.removeEventListener('click', closeFilter)
    }
  }, [])

  const toggleFilter = e => {
    setFilterState(!filterState)
    setSortState(!sortState)
  }

  const sortMovies = value => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })

    if (value === 0) {
      const films = []

      movies.forEach(film => {
        films.push(film)
      })

      const reset = films.map(movie => movie)
      setSortedMovies(reset)
      setFilterValue('All')
    }

    if (value === 1) {
      const films = []

      movies.forEach(film => {
        films.push(film)
      })

      const ratingAscending = films.sort(
        (a, b) => a.vote_average - b.vote_average
      )

      const sortedRatingAscending = ratingAscending.map(movie => movie)
      setSortedMovies(sortedRatingAscending)
      setFilterValue('Rating Low')
    }

    if (value === 2) {
      const films = []

      movies.forEach(film => {
        films.push(film)
      })

      const ratingDescending = films.sort(
        (a, b) => b.vote_average - a.vote_average
      )

      const sortedRatingDescending = ratingDescending.map(movie => movie)
      setSortedMovies(sortedRatingDescending)
      setFilterValue('Rating High')
    }

    if (value === 3) {
      const films = []

      movies.forEach(film => {
        films.push(film)
      })

      const ascendingMovies = films.sort(function (a, b) {
        if (a.title) return a.title.localeCompare(b.title)
      })

      const sortedAscendingMovies = ascendingMovies.map(movie => movie)
      setSortedMovies(sortedAscendingMovies)
      setFilterValue('Title (A-Z)')
    }

    if (value === 4) {
      const films = []

      movies.forEach(film => {
        films.push(film)
      })

      const descendingMovies = films.sort(function (a, b) {
        if (b.title) return b.title.localeCompare(a.title)
      })

      const sortedDescendingMovies = descendingMovies.map(movie => movie)
      setSortedMovies(sortedDescendingMovies)
      setFilterValue('Title (Z-A)')
    }
  }

  const filterMovies = (id, value) => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })

    if (id === 0) {
      const films = []

      movies.forEach(film => {
        films.push(film)
      })

      const reset = films.map(movie => movie)
      setSortedMovies(reset)
      setFilterValue(value)

      return
    }

    const films = []

    movies.forEach(film => {
      films.push(film)
    })

    const filter = films.filter(movie => movie.genre_ids.includes(id))

    setSortedMovies(filter)
    setFilterValue(value)
  }

  return (
    <>
      <div className='categories__main__filter_mode__main'>
        {/* filter closed */}

        <div
          ref={filterRef}
          className={
            mode === 'light'
              ? 'categories__main__filter_mode__main__closed lightBg1 darkColor1'
              : 'categories__main__filter_mode__main__closed darkBg1 lightColor1'
          }
          onClick={e => toggleFilter(e)}
        >
          <div>
            <i className='fa-solid fa-filter'></i>

            <span>{filterValue}</span>
          </div>

          {!filterState ? (
            <i className='fa-solid fa-angle-down'></i>
          ) : (
            <i className='fa-solid fa-angle-up'></i>
          )}
        </div>

        {/* filter opened */}

        {filterState && (
          <div
            className={
              mode === 'light'
                ? 'categories__main__filter_mode__main__opened  lightBg1 darkColor1'
                : 'categories__main__filter_mode__main__opened darkBg1 lightColor1'
            }
          >
            <span
              onClick={() => sortMovies(0)}
              className={
                mode === 'light'
                  ? 'first lightBg2 darkColor1'
                  : 'first darkBg2 lightColor1'
              }
            >
              All
            </span>
            <span
              onClick={() => sortMovies(1)}
              className={
                mode === 'light' ? 'lightBg2 darkColor1' : 'darkBg2 lightColor1'
              }
            >
              Rating Low
            </span>
            <span
              onClick={() => sortMovies(2)}
              className={
                mode === 'light' ? 'lightBg2 darkColor1' : 'darkBg2 lightColor1'
              }
            >
              Rating High
            </span>
            <span
              onClick={() => sortMovies(3)}
              className={
                mode === 'light' ? 'lightBg2 darkColor1' : 'darkBg2 lightColor1'
              }
            >
              Title (A-Z)
            </span>
            <span
              onClick={() => sortMovies(4)}
              className={
                mode === 'light'
                  ? 'last lightBg2 darkColor1'
                  : 'last darkBg2 lightColor1'
              }
            >
              Title (Z-A)
            </span>
            <span
              className={mode === 'light' ? 'lightBg2' : 'darkBg2'}
              onClick={() => filterMovies(28, 'action')}
            >
              action
            </span>
            <span
              className={mode === 'light' ? 'lightBg2' : 'darkBg2'}
              onClick={() => filterMovies(12, 'advanture')}
            >
              advanture
            </span>
            <span
              className={mode === 'light' ? 'lightBg2' : 'darkBg2'}
              onClick={() => filterMovies(16, 'animation')}
            >
              animation
            </span>
            <span
              className={mode === 'light' ? 'lightBg2' : 'darkBg2'}
              onClick={() => filterMovies(35, 'comedy')}
            >
              comedy
            </span>
            <span
              className={mode === 'light' ? 'lightBg2' : 'darkBg2'}
              onClick={() => filterMovies(80, 'crime')}
            >
              crime
            </span>
            <span
              className={mode === 'light' ? 'lightBg2' : 'darkBg2'}
              onClick={() => filterMovies(99, 'documentary')}
            >
              documentary
            </span>
            <span
              className={mode === 'light' ? 'lightBg2' : 'darkBg2'}
              onClick={() => filterMovies(18, 'drama')}
            >
              drama
            </span>
            <span
              className={mode === 'light' ? 'lightBg2' : 'darkBg2'}
              onClick={() => filterMovies(10751, 'family')}
            >
              family
            </span>
            <span
              className={mode === 'light' ? 'lightBg2' : 'darkBg2'}
              onClick={() => filterMovies(14, 'fantasy')}
            >
              fantasy
            </span>
            <span
              className={mode === 'light' ? 'lightBg2' : 'darkBg2'}
              onClick={() => filterMovies(36, 'history')}
            >
              history
            </span>
            <span
              className={mode === 'light' ? 'lightBg2' : 'darkBg2'}
              onClick={() => filterMovies(27, 'horror')}
            >
              horror
            </span>
            <span
              className={mode === 'light' ? 'lightBg2' : 'darkBg2'}
              onClick={() => filterMovies(10402, 'music')}
            >
              music
            </span>
            <span
              className={mode === 'light' ? 'lightBg2' : 'darkBg2'}
              onClick={() => filterMovies(9648, 'mystery')}
            >
              mystery
            </span>
            <span
              className={mode === 'light' ? 'lightBg2' : 'darkBg2'}
              onClick={() => filterMovies(10749, 'romance')}
            >
              romance
            </span>
            <span
              className={mode === 'light' ? 'lightBg2' : 'darkBg2'}
              onClick={() => filterMovies(878, 'science fiction')}
            >
              science fiction
            </span>
            <span
              className={mode === 'light' ? 'lightBg2' : 'darkBg2'}
              onClick={() => filterMovies(53, 'thriller')}
            >
              thriller
            </span>
            <span
              className={mode === 'light' ? 'lightBg2' : 'darkBg2'}
              onClick={() => filterMovies(10752, 'war')}
            >
              war
            </span>
            <span
              className={mode === 'light' ? 'lightBg2' : 'darkBg2'}
              onClick={() => filterMovies(37, 'western')}
            >
              western
            </span>
          </div>
        )}
      </div>
    </>
  )
}

export default Filter

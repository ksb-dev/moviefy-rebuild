import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

// Context
import { useMovieContext } from '../../context/context'

// Components
import Filter from '../Filter/Filter'
import SideMenu from '../SideMenu/SideMenu'

const Categories = () => {
  const { mode, setMode, sortedMovies } = useMovieContext()
  const categoryRef = useRef(null)
  const sideMenu = useRef(null)

  const [filterState, setFilterState] = useState(false)

  var prevScrollpos = window.pageYOffset

  window.onscroll = () => {
    scrollFunction()
  }

  const scrollFunction = () => {
    var currentScrollpos = window.pageYOffset

    if (prevScrollpos > currentScrollpos) {
      setTimeout(() => {
        categoryRef.current.style.top = '4.3rem'
      }, 300)
    } else {
      setFilterState(false)
      setTimeout(() => {
        categoryRef.current.style.top = '-4.3rem'
      }, 300)
    }
    prevScrollpos = currentScrollpos
  }

  const handleMode = mode => {
    if (mode === 'light') {
      setMode('black')
      localStorage.setItem('mode', 'black')
    } else {
      setMode('light')
      localStorage.setItem('mode', 'light')
    }
  }

  const showMenu = () => {
    sideMenu.current.style.transform = 'translateX(0%)'
  }

  return (
    <>
      {/* Sidemenu Component */}

      <SideMenu sideMenu={sideMenu} />

      <div
        ref={categoryRef}
        className={
          mode === 'light' ? 'categories lightBg2' : 'categories darkBg2'
        }
      >
        <div className='categories__main'>
          <div
            className={
              mode === 'light'
                ? 'categories__main__options darkColor1'
                : 'categories__main__options lightColor1'
            }
          >
            {!window.location.pathname.includes('/trending') &&
            !window.location.pathname.includes('/now') &&
            !window.location.pathname.includes('/upcoming') &&
            !window.location.pathname.includes('/top') ? (
              <Link
                to='/'
                className={
                  mode === 'light'
                    ? 'option darkColor1 activeDarkCategory'
                    : 'option lightColor1 activeLightCategory'
                }
              >
                popular{' '}
              </Link>
            ) : (
              <Link
                to='/'
                className={
                  mode === 'light' ? 'option darkColor1' : 'option lightColor1'
                }
              >
                popular
              </Link>
            )}

            {window.location.pathname.includes('/trending') ? (
              <Link
                to='/trending'
                className={
                  mode === 'light'
                    ? 'option darkColor1 activeDarkCategory'
                    : 'option lightColor1 activeLightCategory'
                }
              >
                trending
              </Link>
            ) : (
              <Link
                to='/trending'
                className={
                  mode === 'light' ? 'option darkColor1' : 'option lightColor1'
                }
              >
                trending
              </Link>
            )}

            {window.location.pathname.includes('/now') ? (
              <Link
                to='/now'
                className={
                  mode === 'light'
                    ? 'option darkColor1 activeDarkCategory'
                    : 'option lightColor1 activeLightCategory'
                }
              >
                now playing <span>{sortedMovies.length}</span>
              </Link>
            ) : (
              <Link
                to='/now'
                className={
                  mode === 'light' ? 'option darkColor1' : 'option lightColor1'
                }
              >
                now playing
              </Link>
            )}

            {window.location.pathname.includes('/upcoming') ? (
              <Link
                to='/upcoming'
                className={
                  mode === 'light'
                    ? 'option darkColor1 activeDarkCategory'
                    : 'option lightColor1 activeLightCategory'
                }
              >
                upcoming <span>{sortedMovies.length}</span>
              </Link>
            ) : (
              <Link
                to='/upcoming'
                className={
                  mode === 'light' ? 'option darkColor1' : 'option lightColor1'
                }
              >
                upcoming
              </Link>
            )}

            {window.location.pathname.includes('/top') ? (
              <Link
                to='/top'
                className={
                  mode === 'light'
                    ? 'option darkColor1 activeDarkCategory'
                    : 'option lightColor1 activeLightCategory'
                }
              >
                top rated <span>{sortedMovies.length}</span>
              </Link>
            ) : (
              <Link
                to='/top'
                className={
                  mode === 'light' ? 'option darkColor1' : 'option lightColor1'
                }
              >
                top rated
              </Link>
            )}

            <i className='fa-solid fa-bars menu' onClick={showMenu}></i>
          </div>

          <div className='categories__main__filter__mode'>
            {/* Filter Compoenent */}

            <p
              className={
                mode === 'light' ? 'lightBg1 darkColor2' : 'darkBg1 lightColor1'
              }
            >
              <span>{sortedMovies.length}</span>
            </p>

            <Filter filterState={filterState} setFilterState={setFilterState} />

            {mode === 'light' ? (
              <span
                className='moon darkBg1 lightColor1'
                onClick={() => handleMode(mode)}
              >
                <i className='fa-solid fa-moon'></i>dark
              </span>
            ) : (
              <span
                className='sun lightBg1 darkColor1'
                onClick={() => handleMode(mode)}
              >
                <i className='fa-solid fa-sun'></i>light
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Categories

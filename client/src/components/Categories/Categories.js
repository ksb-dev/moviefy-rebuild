import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

// Context
import { useMovieContext } from '../../context/context'

// Components
import Filter from '../Filter/Filter'
import SideMenu from '../SideMenu/SideMenu'

const Categories = () => {
  const { mode, setMode } = useMovieContext()
  const sideMenu = useRef(null)

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
            <Link
              to='/'
              className={
                mode === 'light' ? 'option darkColor1' : 'option lightColor1'
              }
            >
              popular
            </Link>

            <Link
              to='/trending'
              className={
                mode === 'light' ? 'option darkColor1' : 'option lightColor1'
              }
            >
              trending
            </Link>

            <Link
              to='/now'
              className={
                mode === 'light' ? 'option darkColor1' : 'option lightColor1'
              }
            >
              now playing
            </Link>

            <Link
              to='/upcoming'
              className={
                mode === 'light' ? 'option darkColor1' : 'option lightColor1'
              }
            >
              upcoming
            </Link>

            <Link
              to='/top'
              className={
                mode === 'light' ? 'option darkColor1' : 'option lightColor1'
              }
            >
              top rated
            </Link>

            <i className='fa-solid fa-bars menu' onClick={showMenu}></i>
          </div>

          <div className='categories__main__filter__mode'>
            {/* Filter Compoenent */}

            <Filter />

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

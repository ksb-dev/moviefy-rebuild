import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

// Context
import { useMovieContext } from '../../context/context'

// Components
import Logout from '../Logout/Logout'

const Header = () => {
  const { mode, setMode, user, bookmarks } = useMovieContext()
  const logoutRef = useRef(null)
  const headerRef = useRef(null)

  const handleMode = mode => {
    if (mode === 'light') {
      setMode('black')
      localStorage.setItem('mode', 'black')
    } else {
      setMode('light')
      localStorage.setItem('mode', 'light')
    }
  }

  const showLogout = () => {
    logoutRef.current.style.zIndex = '3'
    logoutRef.current.style.transform = 'scale(1)'
  }

  return (
    <>
      <Logout logoutRef={logoutRef} />

      <div
        ref={headerRef}
        className={
          mode === 'light'
            ? 'header lightBg2 darkColor1'
            : 'header darkBg2 lightColor1'
        }
      >
        <div className='header__main'>
          <div className='header__main__title'>
            <Link to='/'>
              <h2>Moviefy</h2>
            </Link>
          </div>

          <div className='header__main__options'>
            {!window.location.pathname.includes('/search') &&
            !window.location.pathname.includes('/bookmarks') &&
            !window.location.pathname.includes('/movie') ? (
              <Link to='/' className='option active'>
                <i className='fa-solid fa-house icon'></i>home
              </Link>
            ) : (
              <Link to='/' className='option'>
                <i className='fa-solid fa-house icon'></i>home
              </Link>
            )}

            {!window.location.pathname.includes('/movie') &&
            window.location.pathname.includes('/search') ? (
              <Link to='/search' className='option active'>
                <i className='fa-solid fa-magnifying-glass icon'></i>search
              </Link>
            ) : (
              <Link to='/search' className='option'>
                <i className='fa-solid fa-magnifying-glass icon'></i>search
              </Link>
            )}

            {user && (
              <Link to='#' className='option' onClick={() => showLogout()}>
                <i className='fa-solid fa-circle-user icon'></i>
                {user}
              </Link>
            )}

            {!user && (
              <Link to='/login' className='option'>
                <i className='fa-solid fa-circle-user icon'></i>
                login
              </Link>
            )}

            {!window.location.pathname.includes('/movie') &&
            window.location.pathname.includes('/bookmarks') ? (
              <Link to='/bookmarks' className='option bookmark active'>
                <i className='fa-solid fa-bookmark icon'></i>bookmarks
                <p>
                  {' '}
                  <span>{bookmarks.length}</span>
                </p>
              </Link>
            ) : (
              <Link to='/bookmarks' className='option bookmark'>
                <i className='fa-solid fa-bookmark icon'></i>bookmarks
                <p>
                  {' '}
                  <span>{bookmarks.length}</span>
                </p>
              </Link>
            )}

            <div className='mode'>
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
      </div>
    </>
  )
}

export default Header

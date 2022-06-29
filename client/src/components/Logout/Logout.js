import React, { useEffect, useRef } from 'react'

// Context
import { useMovieContext } from '../../context/context'

const Logout = ({ logoutRef }) => {
  const { mode, setUser, setToken, loadMovies } = useMovieContext()
  const logoutInner = useRef(null)

  const logout = () => {
    localStorage.removeItem('name')
    localStorage.removeItem('token')

    loadMovies('popular')
    setUser('')
    setToken('')

    logoutRef.current.style.zIndex = '-1'
    logoutRef.current.style.transform = 'scale(0)'
  }

  useEffect(() => {
    const hodeLogout = e => {
      if (
        logout.current.contains(e.target) &&
        !logoutInner.current.contains(e.target)
      ) {
        logoutRef.current.style.zIndex = '-1'
        logoutRef.current.style.transform = 'scale(0)'
      }
    }

    document.body.addEventListener('click', hodeLogout)

    return () => {
      document.body.removeEventListener('click', hodeLogout)
    }
  }, [])

  const hideLogout = () => {
    logout.current.style.zIndex = '-1'
    logout.current.style.transform = 'scale(0)'
  }

  return (
    <div
      ref={logoutRef}
      className={
        mode === 'light'
          ? 'logout lightAlpha1 darkColor1'
          : 'logout darkAlpha1 lightColor1'
      }
    >
      <div
        className={
          mode === 'light' ? 'logout__inner lightBg1' : 'logout__inner darkBg1'
        }
      >
        <p>Do you want to logout?</p>
        <div ref={logoutInner} className='logout__inner__options'>
          <span
            className={mode === 'light' ? 'lightBg2' : 'darkBg2'}
            onClick={() => logout()}
          >
            yes
          </span>
          <span
            className={mode === 'light' ? 'lightBg2' : 'darkBg2'}
            onClick={() => hideLogout()}
          >
            no
          </span>
        </div>
      </div>
    </div>
  )
}

export default Logout

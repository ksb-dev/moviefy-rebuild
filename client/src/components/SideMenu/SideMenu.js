import React from 'react'
import { Link } from 'react-router-dom'

// Context
import { useMovieContext } from '../../context/context'

const SideMenu = ({ sideMenu }) => {
  const { mode } = useMovieContext()

  const hideMenu = () => {
    sideMenu.current.style.transform = 'translateX(100%)'
  }

  window.onresize = () => {
    if (window.innerWidth > 1025) {
      sideMenu.current.style.transform = 'translateX(100%)'
    }
  }

  return (
    <div
      ref={sideMenu}
      className={
        mode === 'light' ? 'side-menu lightAlpha2' : 'side-menu darkAlpha1'
      }
    >
      <div
        className={
          mode === 'light'
            ? 'side-menu__inner lightBg1'
            : 'side-menu__inner darkBg1'
        }
      >
        <i
          className={
            mode === 'light'
              ? 'fa-solid fa-xmark fa-2x darkColor1'
              : 'fa-solid fa-xmark fa-2x lightColor1'
          }
          onClick={hideMenu}
        ></i>
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
      </div>
    </div>
  )
}

export default SideMenu

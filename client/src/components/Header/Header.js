import React from 'react'
import { Link } from 'react-router-dom'

// Context
import { useMovieContext } from '../../context/context'

const Header = () => {
  const { mode } = useMovieContext()

  return (
    <div
      className={
        mode === 'light'
          ? 'header lightBg2 darkColor1'
          : 'header darkBg2 lightColor1'
      }
    >
      <div className='header__main'>
        <div className='header__main__title'>
          <h2>Moviefy</h2>
        </div>

        <div className='header__main__options'>
          <Link to='/' className='option'>
            <i className='fa-solid fa-house icon'></i>home
          </Link>

          <Link to='/search' className='option'>
            <i className='fa-solid fa-magnifying-glass icon'></i>search
          </Link>

          <Link to='/login' className='option'>
            <i className='fa-solid fa-circle-user icon'></i>login
          </Link>

          <Link to='/bookmarks' className='option bookmark'>
            <i className='fa-solid fa-bookmark icon'></i>bookmarks
            <p>
              {' '}
              <span>10</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header

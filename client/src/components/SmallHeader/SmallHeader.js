import React from 'react'

// Context
import { useMovieContext } from '../../context/context'

const SmallHeader = () => {
  const { bookmarks } = useMovieContext()

  return (
    <div className='small-header'>
      <p className='title'>Moviefy</p>
      <div className='bookmark'>
        <i className='fa-solid fa-bookmark icon'></i>bookmarks
        <p>
          {' '}
          <span>{bookmarks.length}</span>
        </p>
      </div>
    </div>
  )
}

export default SmallHeader

import React from 'react'

const SmallHeader = () => {
  return (
    <div className='small-header'>
      <p className='title'>Moviefy</p>
      <div className='bookmark'>
        <i className='fa-solid fa-bookmark icon'></i>bookmarks
        <p>
          {' '}
          <span>10</span>
        </p>
      </div>
    </div>
  )
}

export default SmallHeader

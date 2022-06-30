import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

// Context
import { useMovieContext } from '../../context/context'

// Hooks
import { addBookmark } from '../../hooks/useAddBookmark'
import { deleteBookmark } from '../../hooks/useDeleteBookmark'

const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

const getClassByRate = vote => {
  if (vote >= 8) {
    return 'green'
  } else if (vote >= 5) {
    return 'orange'
  } else {
    return 'red'
  }
}

const MovieCard = ({ title, id, image, date, vote }) => {
  const { mode, bookmarks, user, getWishlist } = useMovieContext()

  const [bookmark, setBookmark] = useState(false)

  //console.log(wishlist)

  useEffect(() => {
    if (bookmarks) {
      for (let i = 0; i < bookmarks.length; i++) {
        if (bookmarks[i].movie_id == id) {
          setBookmark(true)
        }
      }
    }

    if (bookmarks.length === 0) setBookmark(false)
  }, [bookmarks])

  return (
    <div
      className={
        mode === 'light' ? 'movie-card lightBg1' : 'movie-card darkBg1'
      }
    >
      <Link className='movie-card__link' to={`/movie/${id}`}>
        <div className='movie-card__link__image-rating'>
          <img
            className='movie-card__link__image-rating__image'
            src={image === null ? url : IMG_PATH + image}
            alt={title}
          />

          <p
            className={
              mode === 'light'
                ? `movie-card__link__image-rating__rating ${getClassByRate(
                    vote
                  )} lightBorder`
                : `movie-card__link__image-rating__rating ${getClassByRate(
                    vote
                  )} darkBorder`
            }
          >
            {vote ? <span>{vote.toFixed(1)}</span> : <span>0</span>}
          </p>
        </div>

        <div className='movie-card__link__title'>
          <h5 className={mode === 'light' ? 'darkColor1' : 'lightColor1'}>
            {title
              ? title.length >= 50
                ? title.substring(0, 45) + '...'
                : title
              : 'No Title'}
          </h5>
        </div>

        <div className='movie-card__link__date'>
          <span className={mode === 'light' ? 'darkColor2' : 'lightColor2'}>
            {moment(date).format('Do MMM, YYYY')}
          </span>
        </div>
      </Link>

      {user && !bookmark && (
        <span
          className='movie-card__add'
          onClick={() =>
            addBookmark(
              id,
              title,
              image,
              date,
              vote,
              setBookmark,
              getWishlist,
              '/api/v1/wishlist'
              //genre_ids
            )
          }
        >
          <i className='fa-solid fa-plus'></i>
        </span>
      )}

      {user && bookmark && (
        <span
          className='movie-card__delete'
          onClick={() =>
            deleteBookmark(setBookmark, getWishlist, `/api/v1/wishlist/${id}`)
          }
        >
          <i className='fa-solid fa-trash-can'></i>
        </span>
      )}

      {!user && (
        <span className='movie-card__add'>
          <i className='fa-solid fa-plus'></i>
        </span>
      )}
    </div>
  )
}

export default MovieCard

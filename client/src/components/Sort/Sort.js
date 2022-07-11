import React from 'react'

// context
import { useMovieContext } from '../../context/context'

const Sort = ({ sortRef, toggleSort, sortValue, sortState, sortMovies }) => {
  const { mode } = useMovieContext()

  return (
    <>
      {/* sort */}

      <div className='list__main__category-sort-filter__sort'>
        {/* sort closed */}

        <div
          ref={sortRef}
          className={
            mode === 'light'
              ? 'list__main__category-sort-filter__sort__closed lightBg1 darkColor1'
              : 'list__main__category-sort-filter__sort__closed darkBg1 lightColor1'
          }
          onClick={e => toggleSort(e)}
        >
          <div>
            <i className='fa-solid fa-sort'></i>

            <span>{sortValue}</span>
          </div>

          {!sortState ? (
            <i className='fa-solid fa-angle-down'></i>
          ) : (
            <i className='fa-solid fa-angle-up'></i>
          )}
        </div>

        {/* sort opened */}

        {sortState && (
          <div
            className={
              mode === 'light'
                ? 'list__main__category-sort-filter__sort__opened  lightBg1 darkColor1'
                : 'list__main__category-sort-filter__sort__opened darkBg1 lightColor1'
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
              Reset
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
          </div>
        )}
      </div>
    </>
  )
}

export default Sort

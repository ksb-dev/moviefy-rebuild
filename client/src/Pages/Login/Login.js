import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Hooks
import { useLogin } from '../../hooks/useLogin'

// Context
import { useMovieContext } from '../../context/context'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)

  const { mode } = useMovieContext()

  const { error, setError, isPending, login } = useLogin()

  const handleSubmit = e => {
    e.preventDefault()
    login(email, password, setEmail, setPassword)
  }

  return (
    <div
      onSubmit={handleSubmit}
      className={
        mode === 'light'
          ? 'login lightBg1 darkColor1'
          : 'login darkBg1 lightColor1'
      }
    >
      <Link
        to='/'
        className={
          mode === 'light'
            ? 'login__backBtn darkColor2'
            : 'login__backBtn lightColor1'
        }
      >
        <i className='fa-solid fa-arrow-left'></i>back
      </Link>

      <form
        className={
          mode === 'light' ? 'login__form lightBg1' : 'login__form darkBg1'
        }
      >
        <h3>Login</h3>

        <p>username</p>
        <input
          className={mode === 'light' ? 'lightBg2' : 'darkBg2'}
          type='email'
          onChange={e => setEmail(e.target.value)}
          value={email}
        />

        <div>
          <p>password</p>
          {password && !show && (
            <i
              className={
                mode === 'light'
                  ? 'fa-regular fa-eye darkColor1'
                  : ' fa-regular fa-eye lightColor2'
              }
              onClick={() => setShow(!show)}
            ></i>
          )}

          {password && show && (
            <i
              className={
                mode === 'light'
                  ? 'fa-regular fa-eye-slash darkColor1'
                  : 'fa-regular fa-eye-slash lightColor2'
              }
              onClick={() => setShow(!show)}
            ></i>
          )}
        </div>

        <input
          className={mode === 'light' ? 'lightBg2' : 'darkBg2'}
          type={show ? 'text' : 'password'}
          onChange={e => setPassword(e.target.value)}
          value={password}
        />

        {!isPending && (
          <button
            type='submit'
            className={
              mode === 'light' ? 'darkBg2 lightColor1' : 'lightBg1 darkColor1'
            }
          >
            Login
          </button>
        )}

        {isPending && (
          <button
            type='submit'
            className={
              mode === 'light' ? 'darkBg2 lightColor1' : 'lightBg1 darkColor1'
            }
          >
            ...
          </button>
        )}

        <p className='ask'>
          Don't have an account?{' '}
          <Link
            to='/signup'
            className={mode === 'light' ? 'darkColor1' : 'lightColor1'}
          >
            Signup
          </Link>
        </p>

        {error && (
          <h4
            className='login__form-error'
            style={{
              color: 'tomato',
              fontWeight: '500'
            }}
          >
            {error}
          </h4>
        )}
      </form>
    </div>
  )
}

export default Login

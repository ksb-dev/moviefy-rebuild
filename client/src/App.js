import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import Home from './Pages/Home/Home'
import Trending from './Pages/Trending/Trending'
import NowPlaying from './Pages/NowPlaying/NowPlaying'
import Upcoming from './Pages/Upcoming/Upcoming'
import TopRated from './Pages/TopRated/TopRated'
import Login from './Pages/Login/Login'
import Signup from './Pages/SignUp/SignUp'
import MovieDetail from './Pages/MovieDetail/MovieDetail'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />

          <Route exact path='/trending' element={<Trending />} />

          <Route exact path='/now' element={<NowPlaying />} />

          <Route exact path='/upcoming' element={<Upcoming />} />

          <Route exact path='/top' element={<TopRated />} />

          <Route exact path='/login' element={<Login />} />

          <Route exact path='/signup' element={<Signup />} />

          <Route exact path='/movie/:id' element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import React from 'react'
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import CreatePost from './assets/pages/CreatePost'
import Feed from './assets/pages/Feed'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/create-post' element={<CreatePost />} />
        <Route path='/Feed' element={<Feed />} />
      </Routes>
    </Router> 
  )
}

export default App
import React from 'react'
import Home from './Home'
import Inside from './Inside'
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
    <Routes>
      <Route path = '/' element={<Home/>}/>
      <Route path = '/inside' element={<Inside/>}/>
    </Routes>
    </div>
  )
}

export default App
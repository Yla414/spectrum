import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes></Routes>
          <Route path='/' element={<Homepage}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

import React from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Landing from './pages/Landing/Landing';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
    
      </Routes>
  
    </Router>
  )
}

export default App

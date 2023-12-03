import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App

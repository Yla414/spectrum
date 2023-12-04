import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import PageNotFound from './components/PageNotFound';
import Register from './components/auth/Register';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='*' element={<PageNotFound />}></Route>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/'></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App

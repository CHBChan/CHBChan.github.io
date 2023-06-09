import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import Games from './pages/Games';
import GameProjects from './pages/GameProjects';
import '@fontsource/pangolin';

function App() {

  return (
    <div className='mainContent'>
      <Router>
        <nav className='navBar flex gap-8 items-center justify-center mx-4 my-4'>
          <Link className='font-bold text-2xl hover:underline' to='/'>Home</Link>
          <Link className='font-bold text-2xl hover:underline' to='/projects'>Projects</Link>
          <Link className='font-bold text-2xl hover:underline' to='/aboutme'>About Me</Link>
        </nav>
        <Routes>
          <Route path='/*' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/aboutme' element={<AboutMe/>}/>
          <Route path='/games' element={<Games/>}/>
          <Route path='/gameProjects' element={<GameProjects/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

import Home from './pages/Home';
import MyProjects from './pages/MyProjects';
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';
import '@fontsource/pangolin';

const linkList : linkInfo[] = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'Projects',
    path: '/myprojects'
  },
  {
    title: 'About Me',
    path: '/aboutme'
  }
];

function App() {
  const [currLink, setCurrLink] = useState<string>('/');

  return (
    <div className='mainContent'>
      <Router>
        <nav className='navBar flex gap-8 items-center justify-center mx-4 my-4'>
          {linkList.map((linkI : linkInfo, index : number) => {
            return (
              <Link className='font-bold text-2xl border-b-2 border-transparent hover:border-orange-400' to={linkI.path}>{linkI.title}</Link>
            )
          })}
        </nav>
        <Routes>
          <Route path='/*' element={<Home/>}/>
          <Route path='/myprojects' element={<MyProjects/>}/>
          <Route path='/aboutme' element={<AboutMe/>}/>
          <Route path='/resume' element={<Resume/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App

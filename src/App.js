import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Goal from './pages/Goal';
import Design from './pages/Design';
import Mentorship from './pages/Mentorship';
import Coding from './pages/Coding';
import Resources from './pages/Resources';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <div
          style={{
            position: 'fixed',
            width: '100%',
            height: '4rem',
            backgroundColor: '#00000055',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <Link className='link' to='/'>Home</Link>
          <Link className='link' to='/about'>The Goal</Link>
          <Link className='link' to='/design'>Design</Link>
          <Link className='link' to='/mentorship'>Mentorship</Link>
          <Link className='link' to='/coding'>Coding</Link>
          <Link className='link' to='/resources'>Resources</Link>
        </div>
        <Routes>
          <Route index element={<Home />} />
          <Route path='about' element={<Goal />} />
          <Route path='design' element={<Design />} />
          <Route path='mentorship' element={<Mentorship />} />
          <Route path='coding' element={<Coding />} />
          <Route path='resources' element={<Resources />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

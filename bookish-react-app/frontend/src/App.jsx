import { Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Footer from './components/pages/Footer';
// import Login from './components/pages/Login';
// import Signup from './components/pages/Signup';
import Error from './components/pages/Error';
import './App.css';

function App() {
    const Location = useLocation();
    const hideFooter = ['/login', '/signup'].includes(location.pathname);
    return (
        <div className='app'>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about-us' element={<About />} />
                <Route path='/contact-us' element={<Contact />} />
                {/* <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} /> */}
            </Routes>
            {!hideFooter && <Footer />}
        </div>
    )
}

export default App;

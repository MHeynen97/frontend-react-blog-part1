import './App.css'
import logoMedium from './assets/logo-medium.png';
import Home from './pages/home/Home.jsx';
import Post from './pages/post/Post.jsx';
import Overview from './pages/overview/Overview.jsx';
import Error from './pages/error/Error.jsx';
import PostDetail from './pages/postDetail/PostDetail.jsx';
import { Routes, Route, NavLink } from 'react-router-dom';

function App() {
    return (
    <>
        <nav className="navbar-outer-container">
            <div className="inner-nav-container">
                    <img src={logoMedium} alt="Logo that links to home page" className="logo-small" />
            <ul className="nav">
                <li>
                    <NavLink
                        className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                        to='/'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                        to='/post'>
                        Post
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                        to='/overview'>
                        Overview
                    </NavLink>
                </li>
            </ul>
            </div>

        </nav>
        <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post" element={<Post />} />
            <Route path="/post/:id" element={<PostDetail/>} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/error" element={<Error />} />
        </Routes>
        </main>
        <footer>

        </footer>
    </>
    )
}

export default App

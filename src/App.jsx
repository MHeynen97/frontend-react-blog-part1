import './App.css'
import Home from './pages/home/Home.jsx';
import Post from './pages/post/Post.jsx';
import Overview from './pages/overview/Overview.jsx';
import Error from './pages/error/Error.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
    <>
        <nav>

        </nav>
        <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post" element={<Post />} />
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

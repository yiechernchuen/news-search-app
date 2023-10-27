import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './components/home/Home';
import Login from './components/login/Login';
import './App.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleLogin(boolean) {
        setIsLoggedIn(boolean);
    }

    return (
        <Router>
            <Routes>
                <Route path='/' exact element={<Login handleLogin={handleLogin} />} />
                <Route path='/home' element={<Home isLoggedIn={isLoggedIn} handleLogin={handleLogin} />} />
            </Routes>
        </Router>
    );
}

export default App;

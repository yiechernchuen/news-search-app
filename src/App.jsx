import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' exact element={<Login />} />
                <Route path='/home' element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;

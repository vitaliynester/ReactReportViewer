import LoginPage from "./components/LoginPage";
import {Route, Routes} from 'react-router-dom';
import HomePage from "./components/HomePage";

function App() {
    return (
        <Routes>
            <Route path='/' element={localStorage.getItem('login') ? <HomePage/> : <LoginPage/>}/>
        </Routes>
    );
}

export default App;

import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Home.css'

function Home() {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };
    return (
        <div className='full-container '>
            <div className='tittle-container d-flex justify-content-center'>
                <h1 className='mb-5 mt-5 about-tittle'>Welcome</h1>
            </div>
            <div className='container home-container d-flex justify-content-center align-items-center p-5'>
                <p>Bienvenido</p>
                <button className="nav-button" onClick={() => handleNavigation('/about')}>Click</button>
            </div>



        </div>
    )
}

export default Home
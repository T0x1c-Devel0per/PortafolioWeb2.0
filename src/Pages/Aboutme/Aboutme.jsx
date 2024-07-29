import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Aboutme.css';
import Me from '../../assets/Images/Me.jpg';

const Aboutme = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="full-container">
      <div className="title-container">
        <h2 className="mb-5 mt-5 about-title">Sobre mí</h2>
      </div>
      <div className="container aboutme-container mt-5 p-5">
        <div className="row">
            <div className="col-6">
              <button className="nav-button" onClick={() => handleNavigation('/')}>Click</button>
            </div>
            <div className="col-6">
              <button className="nav-button" onClick={() => handleNavigation('/projects')}>Click</button>
            </div>
          </div>
        
        <div className="container d-flex justify-content-center mt-5">
        </div>
        <div className="row d-flex justify-content-center gap-3">
          <div className="col- col--6 col-md-4 border-col rounded-circle border-col-1">
            <img src={Me} alt="Me" className="profile-image" />
          </div>
          <div className="col-12 col--6 col-md-3 p-5 border-col border-col-2">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id sunt neque qui libero quaerat odio sapiente fugit</p>
          </div>
          <div className="col-12 col--6 col-md-3 p-5 border-col border-col-3">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id sunt neque qui libero quaerat odio sapiente fugit</p>
          </div>
          <div className="col-12 col--6 col-md-5 p-5 border-col border-col-4">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id sunt neque qui libero quaerat odio sapiente fugit? Neque, quas eum quasi voluptatibus nam, harum mollitia quia, voluptatum quae rem temporibus.</p>
          </div>
          <div className="col-12 col--6 col-md-5 p-5 border-col border-col-5">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id sunt neque qui libero quaerat odio sapiente fugit? Neque, quas eum quasi voluptatibus nam, harum mollitia quia, voluptatum quae rem temporibus.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Aboutme;

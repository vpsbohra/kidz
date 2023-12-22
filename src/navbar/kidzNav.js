import React, { useState, useEffect } from 'react';
import { Link, useNavigate, Routes, Route } from 'react-router-dom';
import AuthUser from '../components/AuthUser';

import ParentalSwitch from '../images/Parental Switch.png';
import MessagesIcon from '../images/Messages(1).png';
import ActivitiesIcon from '../images/Activities(1).png';
import HomeIcon from '../images/Home.png';
import MoneyBagImage from '../images/money-bag.png';
import protectImg1 from '../images/036-protect.png';
import ChildChat from '../components/chat/ChildChat';

function KidsNav() {
    const navigate = useNavigate();
    const [code, setCode] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [userdetail, setUserdetail] = useState('');
    const [isParentalSwitchActive, setIsParentalSwitchActive] = useState(false);
    const { user } = AuthUser();
    
    useEffect(() => {
      fetchUserDetail();
    }, []);
  
    const fetchUserDetail = () => {
            setUserdetail(user);
    };
  
    function renderElement() {
      if (userdetail) {
        return <p>{userdetail.name.split(' ')[0]}</p>;
      } else {
        return <p>Loading.....</p>;
      }
    }
    const handleCodeEntry = (event) => {
      setCode(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const storedCode = JSON.parse(sessionStorage.getItem('user')).user_code;
        if (code === storedCode) {
            navigate('/parent-dashboard');
        } else {
            setErrorMessage('Invalid code entered. Please try again.');
            console.log('Incorrect code entered!');
        }
    };
    const handleCancel = () => {
        setShowPopup(false);
        setIsParentalSwitchActive(false);
      };
      const handleParentalSwitch = () => {
        setShowPopup(true);
        setErrorMessage('');
        setIsParentalSwitchActive(true);
      };
      
      const handleMessages = () => {
        navigate('/kids-messages');
      };

    useEffect(() => {
        if (isParentalSwitchActive) {
          document.documentElement.classList.add('parental-switch-active');
        } else {
          document.documentElement.classList.remove('parental-switch-active');
        }
      }, [isParentalSwitchActive]);

    useEffect(() => {
    return () => {
        document.documentElement.classList.remove('parental-switch-active');
    };
    }, []);
            
    useEffect(() => {
        const handleBackButton = (event) => {
          event.preventDefault();
          alert('true');
        };
    
        window.addEventListener('popstate', handleBackButton);
    
        return () => {
          window.removeEventListener('popstate', handleBackButton);
        };
      }, [showPopup]);
    
    return (
        <>
        <div className="kidsname">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" id="parental_switch" onClick={handleParentalSwitch}><img src={ParentalSwitch} alt=''/></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Kids-messages" onClick={handleMessages} ><img src={MessagesIcon} alt='' /></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#"><img src={ActivitiesIcon} alt='' /></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#"><img src={HomeIcon} alt='' /></Link>
                    </li>
                    </ul>
                </div>
                <div className="right-icons">
                <Link className="nav-link points" href="#"><img src={MoneyBagImage} alt="protected" /> 107 Points</Link>
                <Link className="nav-link toggle-profile" href="#">Pieree</Link>
                </div>
                </nav>
                </div>
                {showPopup && (
            <div className="code-popup">
                  <h1>Welcome, {renderElement()}</h1>
                 <img src={protectImg1} alt="protected" />
                 <p>Enter a 3-digit code to access the parental dashboard</p>
                <form onSubmit={handleSubmit}>
                    <input type="password" maxLength={3} className="form-control" placeholder="Enter Code" value={code} onChange={handleCodeEntry} />
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <button type="submit">Submit</button>
                    <button type="button" className="continue-code" onClick={() => handleCancel()}>Cancel</button>
                </form>
            </div>
            )}
        </>
    );
}

export default KidsNav;

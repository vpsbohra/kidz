import { Link, useLocation } from 'react-router-dom';
import Logo from '../images/KIDZCONNECT-1.png';
import LogoutImage from '../images/Frame.png';
import Team from '../images/Frame (1).png';
import Help from '../images/Frame (2).png';
import MyAccount from '../images/Frame (3).png';
import AuthUser from './AuthUser';
import React, { useEffect, useState } from 'react';

function Header() {
    const { token, logout } = AuthUser();
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';
    const isRegisterPage = location.pathname === '/sign-up';
    const isSubscriptionPage = location.pathname === '/subscription';
    const logoutUser = () => {
        if (token !== undefined) {
          logout();
        } 
      };
    const toggleBodyClassOnClick = () => {
        const htmlTag = document.documentElement;
        if (htmlTag.classList.contains('menu_active')) {
          htmlTag.classList.remove('menu_active');
        } else {
          htmlTag.classList.add('menu_active');
        }
      };

      const isActiveLink = (path) => {
        return location.pathname === path;
    };
    const [user, setUserdetail] = useState('');
       
      useEffect(() => {
      const  Profile =  sessionStorage.getItem("user");
    const userdata = JSON.parse(Profile)
        setUserdetail(userdata);
      }, []);

    // console.log(user.id);
  
    return (
        <>
    {!isLoginPage && !isRegisterPage && !isSubscriptionPage &&(
        <div className="header_inner">
        <div className="container">
            <nav className="navbar navbar-expand-sm">
                <button className="navbar-toggler" type="button" onClick={toggleBodyClassOnClick} data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="logo"><Link to="/dashboard"><img src={Logo} alt="Description of the image" /></Link></div>
                <div className="collapse navbar-collapse" id="navbarNav">

                 <ul className="navbar-nav">
                    <li className={`nav-item ${isActiveLink('/') ? 'active' : ''}`}>
                        <Link className="nav-link active" to="/dashboard">Home</Link>
                    </li>
                    <li className={`nav-item ${isActiveLink('#') ? 'active' : ''}`}>
                        <Link className="nav-link" to="#">Earnings</Link>
                    </li>
                    <li className={`nav-item ${isActiveLink('/faq') ? 'active' : ''}`}>
                        <Link className="nav-link" to="/mission">Mission</Link>
                    </li>
                    <li>
                    <div className="dropdown">
                    {/* {user.first_name.charAt(0).toUpperCase()} */}
                        <button className="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                        {user.profile_name}
                    </button>
                    <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/myprofile"><img src={MyAccount} alt="protected" /> My Account</Link>
                        <Link className="dropdown-item" to="#"><img src={Help} alt="protected" /> Help</Link>
                        <Link className="dropdown-item" to="#"><img src={Team} alt="protected" /> Team Overview</Link>
                        <Link className="dropdown-item" to="/">
                      <span onClick={logoutUser}><img src={LogoutImage} alt="protected" /> Logout</span>
                    </Link>
                    </div>
                    </div>
                    </li>
                </ul>
              </div>
            </nav>
            </div>
            </div>
        )}
        </>
    );
}

export default Header;

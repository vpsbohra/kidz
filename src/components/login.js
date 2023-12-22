import React, { useState, useEffect } from "react";
import AuthUser from './AuthUser';
import { Link, useNavigate } from 'react-router-dom';
import show_passwImage from '../images/show_passw.png';
import show_passwEYEImage from '../images/show_passwEyeOn.png';
import login_bgImage from '../images/login_bg001.png';


export default function Login() {
    const { http, setToken } = AuthUser();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [loginerror, setLoginerror] = useState(false);
    const submitForm = () => {
        http.post('/ambassador-login', { email: email, password: password }).then((res) => {
            setToken(res.data.user, res.data.access_token);

            if (rememberMe) {
                sessionStorage.setItem("email", email);
                sessionStorage.setItem("rememberMe", true);
            } else {
                sessionStorage.removeItem("email");
                sessionStorage.removeItem("rememberMe");
            }
        }).catch((error) => {
            if (error.response && error.response.data && error.response.data.errors) {
                setErrors(error.response.data.errors);
            }
            setLoginerror(true);
        });
        
    };
    const [errorMessage, setErrorMessage] = useState('');
    const handleError = (message) => {
        setErrorMessage(message);
      };
      const toggleShowPassword = () => {
        setShowPassword(!showPassword);
      };
      const [imgSrc, setImgSrc] = useState(
        show_passwEYEImage
    );
    const changeImg = () => {
        if (imgSrc ==  show_passwEYEImage) {
            setImgSrc(show_passwImage);
        }
        else if (imgSrc == show_passwImage) {
            setImgSrc(show_passwEYEImage);
        }
    };
    return(
        <div className="login_page_sr">
            <div className="container">
                <div className="row justify-content-center pt-5 login_page_row">
                    <div className="col-sm-6">
                        <div className="card login_sr_cnt p-4">
                            <h1 className="mb-3">Welcome Back!</h1>
                            <div className="form-group">
                                <label>Email address:</label>
                                <input type="email" className="form-control" placeholder="Enter email"
                                    onChange={e=>setEmail(e.target.value)}
                                id="email" />
                                {errors && errors.email && (
                                    <span className="text-danger">{errors.email[0]}</span>
                                )}
                            </div>
                            <div className="form-group mt-3 Password_form_sr">
                                <label>Password:</label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="form-control"
                                    placeholder="Enter password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    id="pwd"
                                />
                                {errors && errors.password && (
                                    <span className="text-danger">{errors.password[0]}</span>
                                )}
                                
                                <button className="show_passw_btn" onClick={function () { toggleShowPassword(); changeImg() }}><img src={imgSrc} alt="meet-character-1" /></button>
                                </div>

                            <div className="form-group Password_group mt-3">
                            <div className="show-pass">
                                <input
                                    type="checkbox"
                                    className="ch"
                                    id="rememberCheck"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)} 
                                />
                                Remember Me
                            </div>
                                <div className="forget-pass">
                                    <Link className="nav-link" to="/">
                                    Forget Password?
                                    </Link>
                                </div>
                            </div>
                            <div className="form-group login_btnsr mt-3">
                                <button type="button" onClick={submitForm} className="btn btn-primary mt-4">Login</button>
                                <span className={loginerror == true ? "activelogerror" : "deactivelogerror"}>Wrong Email or Password</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="create-user-section col-sm-6">
                        <h2>Not a Connector Yet?</h2>
                        <p>Share your referral code, get access to tools designed to support your success, and manage your earnings all in our dedicated Connector dashboard.</p>
                        <div className="form-group login_btnsr"><Link to="/sign-up"> CREATE YOUR ACCOUNT</Link></div>
                    </div>
                </div>
               
            </div>
        </div>
    )
}
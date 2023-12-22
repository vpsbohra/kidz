import { Routes, Route } from 'react-router-dom';
import Home from '../components/home';
import Login from '../components/login';

import SignUp from '../components/SignUp';
import FAQ from '../components/Faq';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Mission from '../components/mission';
import Help from '../components/help';
import Contact_support from '../components/contact_support';
import Myprofile from '../components/myprofile';
import Dashboard from '../components/dashboard';


function Guest() {
    return (
        <>
        <Header />
            <div className="main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="/contact_support" element={<Contact_support />} />
                    <Route path="/myprofile" element={<Myprofile />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    
                   

                </Routes>
            </div>
        </>
    );
}

export default Guest;

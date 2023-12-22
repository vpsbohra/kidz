import { Routes, Route } from 'react-router-dom';
import Myprofile from '../components/myprofile';
import Dashboard from '../components/dashboard';
import Mission from '../components/mission';
import Article from '../components/article';

function Auth() {
    
    return (
        <>
            <div className="main">
                <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/myprofile" element={<Myprofile />} />
                <Route path="/mission" element={<Mission />} />
                <Route path="/article" element={<Article />} />
                </Routes>
            </div>
        </>
    );
}

export default Auth;

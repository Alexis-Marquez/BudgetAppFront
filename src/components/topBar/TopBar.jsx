import 'react';
import InfoCardNav from './InfoCardNav.jsx';
import './TopBar.css';

const TopBar = () => {
    return (
        <nav className="top-bar">
            <div className="top-bar-left">
                <h1 className="logo-text">Budget</h1>
            </div>
            <div className="top-bar-center">
                <InfoCardNav />
            </div>
            <div className="top-bar-right">
            </div>
        </nav>
    );
};

export default TopBar;

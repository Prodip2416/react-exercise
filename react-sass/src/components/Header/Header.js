import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <div>
            <h1>This is  a Header</h1>
            <div className="first-container">
                <p>This a first container</p>
            </div>
            <div className="second-container">
                <p>This a second container</p>
            </div>
            <div className="third-container">
                <p>This a third container</p>
            </div>
        </div>
    );
};

export default Header;
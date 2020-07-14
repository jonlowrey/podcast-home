import React from 'react';
import Button from 'react-bootstrap/Button';
import mic from '../assets/mic.svg';


export function NavBar() {
    return (
        <div className="navBar">
            <div className="iconContent navLink">
                <a href="">
                <img src={mic} alt="" className="icon" />
                <strong>Black Tech Unplugged</strong>
                </a>
            </div>
            <div className="navButtons">
                <div className="navLink">
                    <a>
                        Home
                    </a>
                </div>
                <div className="navLink">
                    <a>
                        Episodes
                    </a>
                </div>
                <div className="navLink">
                    <a>
                        About
                    </a>
                </div>
            </div>
            <div className="button">
                Subscribe
                </div>
        </div>
    )
}
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='flex p-4 justify-center w-[98vw] mt-4 rounded-xl bg-[#FBDFD3]'>
            <NavLink
                to="/"
                exact
                className={({ isActive }) => (isActive ? 'font-bold pr-5' : 'pr-5')}
            >
                Home
            </NavLink>
            <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? 'font-bold pr-5' : 'pr-5')}
            >
                Contact
            </NavLink>
            <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? 'font-bold' : '')}
            >
                About
            </NavLink>
        </nav>
    );
}

export default Navbar;
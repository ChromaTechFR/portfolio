import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav>
        <div className='nav-container'>
          <div className='link'>
            <div className='slogan-container'>
              <h3>Developpeur</h3>
            </div>
            <div className='link-container'>
              <NavLink exact to='/portfolio/contact'>
                <h3>Contact</h3>
              </NavLink>

              <NavLink exact to='/'>
                <h3>Home</h3>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

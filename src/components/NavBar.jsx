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
              <a href='#skills'>
                <h3>Skills</h3>
              </a>
              <a href='#'>
                <h3>Home</h3>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

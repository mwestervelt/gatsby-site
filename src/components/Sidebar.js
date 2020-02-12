import React, { useState } from 'react';
import Nav from './Nav';
import { Link } from 'gatsby';
import logo_idea from '../assets/images/logo-idea.png';

export default function SideBar({ fullMenu }) {
  const [headerOpen, toggleHeader] = useState(false);
  return (
    <header id="header" className={`${fullMenu ? '' : 'alt'}`}>
      <h1>
        {/* <Link to="/">Spectral</Link> */}
      </h1>
      <div className={`${headerOpen ? 'is-menu-visible' : ' '}`}>
        <Nav onMenuToggle={() => toggleHeader(!headerOpen)} />
      </div>
      {/* <div className="box alt">
        <div className="row gtr-50 gtr-uniform">
          <div className="col-6"><span className="image right">  <img src={logo_idea} /></span></div>
        </div>
      </div> */}

    </header>
  );
}

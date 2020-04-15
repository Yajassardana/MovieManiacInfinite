import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
const Navbar=({icon,title})=> {
    return(
  <div>
    <nav className="navbar navbar-dark bg-danger">
      <a className="navbar-brand" href="/"><i className={icon}></i>  {title}</a>
        <ul className="nav justify-content-end">
    <li className="nav-item">
      <a className="nav-link" href="/"><i class="fas fa-infinity"></i></a>
    </li>
    <li className="nav-item">
      <a className="nav-link " href="/">Home</a>
    </li>
  </ul>
    </nav>
  </div>
    );
}
 Navbar.defaultProps = {//Navbar. instead of static for function using hooks approach
  title:'Movie Mania',
  icon:'fas fa-film'
};
Navbar.propTypes = {//same as above
  title: PropTypes.string.isRequired,
  icon:PropTypes.string.isRequired
};
export default Navbar;

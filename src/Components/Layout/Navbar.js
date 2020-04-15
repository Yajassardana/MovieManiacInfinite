import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
const Navbar=({icon,title})=> {
    return(
      <div>
        <nav className="navbar navbar-light bg-light">
          <a class="navbar-brand" href="/"><i className={icon}></i>  {title}</a>
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

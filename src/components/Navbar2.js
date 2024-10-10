import React from 'react'
// rfc
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"
export default function Navbar(props) {
  const capitalize = (word) => {
    if (typeof word === 'string') {
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    else if (typeof word === 'number') {
      return word.toString();
  }
   else{ return '';}
  }
  
  
  
  
  return (
    // <a classNameName="navbar-brand" href="/">{props.title }</a>
    // navbar-${props.mode}`}
    // href="/"
    <nav className={`navbar navbar-expand-lg  navbar-${props.mode}  bg-${props.mode} `}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          
        </ul>
        <div className={`form-check form-switch text-${props.mode ==="light"?"dark":"light"}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togglegreen} />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {(props.mode ==="light"?"Green":"Light")}mode&nbsp; &nbsp;</label>
</div>


        <div className={`form-check form-switch text-${props.mode ==="light"?"dark":"light"}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleblue} />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {(props.mode ==="light"?"Blue":"Light")}mode&nbsp; &nbsp;</label>
</div>




        <div className={`form-check form-switch text-${props.mode ==="light"?"dark":"light"}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togglemode} />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {capitalize(props.mode ==="light"?"dark":"light")}mode</label>
</div>
       
       
      </div>
    </div>
  </nav>
  )
}
Navbar.propTypes={title:PropTypes.string}
Navbar.defaultProps={
    title:"set title"
}

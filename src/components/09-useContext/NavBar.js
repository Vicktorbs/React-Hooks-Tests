import React from 'react';
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark  bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">useContext</NavLink>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {/* NavLink permite identificar la ruta en la que se esta ubicado */}
                        <NavLink activeClassName="active" exact to="/" className="nav-link active" aria-current="page">Home</NavLink>
                        <NavLink activeClassName="active" exact to="/about" className="nav-link">About</NavLink>
                        <NavLink activeClassName="active" exact to="/login" className="nav-link">Login</NavLink>
                        {/* <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                        <Link to="/about" className="nav-link">About</Link>
                        <Link to="/login" className="nav-link">Login</Link> */}
                    </div>
                </div>
            </div>
        </nav>
    )
}

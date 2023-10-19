import React from 'react';
import logo from '../logo.svg'
import {Link, Outlet} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor:"#e3f2fd"}}>
                <div className="container-fluid">
                    <Link to ={'/'}>
                        <img src={logo} alt="Logo" width="50" height="50" className="d-inline-block align-text-top mt-1" />
                    </Link>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav">
                            <Link to={'/'} className='nav-link active'>
                            <div className="nav-item">
                            <div className="nav-link active" aria-current="page" href="#">Home</div>
                            </div>
                            </Link>

                            <Link to={'/addItem'} className='nav-link active'>
                            <div className="nav-item">
                            <div className="nav-link" aria-current="page">Add Item</div>
                            </div>
                            </Link>
                        </div>
                        </div>

                    </div>
            </nav>
            <div className="container-fluid p-4">
                <Outlet/>
            </div>
        </div>
    );
}

export default Navbar;

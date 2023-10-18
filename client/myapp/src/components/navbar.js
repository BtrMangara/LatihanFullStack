import React from 'react';


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor:"#e3f2fd"}}>
                <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' alt="Logo" width="30" height="24" className="d-inline-block align-text-top mt-1" />
                   
                    </a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
        </div>
    );
}

export default Navbar;

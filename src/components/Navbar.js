// React imports
import React from 'react'

// CSS imports
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Navbar = ({ user, onLogout }) => {
    const researcher = user.roles.indexOf("researcher") > -1;
    const staff = user.roles.indexOf("staff") > -1;
    return (
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: 'black'}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#" style={{color:'white'}}>Base</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        { researcher && <li className="nav-item dropdown">
                        <div className="dropdown" style={{marginRight:"10px"}}>
                            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" 
                                style={{color: 'white'}} id="dropdownMenuButton1">
                                Researcher
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        </li>}
                        { staff && <li className="nav-item dropdown">
                            <div className="dropdown" style={{marginRight:"10px"}}>
                                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" 
                                    style={{color: 'white'}} id="dropdownMenuButton2">
                                        Staff                         
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </li>}
                    </ul>
                    <ul class="navbar-nav">
                        <li className="nav-item dropdown">
                            <div className="dropdown-menu-end" style={{marginRight:"10px"}}>
                                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" 
                                    style={{color: 'white'}} id="dropdownMenuButton3">
                                    {user.name}           
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">Settings</a></li>
                                    <li><a className="dropdown-item" onClick={onLogout}>Logout</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
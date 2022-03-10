// React imports
import React from 'react';

// CSS imports
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    const researcher = true;
    const staff = true;
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Base</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        { researcher && <li className="nav-item dropdown">
                        <div class="dropdown" style={{marginRight:"10px"}}>
                            <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Researcher
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        </li>}
                        { staff && <li className="nav-item dropdown">
                            <div class="dropdown" style={{marginRight:"10px"}}>
                                <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Staff
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </li>}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Home;
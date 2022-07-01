import React from 'react';
import './styles.css';


function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid position-relative">
                    <img src={'/assets/brand.png'} />
                    <div class="collapse navbar-collapse">
                        <div className="nav-item mx-auto position-absolute w-25 top-0 start-50">
                            <input class="nav-item form-control rounded-pill" type="search" placeholder="Search for your favorite groups in ATG" aria-label="Search"/>
                        </div>
                        <ul className="navbar-nav me-auto position-absolute top-0 end-0 mt-auto mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <b>Create account.{" "}<span className="text-primary">It's free!</span></b>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                </div>
            </div>
        </nav>
        <div className='jumbotron p-5 mb-4'>
            <div className='container'>
                <div className='row row-header pt-5'>
                    <div className='col-12 col-sm-6 pt-5 text-white'>
                        <h1>Computer Engineering</h1>
                        <p>142,765 Computer engineers follow this</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Header;
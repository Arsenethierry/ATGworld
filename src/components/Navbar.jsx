import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({user}) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid position-relative">
                    <Link to="/">
                        <img src={'/assets/brand.png'} />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="menu">
                        <div className="nav-item mx-auto position-absolute w-25 top-0 start-50">
                            <input class="nav-item form-control rounded-pill" type="search" placeholder="Search for your favorite groups in ATG" aria-label="Search"/>
                        </div>
                        <ul className="navbar-nav me-auto position-absolute top-0 end-0 mt-auto mb-lg-0">
                            {
                                user? (
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <b>{user}</b>
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link to='/'>
                                            <li><a class="dropdown-item" href="#">log Out</a></li>
                                        </Link>
                                        <li><a class="dropdown-item" href="#">My profile</a></li>
                                    </ul>
                                </li>
                                ): (
                                    <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <b>Create account.{" "}<span className="text-primary">It's free!</span></b>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link to='login'>
                                        <span class="dropdown-item" href="#">Sign Up</span>
                                        </Link>
                                    </li>
                                    <li><a class="dropdown-item" href="#">Help</a></li>
                                </ul>
                            </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </nav>  
        </div>
    );
}

export default Navbar;
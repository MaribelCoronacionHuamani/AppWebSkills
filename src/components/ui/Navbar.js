import React from 'react';
import '../../App.css';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-ieee">
            <div className="py-3 px-5 text-white w-100 d-flex align-items-center justify-content-between">
                <div>
                    <h2>LOGO</h2>
                </div>
                <div className="w-75 d-flex justify-content-evenly align-items-center px-5">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <h5 className="nav-link dropdown-toggle text-white fw-400" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Nosotros
                            </h5>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <h5 className="nav-link dropdown-toggle text-white fw-400" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Alianzas
                            </h5>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                    <h5 className="fw-400">Contáctanos</h5>
                    <h5 className="fw-400">FAQS</h5>
                </div>
                <div>
                    <h1>IEEE</h1>
                </div>
            </div>
        </nav>
    )
}

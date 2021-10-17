import React from 'react';
import '../../App.css';
import logocs from '../../assets/logocs.png';
import logoieee from '../../assets/logoieee.png';

export const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-ieee">
            <div class="container-fluid">
                <a className="navbar-brand text-white nb-ieee" href="#">
                    <img src={logocs} alt="ieee-cs"></img>
                </a>
                <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav d-flex justify-content-around" style={{width:"100%"}}>
                    <li class="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Nosotros
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item text-black" href="#">Nosotres</a></li>
                        <li><a className="dropdown-item text-black" href="#">Nosotris</a></li>
                        <li><a className="dropdown-item text-black" href="#">Nosotras</a></li>
                    </ul>
                        </li>
                    <li class="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Alianzas
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
                        <li><a className="dropdown-item text-black" href="#">La U</a></li>
                        <li><a className="dropdown-item text-black" href="#">Alianza</a></li>
                        <li><a className="dropdown-item text-black" href="#">Criscat</a></li>
                    </ul>
                    </li>
                    <li class="nav-item">
                    <a className="nav-link active text-white" aria-current="page" href="#">Contáctanos</a>
                    </li>
                    <li class="nav-item">
                    <a className="nav-link text-white" href="#">FAQS</a>
                    </li>
                </ul>
                
                </div>
                <a className="navbar-brand text-white nb-ieee" href="#">
                    <img src={logoieee} alt="ieee-cs"></img>
                </a>
            </div>
        </nav>
    )
}

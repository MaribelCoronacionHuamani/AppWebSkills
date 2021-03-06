import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.css';
import logocs from '../../assets/logocs.png';
import logoieeesm from '../../assets/logoieeesm.png';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-ieee">
            <div className="container-fluid">
                <NavLink className="navbar-brand text-white nb-ieee" exact to="/">
                    <img src={logocs} alt="ieee-cs"></img>
                </NavLink>
                <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav d-flex justify-content-around" style={{width:"100%"}}>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Nosotros
                    </a> 
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><NavLink className="dropdown-item text-black" exact to="/mision-vision-valores">Mision y vision</NavLink></li>
                        <li><NavLink className="dropdown-item text-black" exact to="/beneficios-IEEE">Beneficios IEEE</NavLink></li>
                        <li><NavLink className="dropdown-item text-black" exact to="/nuestras-direciones" >Nuestras direcciones</NavLink></li>
                    </ul>
                        </li>
                    
                        
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Alianzas
                    </a>    
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
                        <li><NavLink className="dropdown-item text-black" exact to="/">Sponsors</NavLink></li>
                        <li><NavLink className="dropdown-item text-black" exact to="/alianzas-beneficios">Beneficios</NavLink></li>
                    </ul>
                        </li>
                        

                    <li className="nav-item">
                        <NavLink
                            className="nav-link active text-white"
                            exact
                            to="/contacto"
                        >
                            Cont??ctanos
                        </NavLink>
                    </li>
                    
                        
                    <li className="nav-item">
                    <NavLink className="nav-link text-white" exact to="/preguntas-frecuentes">FAQS</NavLink>
                    </li>
                </ul>
                
                </div>
                <NavLink className="navbar-brand text-white nb-ieee" exact to="/">
                    <img src={logoieeesm} alt="ieee-cs-sm"></img>
                </NavLink>
            </div>
        </nav>
    )
}

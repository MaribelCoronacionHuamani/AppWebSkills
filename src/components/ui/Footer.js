import React from 'react';

export const Footer = () => {
    return (
        /*<footer className="bg-ieee mt-5 py-4">
            <ul className="w-25 mx-auto text-white d-flex align-items-center justify-content-evenly icons-footer">
                <li><i className="fab fa-facebook fs-1"></i></li>
                <li><i className="far fa-envelope fs-1"></i></li>
                <li><i className="fab fa-linkedin-in fs-1"></i></li>
                <li><i className="fab fa-instagram fs-1"></i></li>
            </ul>
        </footer>*/
        <footer className="bg-ieee mt-0 py-5">
            <div className="icons-container">
                <a href="#" className="social-media-icon"><i className='bx bxl-facebook'></i></a>
                <a href="#" className="social-media-icon"><i className='bx bxl-google'></i></a>
                <a href="#" className="social-media-icon"><i className='bx bxl-linkedin'></i></a>
                <a href="#" className="social-media-icon"><i className='bx bxl-instagram'></i></a>
            </div>
        </footer>
    )
}

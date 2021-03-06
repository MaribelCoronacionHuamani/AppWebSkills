import React from 'react';
import imgSlider from './exampleimgslider.jpg';
import { EventCard } from './EventCard'

export const CarouselProy = ({ link }) => {
    return (
        <div>
            <div id="carouselProyectos" className="carousel carousel-dark slide " data-bs-ride="carousel">
            <div className="carousel-inner" style={{paddingTop:"2rem", paddingBottom:"1rem"}}>
                <div className="carousel-item active">
                    <div className="container d-block">
                        <div className="row">
                            <EventCard link={link}/>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="container d-block">
                        <div className="row">
                            <EventCard link={link}/>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="container d-block">
                        <div className="row">
                            <EventCard link={link}/>
                        </div>
                    </div>                    
                </div>
                <div className="carousel-item">
                    <div className="container d-block">
                        <div className="row">
                            <EventCard link={link}/>
                        </div>
                    </div>                    
                </div>                    
            </div>


            <button className="carousel-control-prev" type="button" data-bs-target="#carouselProyectos" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" style={{color:"red"}} aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselProyectos" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>
                
        </div>            
        </div>
    )
}

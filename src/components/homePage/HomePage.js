import React from 'react'
import { Carousel } from './Carousel'
import { EventCard } from './EventCard'
import { CarouselNov } from './CarouselNov'

export const HomePage = () => {
    

    let link_novedad="/novedad" ,
        link_proyecto="/proyecto"; 
    return (
        <div>

            <Carousel />
            <div className="py-5 bg-ieee">
                <h3 className="text-center mb-4 text-white">Novedades</h3>
                <CarouselNov link={link_novedad}/>
            </div>

            <div className="py-5">
                <h3 className="text-center mb-4" style={{paddingBottom:"1rem"}}>Nuestros Proyectos</h3>
                <div className="container">
                    <div className="row">
                        <EventCard link={link_proyecto}/>
                        <EventCard link={link_proyecto}/>
                        <EventCard link={link_proyecto}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

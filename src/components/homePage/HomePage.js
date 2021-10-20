import React from 'react'
import { Carousel } from './Carousel'
import { EventCard } from './EventCard'
import { CarouselNov } from './CarouselNov'

export const HomePage = () => {
    return (
        <div>

            <Carousel />
            <div className="py-5 bg-ieee">
                <h3 className="text-center mb-4 text-white">Novedades</h3>
                <CarouselNov/>
            </div>

            <div className="py-5">
                <h3 className="text-center mb-4" style={{paddingBottom:"1rem"}}>Nuestros Proyectos</h3>
                <div className="container">
                    <div className="row">
                        <EventCard />
                        <EventCard />
                        <EventCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

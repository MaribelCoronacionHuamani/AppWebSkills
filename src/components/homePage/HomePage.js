import React from 'react'
import { Carousel } from './Carousel'
import { EventCard } from './EventCard'

export const HomePage = () => {
    return (
        <div>

            <Carousel />

            <div className="py-5 bg-ieee">
                <h3 className="text-center mb-4 text-white" style={{paddingBottom:"1rem"}}>Novedades</h3>
                <div className="container">
                    <div className="row">
                        <EventCard />
                        <EventCard />
                        <EventCard />
                    </div>
                </div>
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

import React from 'react'
import { EventCard } from './EventCard'

export const HomePage = () => {
    return (
        <div>
            <div className="py-5">
                <h3 className="text-center mb-4">Novedades</h3>
                <div className="container">
                    <div className="row">
                        <EventCard />
                        <EventCard />
                        <EventCard />
                    </div>
                </div>
            </div>


            <div className="py-5">
                <h3 className="text-center mb-4">Nuestros Proyectos</h3>
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

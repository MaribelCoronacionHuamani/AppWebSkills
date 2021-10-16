import React from 'react'

export const EventCard = () => {
    return (
        <div className="tarjeta col-lg-3 mx-auto bg-white mt-5 mt-lg-0">
            <div>
                <img src="https://via.placeholder.com/250x180" alt="example" />
            </div>
            <div className="p-2">
                <div>
                    <h5 className="color-sec">CBS Sunday Morning</h5>
                    <p>
                        I want to talk about the hard stuff people wonder about but maybe are embarassed
                    </p>
                </div>
                <button className="btn btn-outline-primary w-50 float-end mb-2">Leer más</button>
            </div>
        </div>
    )
}

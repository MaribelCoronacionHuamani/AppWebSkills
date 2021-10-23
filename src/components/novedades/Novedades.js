import React from 'react'
import imgSlider from './SliderNovedad.jpg';

export const Novedades = () => {
    return (
        <div className="novedades">
            <h1 className="novedades-titulo">ESTE ES EL TÍTULO DE UNA NOVEDAD: VAMOS A PONER ALGO DE RELLENO</h1>
            <p className="novedades-descripcion">Esta es la descripción (resumen de la novedad). Esta es la descripción (resumen de la novedad). Esta es la descripción (resumen de la novedad)</p>
            <p className="novedades-fecha">10 de octubre del 2021 12:22 AM | Actualizado el 10 de octubre del 2021 12:31 AM</p>
            <figure className="novedades-baner">
                <img className="novedades-baner__imagen" src={imgSlider} /> 
                <figcaption className="novedades-baner__descripcion">Opcional: Descripción - Fuente de la imagen </figcaption>
            </figure>
            <p className="novedades-especificacionimagen">Acá va de manera más grande las cosillas de la Novedad. Acá va de manera más grande las cosillas de la Novedad.Acá va de manera más grande las cosillas de la Novedad.Acá va de manera más grande las cosillas de la Novedad.Acá va de manera más grande las cosillas de la Novedad.Acá va de manera más grande las cosillas de la Novedad.Acá va de manera más grande las cosillas de la Novedad.Acá va de manera más grande las cosillas de la Novedad.Acá va de manera más grande las cosillas de la Novedad.Acá va de manera más grande las cosillas de la Novedad.</p>
        </div>
    )
}
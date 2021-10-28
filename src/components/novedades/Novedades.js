import React from 'react'
import imgSlider from './SliderNovedad.jpg';
import { EventCard } from '../homePage/EventCard';

export const Novedades = () => {

    let linkNovedad = "/novedad"

    return (
        <div className="container py-5 my-2" style={{width:"95%", marginLeft:"auto", marginRight:"auto"}}>
            <div className="row gx-4">
                <div className="col-lg-8 novedades">
                    <h1 className="novedades-titulo">ESTE ES EL TÍTULO DE UNA NOVEDAD: VAMOS A PONER ALGO DE RELLENO</h1>
                    <p className="novedades-descripcion">Esta es la descripción (resumen de la novedad). Esta es la descripción (resumen de la novedad). Esta es la descripción (resumen de la novedad)</p>
                    <p className="novedades-fecha">10 de octubre del 2021 12:22 AM | Actualizado el 10 de octubre del 2021 12:31 AM</p>
                    <figure className="novedades-baner">
                        <img className="novedades-baner__imagen" alt="img" src={imgSlider} /> 
                        <figcaption className="novedades-baner__descripcion">Opcional: Descripción - Fuente de la imagen </figcaption>
                    </figure>
                    <p className="novedades-especificacionimagen">Acá va de manera más grande las cosillas de la Novedad. Acá va de manera más grande las cosillas de la Novedad.Acá va de manera más grande las cosillas de la Novedad.Acá va de manera más grande las cosillas de la Novedad.Acá va de manera más grande las cosillas de la Novedad.Acá va de manera más grande las cosillas de la Novedad.Acá va de manera más grande las cosillas de la Novedad.Acá va de manera más grande las cosillas de la Novedad.Acá va de manera más grande las cosillas de la Novedad.Acá va de manera más grande las cosillas de la Novedad.</p>
                </div>
                <div className="col-lg-4">
                    <div className="container overflow-auto my-4" style={{ height: "40rem" }}>
                        <div className="row">
                            <div className="container py-2" style={{backgroundColor:"#001e41" ,textAlign:"center", color:"white", alignItems:"center",display:"flex", justifyContent:"center"}}>
                                <h4>OTRAS NOVEDADES</h4>
                            </div>
                        </div>                        
                        <div className="row my-4">
                            <EventCard link={linkNovedad} />
                        </div>

                        <div className="row my-4">
                            <EventCard link={linkNovedad} />
                        </div>
                        
                        <div className="row my-4">
                            <EventCard link={linkNovedad} />
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
import React from 'react'
import imagen1 from './proyecto_01.jpg';
import imagen2 from './proyecto_02.jpg';
import imagen3 from './proyecto_03.jpg';
import imagen4 from './proyecto_04.jpg';
import llamita from '../../assets/llamita.jpg';
import { Carousel } from '../homePage/Carousel';

export const Proyectos = () => {
    return (
        <div className=" container proyectos col">
            <div className="d-flex flex-column w-100 my-4 proyecto-banner ">

                
                <img className="img-bg-banner" src={llamita} alt="hola" />

                <div className="w-100 px-5 py-4" style={{backgroundColor: "rgba(255,163,0,0.5)", marginTop:"12%"}}>
                    <h1 className="proyectos-titulo" style={{color:"rgba(0, 40, 85, 1)"}}>ESTE ES EL TÍTULO DE UN PROYECTO: VAMOS A PONER ALGO DE RELLENO</h1>
                </div>
                <div className="w-100 d-flex px-5">
                    <p className="proyectos-descripcion" style={{color:"white"}}>Esta es la descripción (resumen del proyecto). Esta es la descripción (resumen de la novedad). Esta es la descripción (resumen de la novedad)</p>                                      
                </div>
                <div className="w-100 d-flex justify-content-end px-5" style={{ backgroundColor: "rgba(0, 40, 85, 1)"}}>
                    <p style={{color:"white", marginTop:"11px"}}>10 de octubre del 2021 12:22 AM | <strong>Actualizado</strong> el 10 de octubre del 2021 12:31 AM</p>
                </div>

                                
            </div>

            <div className="proyecto-content">
                <h2 className="proyectos-subtitulo">SUBTÍTULO 1</h2>
                <p className="proyectos-parrafo">Acá se pondrían los Objetivos del Proyecto. Acá se pondrían los Objetivos del Proyecto. Acá se pondrían los Objetivos del Proyecto. Acá se pondrían los Objetivos del Proyecto.</p>
                <h2 className="proyectos-subtitulo">SUBTÍTULO 2</h2>
                <p className="proyectos-parrafo">Acá se puede hacer sub-divisiones. Poner todo lo que se vino realizando para llevar a cabo el proyecto. Los patrocinadores, las fechas importantes, los cronogramas, etc. Acá se puede hacer sub-divisiones. Poner todo lo que se vino realizando para llevar a cabo el proyecto. Los patrocinadores, las fechas importantes, los cronogramas, etc. Acá se puede hacer sub-divisiones. Poner todo lo que se vino realizando para llevar a cabo el proyecto. Los patrocinadores, las fechas importantes, los cronogramas, etc. </p>
                <div className="my-5 w-100 d-flex justify-content-center">
                    <div className="carousel-proyecto">
                        <Carousel/>
                    </div>
                    
                </div>



            </div>


        </div>
    )
}
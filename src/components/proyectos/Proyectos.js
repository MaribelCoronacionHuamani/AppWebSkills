import React from 'react'
import imagen1 from './proyecto_01.jpg';
import imagen2 from './proyecto_02.jpg';
import imagen3 from './proyecto_03.jpg';
import imagen4 from './proyecto_04.jpg';

export const Proyectos = () => {
    return (
        <div className="proyectos">
            <h1 className="proyectos-titulo">ESTE ES EL TÍTULO DE UN PROYECTO: VAMOS A PONER ALGO DE RELLENO</h1>
            <p className="proyectos-descripcion">Esta es la descripción (resumen del proyecto). Esta es la descripción (resumen de la novedad). Esta es la descripción (resumen de la novedad)</p>
            <p className="proyectos-fecha">10 de octubre del 2021 12:22 AM | Actualizado el 10 de octubre del 2021 12:31 AM</p>
            <h2 className="proyectos-subtitulo">OBJETIVO</h2>
            <p className="proyectos-parrafo">Acá se pondrían los Objetivos del Proyecto. Acá se pondrían los Objetivos del Proyecto. Acá se pondrían los Objetivos del Proyecto. Acá se pondrían los Objetivos del Proyecto.</p>
            <h2 className="proyectos-subtitulo">PROCEDIMIENTO</h2>
            <p className="proyectos-parrafo">Acá se puede hacer sub-divisiones. Poner todo lo que se vino realizando para llevar a cabo el proyecto. Los patrocinadores, las fechas importantes, los cronogramas, etc. Acá se puede hacer sub-divisiones. Poner todo lo que se vino realizando para llevar a cabo el proyecto. Los patrocinadores, las fechas importantes, los cronogramas, etc. Acá se puede hacer sub-divisiones. Poner todo lo que se vino realizando para llevar a cabo el proyecto. Los patrocinadores, las fechas importantes, los cronogramas, etc. </p>
            <h2 className="proyectos-subtitulo">RESULTADOS</h2>
            <p className="proyectos-parrafo">Poner las fotos del proyecto y las descripciones. Entre otras cosillas..</p>
            <div className="contenedor-baners">
                <figure className="proyectos-baner">
                    <img src={imagen1}  className="proyectos-baner__imagen"/> 
                    <figcaption className="proyectos-baner__descripcion">Opcional: Descripción - Fuente de la imagen </figcaption>
                </figure>
                <figure className="proyectos-baner">
                    <img src={imagen2}  className="proyectos-baner__imagen" /> 
                    <figcaption className="proyectos-baner__descripcion">Opcional: Descripción - Fuente de la imagen </figcaption>
                </figure>
                <figure className="proyectos-baner">
                    <img src={imagen3}  className="proyectos-baner__imagen"/> 
                    <figcaption className="proyectos-baner__descripcion">Opcional: Descripción - Fuente de la imagen </figcaption>
                </figure>
                <figure className="proyectos-baner">
                    <img src={imagen4}  className="proyectos-baner__imagen"/> 
                    <figcaption className="proyectos-baner__descripcion">Opcional: Descripción - Fuente de la imagen </figcaption>
                </figure>
            </div>
            <h2 className="proyectos-subtitulo">CONCLUSIONES</h2>
            <p className="proyectos-parrafo">Poner las Conclusiones del proyecto.</p>
        </div>
    )
}
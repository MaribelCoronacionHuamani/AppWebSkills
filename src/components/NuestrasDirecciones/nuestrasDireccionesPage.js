import React from "react";
import { ContentModelBanner } from "../ui/ContentModelBanner"
import img from "../contactPage/programming-banner.jpg"
import llama from "../NuestrasDirecciones/llama.jpg";


export const nuestrasDireccionesPage =()=>{
return(
    <div>
        <ContentModelBanner
            title="Nuestras Direcciones"
            subtitle="Conoce las direcciones que conforman la IEEE CS"
            p="“No hay problema que no podamos resolver juntos, y muy pocos que podamos resolver por nosotros mismos"
            autor="Lyndon Johnson"
            img={img}
        />
        
        <div class="container mt-5" >
            <div class="row">
                    <section class="col-sm-4 text-center">
                        <div className="contenedor-perfil-direc">
                            <h2 className="tittle-direc">Dirección de Logística</h2>
                            <img src={llama}  class=".img-responsive rounded mx-auto d-block img-rounded mt-4" width="204" height="200" alt="..."/>
                            <p className="mt-3 name-direc" >Marco Sánchez</p>
                            <p className="mt-3" >Director de Logistica</p> 
                        </div>
                    </section>
                    <section className="col-sm-8 sombra-texto contenedor-informacion">
                        <p>Hobala p locrero</p>
                        <p>(Aqui va texto) Sunt in culpa qui officia 
                            deserunt mollit anim id est laborum consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. Ut enim ad minim 
                            veniam, quis nostrud exercitation ullamco.</p>
                    </section>
                </div>
        </div>
    </div>
)

}
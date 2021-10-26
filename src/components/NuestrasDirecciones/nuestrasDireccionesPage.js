import React from "react";
import { ContentModelBanner } from "../ui/ContentModelBanner";
import img from "../contactPage/programming-banner.jpg"

// import img from "../NuestrasDirecciones/llama.jpg";

export const NuestrasDireccionesPage =()=>{
return(
    <div>
        <ContentModelBanner
            title="Nuestras Direcciones"
            subtitle="Conoce las direcciones que conforman la IEEE CS"
            p="“No hay problema que no podamos resolver juntos, y muy pocos que podamos resolver por nosotros mismos"
            autor="Lyndon Johnson"
            img={img}
        />
        
        <div class="container mt-5">
            <div class="row">
                <section class="col-sm-4 text-center">
                    <h2 className="tittle-direc">Dirección de Logística</h2>
                    <img src="https://www.latercera.com/resizer/V5aqG9i9lnIZsWyq5mDUSVg5-RQ=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/V4TSQHKN2RD3DBB2YSCKGSDVMU.jpg" class=".img-responsive rounded mx-auto d-block img-rounded mt-4" width="204" height="200" alt="..."/>
                    <p className="mt-3 name-direc" >Marco Sánchez</p>
                    <p className="mt-3" >Director de Logistica</p>
                      
                </section>
                <section class="col-sm-8">
                    <h2>TITLE HEADING</h2>
                    <h5>Title description, Dec 7, 2020</h5>
                    <div class="fakeimg">Fake Image</div>
                    <p>Some text..</p>
                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </section>
            </div>
        </div>
    </div>
)

}
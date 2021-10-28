import React from "react";
import { ContentModelBanner } from "../ui/ContentModelBanner";
import img from "../contactPage/programming-banner.jpg"

import llama from "../NuestrasDirecciones/llama.jpg";

export const AlianzasCsPage =()=>{
return(
    <div>
        <ContentModelBanner
            title="Alianzas y Sponsors"
            subtitle="Ingresa a los logos y conoce nuestras alianzas"
            p="“No hay problema que no podamos resolver juntos, y muy pocos que podamos resolver por nosotros mismos.”"
            autor="Lyndon Johnson"
            img={img}
        />
        
        <div className="conteiner mt-5">
            <div className="background-alianzas  row">
                
            </div>
        </div>
        
    </div>
)

}
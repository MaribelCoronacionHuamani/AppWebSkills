import React from "react";
import { ContentModelBanner } from "../ui/ContentModelBanner";
import img from "../contactPage/programming-banner.jpg";
import { MisionContainers } from "./MisionContainers";


export const MisionPage =()=>{
return(
    <div>
        <div className="bg-ieee-2">
            <ContentModelBanner
                title="Misión, Visión y Valores"
                subtitle="Ingresa a los logos y conoce nuestras alianzas"
                p="No hay problema que no podamos resolverlo juntos, y muy pocos que podamos resolver por nosotros mismos"
                autor="Lyndon Johnson"
                img={img}
            />
        </div>
        
        <MisionContainers/>
    </div>
)

}
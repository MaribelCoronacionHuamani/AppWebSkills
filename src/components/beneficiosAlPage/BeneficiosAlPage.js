import React from 'react'
import { ContentModelBanner } from '../ui/ContentModelBanner';
import img from '../contactPage/programming-banner.jpg';
import { BeneficiosContainer } from './BeneficiosContainer';


export const BeneficiosAlPage = () => {
    return (
        <div className="fondo-beneficio">
            <div className="mb-4">
                <ContentModelBanner 
                    title="Beneficios" 
                    subtitle="Descubre todo lo que puedes lograr con nosotros" 
                    p="Todos los beneficios que ofrecemos, estamos seguros que serán de gran ayuda"
                    img={img}
                />
            </div>
            <div >
                <BeneficiosContainer/>
            </div>

        </div>
    )
}

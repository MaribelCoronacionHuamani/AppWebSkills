import React from 'react';
import { ContentModelBanner } from '../ui/ContentModelBanner';
import img from '../contactPage/programming-banner.jpg'
import { InfoContainer } from '../misionPage/InfoContainer';
import { MisionContainers } from '../misionPage/MisionContainers';
import { BeneficiosCSConatainer } from './BeneficiosCSContainers';


export const BeneficiosCsPage =()=>{
        return (
            <div>
                <ContentModelBanner
                    title="Beneficios de la IEEE"
                    subtitle="Al formar parte de la IEEE obtienes varios beneficios."
                    img={img}
                />
                <BeneficiosCSConatainer/>
            </div>
            
        )
}

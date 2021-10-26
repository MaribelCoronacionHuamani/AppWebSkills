import React from 'react';
import { ContentModelBanner } from '../ui/ContentModelBanner';
import img from '../contactPage/programming-banner.jpg'
import { BeneficiosCSConatainer } from './BeneficiosCSContainers';


export const BeneficiosCsPage =()=>{
        return (
            <div>
                <div className="bg-ieee">
                    <ContentModelBanner
                        title="Beneficios de la IEEE"
                        subtitle="Al formar parte de la IEEE obtienes varios beneficios."
                        img={img}
                    />
                </div>
                
                <BeneficiosCSConatainer/>
            </div>
            
        )
}

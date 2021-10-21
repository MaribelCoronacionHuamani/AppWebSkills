import React, { Component } from 'react';
import { ContentModelBanner } from '../ui/ContentModelBanner';
import img from '../contactPage/programming-banner.jpg'

export const beneficiosCsPage =()=>{
        return (
            <div>
                <ContentModelBanner
                    title="Beneficios de la IEEE"
                    subtitle="Al formar parte de la IEEE obtienes varios beneficios."
                    img={img}
                />
            </div>
        )
}

import React from 'react'
import { BeneficioContainer } from './BeneficioContainer'
import foto from '../../assets/team-building.png'
export const BeneficiosContainer = () => {
    return (
        <div>
            <BeneficioContainer
                title="Ramas estudiantiles y grupos de afinidad"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at laoreet libero. Fusce non nulla ultricies, efficitur elit scelerisque, maximus nulla."
                img={foto}
            />
            <BeneficioContainer
                title="Fondos y Premios"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at laoreet libero. Fusce non nulla ultricies, efficitur elit scelerisque, maximus nulla."            
                img={foto}
            />
            <BeneficioContainer
                title="Eventos"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at laoreet libero. Fusce non nulla ultricies, efficitur elit scelerisque, maximus nulla."            
                img={foto}
            />
            <BeneficioContainer
                title="Mentoría y apoyo educativo"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at laoreet libero. Fusce non nulla ultricies, efficitur elit scelerisque, maximus nulla."            
                img={foto}
            />
        </div>
    )
}

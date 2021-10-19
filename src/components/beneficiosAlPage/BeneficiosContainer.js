import React from 'react'
import { BeneficioContainer } from './BeneficioContainer'

export const BeneficiosContainer = () => {
    return (
        <div>
            <BeneficioContainer 
                title="Beneficio 1"
                content="Lorem ipsum dolor sit amet, consectetur adispiscing elit."
                bg1="#183464"
                bg2="#405c7c"
            />
            <BeneficioContainer 
                title="Beneficio 2"
                content="Lorem ipsum dolor sit amet, consectetur adispiscing elit."
                bg1="#002855"
                bg2="#183464"

            />
            <BeneficioContainer 
                title="Beneficio 3"
                content="Lorem ipsum dolor sit amet, consectetur adispiscing elit."
                bg1="#183464"
                bg2="#405c7c"
            />
            <BeneficioContainer 
                title="Beneficio 4"
                content="Lorem ipsum dolor sit amet, consectetur adispiscing elit."
                bg1="#002855"
                bg2="#183464"
            />
        </div>
    )
}

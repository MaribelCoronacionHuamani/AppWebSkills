import React from 'react';
import { InfoContainer } from '../misionPage/InfoContainer';


export const BeneficiosCSConatainer =()=>{
    return(
        <div>
            <InfoContainer
            title="Beneficio 1"
            content="Lorem ipsum dolor sit amet, consectetur adispiscing elit."
            orden="0"
            bg1="#002855"
            />
            <InfoContainer
            title="Beneficio 2"
            content="Lorem ipsum dolor sit amet, consectetur adispiscing elit."
            orden="1"
            bg1="#183464"
            />
            <InfoContainer
            title="Beneficio 3"
            content="Lorem ipsum dolor sit amet, consectetur adispiscing elit."
            orden="0"
            bg1="#002855"
            />
            <InfoContainer
            title="Beneficio 4"
            content="Lorem ipsum dolor sit amet, consectetur adispiscing elit."
            orden="1"
            bg1="#183464"
            />
        </div>
    )
}
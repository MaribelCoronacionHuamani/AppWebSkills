import React from 'react';
import { InfoContainer } from './InfoContainer';


export const MisionContainers=()=>{
    return(
        <div className="mb-0">
            <InfoContainer
                title="Misión"
                content="Lorem ipsum dolor sit amet, consectetur adispiscing elit."
                orden="0"
                bg1="#183464"
            />
            <InfoContainer
                title="Visión"
                content="Lorem ipsum dolor sit amet, consectetur adispiscing elit."
                orden="1"
                bg1="#002855"
            />
            <InfoContainer
                title="Valores"
                content="Lorem ipsum dolor sit amet, consectetur adispiscing elit."
                orden="0"
                bg1="#183464"
            />
        </div>
    )
}
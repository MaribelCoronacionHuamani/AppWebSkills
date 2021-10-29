import React from 'react'
import { ContentModelBanner } from '../ui/ContentModelBanner'
import { ContactForm } from './ContactForm'
import img from '../contactPage/programming-banner.jpg';
import imgTeam from '../../assets/team-building.png';


export const ContactPage = () => {
    return (
        <div style={{backgroundColor:"rgba(0, 98, 155, 0.8)"}}>
            <ContentModelBanner 
                title="Contáctanos y forma parte de nuestro equipo"
                p="Participa como empresa sponsor o aliada, formando parte de algún proyecto nuestro, siendo miembro de la organización o siguiendo nuestros eventos de cerca"
                img={img}
            />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <ContactForm />
                    </div>
                    <div className="col-md-6">
                        <div className="py-5 px-5" style={{textAlign:"center", color:"white"}}>
                            <h3>Hola qué tal raaa 1,2,3 pa qué tú me llama si tú no me conoce pa qué, pa gozar la papeleta como gozamo anoche, asdsd real hasta la muerte beibi </h3>
                            <img src={imgTeam} alt=""/>
                        </div>
                        <div className="bg-ieee">
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

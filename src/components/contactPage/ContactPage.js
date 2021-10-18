import React from 'react'
import { ContentModelBanner } from '../ui/ContentModelBanner'
import { ContactForm } from './ContactForm'
import img from '../contactPage/programming-banner.jpg';


export const ContactPage = () => {
    return (
        <div>
            <ContentModelBanner 
                title="Contáctanos y forma parte de nuestro equipo"
                p="Participa como empresa sponsor o aliada, formando parte de algún proyecto nuestro, siendo miembro de la organización o siguiendo nuestros eventos de cerca"
                img={img}
            />
            <div className="container mt-5">
                <div className="text-center w-75 mx-auto fw-400">
                    Commodo aliqua eiusmod proident nulla magna laboris elit incididunt sunt. Commodo aliqua eiusmod proident nulla magna laboris elit incididunt sunt consequat. aliqua eiusmod proident nulla magna laboris elit incididunt sunt consequat.
                </div>
                <ContactForm />
            </div>
        </div>
    )
}

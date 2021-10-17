import React from 'react'
import { ContactBanner } from './ContactBanner'
import { ContactForm } from './ContactForm'

export const ContactPage = () => {
    return (
        <div>
            <ContactBanner />
            <div className="container mt-5">
                <div className="text-center w-75 mx-auto fw-400">
                    Commodo aliqua eiusmod proident nulla magna laboris elit incididunt sunt. Commodo aliqua eiusmod proident nulla magna laboris elit incididunt sunt consequat. aliqua eiusmod proident nulla magna laboris elit incididunt sunt consequat.
                </div>
                <ContactForm />
            </div>
        </div>
    )
}

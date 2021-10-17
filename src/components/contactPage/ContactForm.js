import React from 'react';

export const ContactForm = () => {
    return (
        <form className="mt-4 contact-form">
            <div className="d-md-flex">
                <input 
                    type="text"
                    placeholder="Nombre y apellidos"
                    className="form-control me-md-3"
                />
                <input 
                    type="number"
                    placeholder="Teléfono"
                    className="form-control mt-3 mt-md-0"
                />
            </div>
            <div className="d-md-flex mt-3">
                <input 
                    type="email"
                    placeholder="Correo electrónico"
                    className="form-control me-md-3"
                />
                <input 
                    type="text"
                    placeholder="URL de Linkedin"
                    className="form-control mt-3 mt-md-0"
                />
            </div>
            <select className="form-select mt-3">
                <option defaultValue>Asunto</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <textarea 
                className="form-control mt-3"
                placeholder="Déjanos un mensaje"    
            >
            </textarea>
            <select className="form-select mt-3">
                <option defaultValue>Adjuntar archivo</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <div className="text-center">
                <input 
                    type="submit"
                    className="btn btn-send bg-ieee text-white mt-4 fw-700"
                    style={{width: '259px'}}
                    value="ENVIAR"
                />
            </div>
        </form>
    )
}

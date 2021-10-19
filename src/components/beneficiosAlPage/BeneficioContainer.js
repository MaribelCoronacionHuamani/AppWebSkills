import React from 'react'

export const BeneficioContainer = ({title, bg1, bg2, content}) => {

    const styleBenefit = {
        backgroundColor: bg1
    }

    const styleContent = {
        backgroundColor: bg2
    }

    return (
        <div className="container">
            <div className="row">
                <div style={styleBenefit} className="col-md-6 d-flex justify-content-evenly align-items-center fc-benefit text-center p-5">
                    <h1 className="fw-bold">{title}</h1>
                    <svg width="34" height="48" viewBox="0 0 34 48" className="benefit-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0V48L34 24L0 0Z" fill="#E73131" />
                    </svg>
                </div>
                <div style={styleContent} className="col-md-6 text-white d-flex align-items-center text-center p-5">
                    <p className="mb-0">
                        {content}
                    </p>
                </div>
            </div>
        </div>
    )
}

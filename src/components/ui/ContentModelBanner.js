import React from 'react'

export const ContentModelBanner = ({title, subtitle, p,autor, img}) => {

    const style = {
        minHeight: '330px',
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        position: 'relative',
        zIndex: '0'
    }

    return (
        <div className="banner-ieee d-flex align-items-center" style={style}>
            <div className="container">
                <div className="row">
                    <div className="text-white text-center col-lg-6 contact-div-content">
                        <h2 className="fw-bold">{title}</h2>
                        <h5 className="fw-lighter fs-5">{subtitle}</h5>
                        <p className="fw-400 mb-0">
                            {p}
                        </p>
                        <p className="fw-400">
                            {autor}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

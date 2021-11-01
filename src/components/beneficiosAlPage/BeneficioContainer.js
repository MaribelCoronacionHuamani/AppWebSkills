import React from 'react'


export const BeneficioContainer = ({title,img, content}) => {
    
    return (
        <div  className="container " >
            <div >
                <div className="row ">
                    <div className="col-2 mt-3 mb-4 me-0 benefit-cont d-flex justify-content-end "  >
                        <img  src={img} alt="example" style={{objectFit:"cover", width:"95px", height:"95px",backgroundColor:'#002855'}} />
                    </div>
                    <div className="col-10 mt-4 mb-4 ">
                        <h3 className="fw-bold h5 fc-benefit ">{title}</h3>
                        <p className="fw-bold fw-800">{content}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

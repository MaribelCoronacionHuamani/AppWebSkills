import React from 'react'

export const InfoContainer =({title, content,orden,bg1})=>{
    const styleInfo = {
        backgroundColor: bg1
    }

    return(
        <div  className="container-fluid bg-ieee " style={styleInfo} >
            <div className="row">
                <div className={"col-md-6 d-flex justify-content-evenly align-items-center fc-benefit text-center p-5 order-md-"+(orden)}  >
                    <h1 className="fw-bold">{title}</h1>
                </div>
                <div className="col-md-6 text-white d-flex align-items-center text-center p-5 ">
                    <p className="mb-0" >{content}</p>
                </div>
            </div>
        </div>
    )
}
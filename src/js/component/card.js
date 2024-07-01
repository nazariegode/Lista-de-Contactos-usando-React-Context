import React from "react";
import foto from "../../img/foto.jpg"

const Card = ({ id, name, email, phone, address }) => {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={foto} className="rounded mx-auto d-block rounded-circle" alt="..." width={200} height={200} />
                </div>
                <div className="col-md-6">
                    <div className="card-body d-flex flex-column justify-content-center h-100">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text mb-1"><i class="bi bi-telephone-fill"></i> {phone}</p>
                        <p className="card-text mb-1"><i class="bi bi-envelope"></i> {email}</p>
                        <p className="card-text mb-1"><i className="bi bi-geo-alt-fill"></i> {address}</p>
                    </div>
                </div>
                <div className="col-md-2">
                    <button className="btn"><i class="bi bi-pen-fill"></i></button>
                    <button className="btn"><i class="bi bi-trash3-fill"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Card
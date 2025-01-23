import React from "react";

const CartCard = (props) => {
    console.log(props.imageURL);
    return (
        <>
            <div className="card my-3">
                <img
                    src={props.imageURL}
                    className="card-img-top"
                    alt={props.name}
                />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">$undefines</p>
                    <div className="input-group mb-3">
                        <button type="button" className="btn btn-outline-secondary">-</button>
                        <button type="button" className="btn btn-outline-secondary">+</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartCard;
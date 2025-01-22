import React from "react";

const ProductCard = (props) => {
    console.log(props.imageURL);
    let serviceCost = props.serviceCost == null ? 0 : parseFloat(props.serviceCost);
    let itemCost = props.itemCost == null ? 0 : parseFloat(props.itemCost);
    let totalCost = serviceCost + itemCost;
    return (
        <>
            <div className="card my-3">
                <img
                    src={props.imageURL}
                    className="card-img-top"
                    alt={props.productName}
                />
                <div className="card-body">
                    <h5 className="card-title">{props.productName}</h5>
                    <p className="card-text">${totalCost}</p>
                    <button className="btn btn-primary">
                        Add to Cart
                    </button>
                </div>
            </div>
        </>
    )
}

export default ProductCard;
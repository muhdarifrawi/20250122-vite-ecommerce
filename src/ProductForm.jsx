import React from "react";

function ProductForm() {

    return (
        <>
            <div className="container">
                <form action="">
                    <div className="row g-3 align-items-center my-3">
                        <div className="col-auto">
                            <label htmlFor="productName" className="col-form-label">Product Name</label>
                        </div>
                        <div className="col-auto">
                            <input type="text" id="productName" name="productName" className="form-control" aria-describedby="productNameHelp" />
                        </div>
                        <div className="col-auto">
                            <span id="productNameHelp" className="form-text">
                                Insert product name
                            </span>
                        </div>
                    </div>
                    <div className="row g-3 align-items-center my-3">
                        <h1>Item</h1>
                        <div className="col-auto">
                            <label htmlFor="productName" className="col-form-label">Product Name</label>
                        </div>
                        <div className="col-auto">
                            <input type="text" id="productName" name="productName" className="form-control" aria-describedby="productNameHelp" />
                        </div>
                        <div className="col-auto">
                            <span id="productNameHelp" className="form-text">
                                Insert product name
                            </span>
                        </div>
                    </div>
                    <div className="row g-3 align-items-center my-3">
                        <h1>Service</h1>
                        <div className="col-auto">
                            <label htmlFor="productName" className="col-form-label">Product Name</label>
                        </div>
                        <div className="col-auto">
                            <input type="text" id="productName" name="productName" className="form-control" aria-describedby="productNameHelp" />
                        </div>
                        <div className="col-auto">
                            <span id="productNameHelp" className="form-text">
                                Insert product name
                            </span>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}

export default ProductForm;

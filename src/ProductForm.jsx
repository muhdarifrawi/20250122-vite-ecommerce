import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "wouter";
import { navigate } from "wouter/use-browser-location";
import { Link } from 'wouter';

function ProductForm() {
    const [productForm, setProductForm] = useState([]);
    const [submitProduct, setSubmitProduct] = useState([]);

    const params = useParams();

    console.log(params.id);

    useEffect(() => {
        const fetchProductForm = async () => {
            let endpoint;
            if (!params.id) {
                endpoint = "/products/add";
                console.log("params NOT received");
            }
            else {
                endpoint = `/products/edit/${params.id}`;
                console.log("params received");
            }
            try {
                const response = await axios.get(import.meta.env.VITE_DB_URL + endpoint);
                console.log("Product >>>", response.data)

                setProductForm(response.data);
                setSubmitProduct({
                    productNameInput: response.data.product.name,
                    productImageInput: response.data.product.image_url,
                    itemId: response.data.product.item_id_fk,
                    serviceId: response.data.product.service_id_fk
                })
                console.log("Product >>>", response.data)
                console.log("ProductForm >>> ", productForm)
            } catch (error) {
                console.log("[Error]Product form fetch error :", error);
            }
        }

        fetchProductForm();
    }, []);

    const handleFormChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setSubmitProduct(values => ({ ...values, [name]: value }))

        console.log(submitProduct);
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(submitProduct);
        let endpoint;
        if (!params.id) {
            endpoint = "/products/add";
            console.log("params NOT received");
        }
        else {
            endpoint = `/products/edit/${params.id}`;
            console.log("params received");
        }
        await axios.post(import.meta.env.VITE_DB_URL + endpoint, submitProduct)
        .then((response)=>{
            console.log(response);
        });
        navigate(`/producttable`);
    }
    return (
        <>
            <div className="container">
                <form onSubmit={handleFormSubmit}>
                    <h1>Product Form <Link role="button" className="btn btn-primary" href="/producttable">Back</Link></h1>
                    <div className="row g-3 align-items-center my-3">
                        <div className="col-auto">
                            <label htmlFor="productNameInput" className="col-form-label">Product Name</label>
                        </div>
                        <div className="col-auto">
                            <input type="text" id="productNameInput" name="productNameInput"
                                className="form-control" aria-describedby="productNameHelp"
                                value={submitProduct.productNameInput || ""}
                                onChange={handleFormChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-auto">
                            <span id="productNameHelp" className="form-text">
                                Insert product name
                            </span>
                        </div>
                    </div>
                    <div className="row g-3 align-items-center my-3">
                        <div className="col-auto">
                            <label htmlFor="productImageInput" className="col-form-label">Product Image</label>
                        </div>
                        <div className="col-auto">
                            <input type="text" id="productImageInput" name="productImageInput"
                                className="form-control" aria-describedby="productImageHelp"
                                value={submitProduct.productImageInput || ""}
                                onChange={handleFormChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-auto">
                            <span id="productImageeHelp" className="form-text">
                                Insert product image URL
                            </span>
                        </div>
                    </div>
                    <div className="row g-3 align-items-center my-3">
                        <h2>Select Service</h2>
                        <div className="col-auto">
                            <label htmlFor="serviceId" className="col-form-label">Service</label>
                        </div>
                        <div className="col-auto">
                            <select className="form-select my-3"
                                aria-label="select item"
                                name="serviceId" onChange={handleFormChange}
                                value={submitProduct.serviceId} required>
                                <option>Select service</option>
                                <option id="0" value="0">None</option>
                                {!productForm["service"] ? "" :
                                    productForm["service"].map((obj) => {
                                        return (
                                            <option id={obj.service_id}
                                                value={obj.service_id}
                                                key={obj.service_id}
                                            >
                                                {obj.name}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-auto">
                            <span id="productNameHelp" className="form-text">
                                Select service. Please create new service if service is unavailable.
                            </span>
                        </div>
                    </div>
                    <div className="row g-3 align-items-center my-3">
                        <h2>Select Item</h2>
                        <div className="col-auto">
                            <label htmlFor="itemId" className="col-form-label">Item</label>
                        </div>
                        <div className="col-auto">
                            <select className="form-select my-3"
                                aria-label="select item"
                                name="itemId" onChange={handleFormChange}
                                value={submitProduct.itemId} required>
                                <option>Select item type</option>
                                <option id="0" value="0">None</option>
                                {!productForm["item"] ? "" :
                                    productForm["item"].map((obj) => {
                                        return (
                                            <option id={obj.item_id}
                                                value={obj.item_id}
                                                key={obj.item_id}
                                            >
                                                {obj.name}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-auto">
                            <span id="productNameHelp" className="form-text">
                                Select item. Please create new item if item is unavailable.
                            </span>
                        </div>
                    </div>
                    <input type="submit" value="Submit" className="btn btn-primary mt-5" />
                </form>
            </div>

        </>
    )
}

export default ProductForm;

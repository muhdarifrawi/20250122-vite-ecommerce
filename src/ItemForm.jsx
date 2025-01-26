import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "wouter";
import { navigate } from "wouter/use-browser-location";
import { Link } from 'wouter';

function ItemForm() {

    const [itemForm, setitemForm] = useState([]);
    const [submititem, setSubmititem] = useState([]);
    // const [isEditing, setEditing] = useState(false);

    const params = useParams();

    console.log(params.id);

    useEffect(() => {
        const fetchitemForm = async () => {
            let endpoint;
            if (!params.id) {
                endpoint = "/items/add";
                console.log("params NOT received");
            }
            else {
                endpoint = `/items/edit/${params.id}`;
                console.log("params received");
            }
            try {
                const response = await axios.get(import.meta.env.VITE_DB_URL + endpoint);
                setitemForm(response.data);
                setSubmititem({
                    itemNameInput: response.data.item.name,
                    itemCostInput: response.data.item.cost,
                    itemTypeId: response.data.item.item_type_id_fk,
                    brandId: response.data.item.brand_id_fk
                })
                console.log("item >>>", response.data.itemType)
                console.log("itemForm >>> ", itemForm)
            } catch (error) {
                console.log("[Error]item form fetch error :", error);
            }
        }

        fetchitemForm();
    }, []);

    const handleFormChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setSubmititem(values => ({...values, [name]: value}))
        
        console.log(submititem);
    } 

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(submititem);
        let endpoint;
        if (!params.id) {
            endpoint = "/items/add";
            console.log("params NOT received");
        }
        else {
            endpoint = `/items/edit/${params.id}`;
            console.log("params received");
        }
        await axios.post(import.meta.env.VITE_DB_URL + endpoint, submititem)
        .then((response)=>{
            console.log(response);
        });
        navigate(`/itemtable`);
    }

    return (
        <>
            <div className="container">
                <h1>item Form<Link role="button" className="btn btn-primary" href="/itemtable">Back</Link></h1>
                <form onSubmit={handleFormSubmit}>
                    <div className="row g-3 align-items-center my-3">
                        <div className="col-auto">
                            <label htmlFor="itemNameInput" className="col-form-label">item Name</label>
                        </div>
                        <div className="col-auto">
                            <input type="text" id="itemNameInput" name="itemNameInput" 
                            className="form-control" aria-describedby="itemNameHelp" 
                            value={submititem.itemNameInput || ""}
                            onChange={handleFormChange}
                            required/>
                        </div>
                        <div className="col-auto">
                            <span id="itemNameHelp" className="form-text">
                                Insert item name
                            </span>
                        </div>
                    </div>
                    <div className="row g-3 align-items-center my-3">
                        <h1>Cost</h1>
                        <div className="col-auto">
                            <label htmlFor="itemCostInput" className="col-form-label">item Cost</label>
                        </div>
                        <div className="col-auto">
                            <input type="text" id="itemCostInput" name="itemCostInput" 
                            className="form-control" aria-describedby="itemCostHelp" 
                            value={submititem.itemCostInput || ""}
                            onChange={handleFormChange}
                            required/>
                        </div>
                        <div className="col-auto">
                            <span id="itemCostHelp" className="form-text">
                                Insert item cost
                            </span>
                        </div>
                    </div>
                    <select className="form-select my-3" 
                    aria-label="select item type" 
                    name="itemTypeId" onChange={handleFormChange} 
                    value={submititem.itemTypeId} required>
                        <option>Select item type</option>
                        {   !itemForm["itemType"] ? "" :
                            itemForm["itemType"].map((obj) => {
                                return (
                                    <option id={obj.item_type_id} 
                                    value={obj.item_type_id}
                                    key={obj.item_type_id}
                                    >
                                        {obj.name}
                                    </option>
                                )
                            })
                        }
                    </select>
                    <select className="form-select my-3" aria-label="select brand"
                    name="brandId" onChange={handleFormChange} 
                    value={submititem.brandId} required>
                        <option >Select brand</option>
                        {   !itemForm["brand"] ? "" :
                            itemForm["brand"].map((obj) => {
                                
                                return (
                                    <option id={obj.brand_id} 
                                    value={obj.brand_id}
                                    key={obj.brand_id}>
                                        {obj.name}, {obj.title}
                                    </option>
                                )
                            })
                            
                        }
                    </select>

                    <button type="submit" className="btn btn-primary mb-5">Submit</button>
                </form>
            </div>

        </>
    )
}

export default ItemForm;

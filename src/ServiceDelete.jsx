import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "wouter";
import { navigate } from "wouter/use-browser-location";
import { Link } from 'wouter';

function ServiceDelete() {
    const params = useParams();

    const handleDelete = async () => {
        console.log("delete >>> ", params.id);
        await axios.post(import.meta.env.VITE_DB_URL + `/services/delete/${params.id}`, )
        .then((response)=>{
            console.log(response);
        });
        
        navigate(`/servicetable`);
    }

    return (
        <>
            <div className="container">
                <div className="card mt-5" style={{ width: 18 + "rem" }}>
                    <div className="card-body">
                        <h5 className="card-title"><strong>Confirm Delete?</strong></h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">This will permanently delete the selection.</h6>
                        <div className="row mt-5">
                            <div className="col">
                                <Link role="button" className="btn btn-secondary" href="/servicetable">Cancel</Link>
                            </div>
                            <div className="col">
                                <button type="submit" className="btn btn-danger mb-5" onClick={handleDelete}>Delete</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceDelete;
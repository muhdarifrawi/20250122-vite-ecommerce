import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { navigate } from "wouter/use-browser-location";

function ServiceTable() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchAllService = async () => {
            try {
                const response = await axios.get(import.meta.env.VITE_DB_URL + "/services");
                setServices(response.data.services);
                // console.log("services >>>", response.data)
            } catch (error) {
                console.log("[Error]Service fetch error :", error);
            }
        }

        fetchAllService();
    }, []);

    const handleEdit = async (id) => {
        navigate(`/serviceform/${id}`, { replace: true });
    }

    return (
        <>
            <main className="container my-5">
                <h2>Services</h2>
                <table className="table table-success table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Service Name</th>
                            <th scope="col">Cost</th>
                            <th scope="col">Cost</th>
                            <th scope="col">Type of Service</th>
                            <th scope="col">Staff</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {   !services ? "" :
                            services.map((service) => {
                                // console.log(">>> ", !product["service"]["name"])
                                return (
                                    <tr key={service["service"]["service_id"]}>
                                        <th scope="row">{service["service"]["service_id"]}</th>
                                        <td>{!service["service"]["name"] ? " --- NA ---": service["service"]["name"]}</td>
                                        <td>${!service["service"]["cost"] ? " --- NA --- ": service["service"]["cost"]}</td>
                                        <td>{!service["serviceType"]["name"] ? " --- NA --- ": service["serviceType"]["name"]}</td>
                                        <td>${!service["staff"]["name"] ? " --- NA --- ": service["staff"]["name"]}</td>
                                        <td>
                                            <button className="btn btn-success mx-2" type="button" onClick={() => handleEdit(service["service"]["service_id"])}>Edit</button>
                                            <button className="btn btn-danger mx-2" type="button">Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </main>
            <footer className="bg-dark text-white text-center py-3">
                <div className="container">
                    <p>&copy; 2025 Bicycle Shop. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default ServiceTable;
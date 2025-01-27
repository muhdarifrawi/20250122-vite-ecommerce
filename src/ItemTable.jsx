import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { navigate } from "wouter/use-browser-location";
import { Link } from 'wouter';

function ItemTable() {
    const [items, setitems] = useState([]);

    useEffect(() => {
        const fetchAllitem = async () => {
            try {
                const response = await axios.get(import.meta.env.VITE_DB_URL + "/items");
                setitems(response.data.items);
                // console.log("items >>>", response.data)
            } catch (error) {
                console.log("[Error]item fetch error :", error);
            }
        }

        fetchAllitem();
    }, []);

    const handleEdit = async (id) => {
        navigate(`/itemform/${id}`, { replace: true });
    }

    const handleDelete = async (id) => {
        navigate(`/itemdelete/${id}`, { replace: true });
    }

    return (
        <>
            <main className="container my-5">
                <h2>items <Link role="button" className="btn btn-primary" href="/itemform">Add</Link></h2>
                <table className="table table-success table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Item Name</th>
                            <th scope="col">Cost</th>
                            <th scope="col">Cost</th>
                            <th scope="col">Type of Item</th>
                            <th scope="col">Brand</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {   !items ? "" :
                            items.map((item) => {
                                // console.log(">>> ", !product["item"]["name"])
                                return (
                                    <tr key={item["item"]["item_id"]}>
                                        <th scope="row">{item["item"]["item_id"]}</th>
                                        <td>{!item["item"]["name"] ? " --- NA ---": item["item"]["name"]}</td>
                                        <td>${!item["item"]["cost"] ? " --- NA --- ": parseFloat(item["item"]["cost"]).toFixed(2)}</td>
                                        <td>{!item["itemType"]["name"] ? " --- NA --- ": item["itemType"]["name"]}</td>
                                        <td>{!item["brand"]["name"] ? " --- NA --- ": item["brand"]["name"]}</td>
                                        <td>
                                            <button className="btn btn-success mx-2" type="button" onClick={() => handleEdit(item["item"]["item_id"])}>Edit</button>
                                            <button className="btn btn-danger mx-2" type="button"onClick={() => handleDelete(item["item"]["item_id"])}>Delete</button>
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

export default ItemTable;
import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

function ProductTable() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const response = await axios.get(import.meta.env.VITE_DB_URL + "/products");
                setProducts(response.data.products);
                // console.log("products >>>", response.data)
            } catch (error) {
                console.log("[Error]Product fetch error :", error);
            }
        }

        fetchAllProducts();
    }, []);



    return (
        <>
            <main className="container my-5">
                <h2>Product Inventory</h2>
                <table className="table table-success table-hover">
                    <thead>
                        <tr>
                            <th scope="col" rowSpan="2">#</th>
                            <th scope="col" >Product</th>
                            <th scope="col" colSpan="2">Item</th>
                            <th scope="col" colSpan="2">Service</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Name</th>
                            <th scope="col">Cost</th>
                            <th scope="col">Name</th>
                            <th scope="col">Cost</th>
                            <th scope="col">Total Cost</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product) => {
                                // console.log(">>> ", !product["service"]["name"])
                                let totalCost = parseFloat(!product["item"]["cost"] ? 0 : product["item"]["cost"]) +
                                                parseFloat(!product["service"]["cost"] ? 0 : product["service"]["cost"])
                                return (
                                    <tr key={product["product"]["product_id"]}>
                                        <th scope="row">{product["product"]["product_id"]}</th>
                                        <td>{!product["product"]["name"] ? " --- NA ---": product["product"]["name"]}</td>
                                        <td>{!product["item"]["name"] ? " --- NA --- ": product["item"]["name"]}</td>
                                        <td>${!product["item"]["cost"] ? " --- NA --- ": parseFloat(product["item"]["cost"]).toFixed(2)}</td>
                                        <td>{!product["service"]["name"] ? " --- NA --- ": product["service"]["name"]}</td>
                                        <td>${!product["service"]["cost"] ? " --- NA --- ": parseFloat(product["service"]["cost"]).toFixed(2)}</td>
                                        <td>${parseFloat(totalCost).toFixed(2)}</td>
                                        <td>
                                            <button class="btn btn-success mx-2" type="button">Edit</button>
                                            <button class="btn btn-danger mx-2" type="button">Delete</button>
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

export default ProductTable;
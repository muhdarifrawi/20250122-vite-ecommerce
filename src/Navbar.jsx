import React from "react";
import { Link, useLocation } from 'wouter';
import { useAuth } from "./AuthContext";
import axios from "axios";

function Navbar() {
    const { isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin } = useAuth();

    const handleLogout = async () => {
        console.log("handle logout : ");
        await axios.post(import.meta.env.VITE_DB_URL + "/logout")
            .then((response) => {
                setIsLoggedIn(false);
                setIsAdmin(false);
                console.log(response);
            });
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Bicycle Shop</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/producttable">Product Table</Link>
                            </li>
                            {
                                isAdmin ?
                                    (
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/servicetable">Service Table</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/itemtable">Item Table</Link>
                                        </li>
                                    </>
                                    ) : ""
                            }

                            {/* <li className="nav-item">
                                <Link className="nav-link" href="/cart">Cart</Link>
                            </li> */}
                        </ul>
                        {isLoggedIn ? (
                            <ul className="navbar-nav me-2">
                                <li className="nav-item">
                                    <span onClick={handleLogout}>Logout</span>
                                </li>
                            </ul>
                        ) : (
                            <ul className="navbar-nav me-2">
                                <li className="nav-item">
                                    <Link className="nav-link" href="/login">Login</Link>
                                </li>
                            </ul>
                        )}

                    </div>
                </div>
            </nav>
        </>
    )

}

export default Navbar;
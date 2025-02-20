import React, { useState } from "react";
import axios from "axios";
import { useParams } from "wouter";
import { navigate } from "wouter/use-browser-location";
import { useAuth } from "./AuthContext";

function LoginPage() {
    axios.defaults.withCredentials = true;
    const { isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin } = useAuth();
    const [loginForm, setloginForm] = useState([]);

    const handleFormChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setloginForm(values => ({ ...values, [name]: value }))

        console.log(loginForm);
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        console.log("handle login : ", loginForm);
        await axios.post(import.meta.env.VITE_DB_URL + "/login", {
            params: {
                username: loginForm.usernameInput,
                password: loginForm.passwordInput
            }
        })
        .then((response) => {
            setIsLoggedIn(true);
            if(response.data.staffData){
                console.log("staff");
                setIsAdmin(true);
            }
            console.log(response);
        });
        // navigate(`/products`);

    }

    return (
        <>
            <div className="container">
                <div className="card mt-5" style={{ width: 18 + "rem" }}>
                    <div className="card-body">
                        <h3 className="card-title">Login</h3>
                        <form onSubmit={handleLogin}>
                            <div className="mb-3">
                                <label htmlFor="usernameInput" className="form-label">Username</label>
                                <input type="text" className="form-control" id="usernameInput" name="usernameInput" onChange={handleFormChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="passwordInput" className="form-label">Password</label>
                                <input type="password" className="form-control" id="passwordInput" name="passwordInput" onChange={handleFormChange} />
                            </div>
                            <button type="submit" className="btn btn-primary mb-5">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage;
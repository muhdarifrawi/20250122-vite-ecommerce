import React, {useState, useEffect} from "react";
import axios from "axios";
import CartCard from "./CartCard";

function Cartpage() {
    const [cart, setCart] = useState([]);
    
    useEffect(() => {
        const fetchCart = async () => {
            try {
                const response = await axios.get(import.meta.env.VITE_DB_URL + "/cart");
                setCart(response.data.cart);
                console.log("cart >>>", response.data.cart)
            } catch (error) {
                console.log("[Error]Cart fetch error :", error);
            }
        }   

        fetchCart();
    }, []);

    

    return (
        <>
            <main className="container my-5">
                <h2>Cart</h2>
                {
                    cart.map((cart)=>{
                        console.log("cart page >>>", cart)
                        return (
                            <CartCard key={cart["cartItems"]["cart_id"]}
                                id={cart["cartItems"]["cart_id"]}
                                imageURL={cart["product"]["image_url"]}
                                productName={cart["cartItems"]["name"]}
                            />
                        )
                    })
                }
            </main>
            <footer className="bg-dark text-white text-center py-3">
                <div className="container">
                    <p>&copy; 2025 Bicycle Shop. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Cartpage;
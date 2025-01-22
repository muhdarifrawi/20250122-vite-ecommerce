import React, {useState, useEffect} from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

function Homepage() {
    const [featuredProduct, setFeaturedProduct] = useState([]);
    
    useEffect(() => {
        const fetchFeaturedProducts = async () => {
            try {
                const response = await axios.get(import.meta.env.VITE_DB_URL + "/products");
                setFeaturedProduct(response.data.products);
                // console.log("products >>>", response.data)
            } catch (error) {
                console.log("[Error]Product fetch error :", error);
            }
        }

        fetchFeaturedProducts();
    }, []);

    

    return (
        <>
            <header className="bg-primary text-white text-center py-5">
                <div className="container">
                    <h1 className="display-4">Welcome to Bicycle Shop</h1>
                    <p className="lead">Discover amazing products at unbeatable prices!</p>
                    <a href="#" className="btn btn-light btn-lg">Shop Now</a>
                </div>
            </header>
            <main className="container my-5">
                <h2>Featured Products</h2>
                {
                    featuredProduct.map((product)=>{
                        console.log(product)
                        return (
                            <ProductCard key={product["product"]["product_id"]}
                                id={product["product"]["product_id"]}
                                imageURL={product["product"]["image_url"]}
                                productName={product["product"]["name"]}
                                serviceCost={product["service"]["cost"]}
                                itemCost={product["item"]["cost"]}
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

export default Homepage;
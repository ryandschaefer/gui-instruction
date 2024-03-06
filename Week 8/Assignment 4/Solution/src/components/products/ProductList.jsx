import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../api";
import { CartContext } from "../../context";

export const ProductList = () => {
    const [products, setProducts] = useState(undefined);

    useEffect(() => {
        getProducts().then(x => {
            setProducts(x);
        });
    }, []);

    const cart = useContext(CartContext);
    const navigate = useNavigate();

    if (!products) {
        return (
            <>Loading...</>
        );
    }

    return <>
        <nav className = "navbar navbar-expand-lg bg-light px-4">
            <ul className = "breadcrumb pt-1">
                <li className = "breadcrumb-item">
                    <span className = "text-secondary">Tasty snacks</span>
                </li>
            </ul>
        </nav>
        <br/>
        <div className = "d-flex flex-row text-center">
            {
                products.map((product, index) => 
                    <div className = "border mx-3 container p-3 d-flex flex-column justify-content-between" key = { index }>
                        <div className = "position-relative">
                            <img src = { product.imageUrl } alt = { product.name } className = "img-fluid"/>
                            <span className = "badge bg-success fs-5 rounded-pill position-absolute bottom-0 end-0">
                                ${ product.price }
                            </span>
                        </div>
                        <h2>{ product.name }</h2>
                        <div className = "align-text-bottom">
                            <button
                                type = "button"
                                className = "btn btn-info mb-2 w-100"
                                onClick = {() => {
                                    navigate(`/products/${ product.id }`);
                                }}
                            >
                                Product Details
                            </button>
                            <br/>
                            <button
                                type = "button"
                                className = "btn btn-warning w-100"
                                onClick = {() => {
                                    cart.addToCart(product);
                                    navigate(`/cart`);
                                }}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    </>
}
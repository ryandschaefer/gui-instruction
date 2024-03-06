import { useState, useEffect, useContext } from "react";
import { getProductById, addReview } from "../../api";
import { ReviewList, ReviewForm } from "./index";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../../context";

export const ProductDetails = () => {
    const [product, setProduct] = useState(undefined);
    const params = useParams();
    const productId = params.productId;

    const cart = useContext(CartContext);
    const navigate = useNavigate();

    useEffect(() => {
        getProductById(productId).then(x => {
            setProduct(x);
        });
    }, [ productId ]);

    const onReviewAdded = (review) => {
        addReview(productId, review).then(x => {
            const _product = {...product};
            _product.reviews.push(x);
            setProduct(_product);
        });
    }
    if (!product) {
        return (
            <>Loading...</>
        );
    }

    return (
        <>
            <nav className = "navbar navbar-expand-lg bg-light px-4">
                <ul className = "breadcrumb pt-1">
                    <li className = "breadcrumb-item">
                        <span className = "text-primary">Tasty snacks</span>
                    </li>
                    <li className = "breadcrumb-item text-secondary">
                        { product.name }
                    </li>
                </ul>
            </nav>
            <br/>
            <div className = "bg-light mx-0 p-5">
                <div className = "position-relative row">
                    <div className = "col">
                        <img 
                            src = { product.imageUrl }
                            alt = "Product"
                            className = "img-fluid"
                        />
                    </div>
                    <div className = "col-8">
                        <h1 className = "display-2">
                            { product.name }
                        </h1>
                        <h2 className = "badge bg-primary fs-4">
                            ${ product.price }
                        </h2>
                        <p className = "text-secondary fs-5">
                            { product.description }
                        </p>
                    </div>
                    <button
                        type = "button"
                        className = "btn btn-warning w-auto h-auto position-absolute bottom-0 end-0"
                        onClick = {() => {
                            cart.addToCart(product);
                            navigate(`/cart`);
                        }}
                    >
                        Add to Cart
                    </button>
                </div>
                
            </div>
            <ReviewList reviews = { product.reviews }/>
            <ReviewForm onReviewAdded = { (review) => onReviewAdded(review) }/>
        </>
    );
}
import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({product,handleAddToCart}) => {
    // const {product,handleAddToCart} = props;
    const {name,img,seller,price,ratings} = product;
    // const {handleAddToCart} = props;
    
    return (
        <div className='product'>
            <img src={img} alt="" srcset="" />
        <div className='product-info'>
        <p className='product-name'>{name}</p>
            <p>Price: ${price}</p>
            <p><small>Seller: {seller}</small></p>
            <p><small>Ratings: {ratings}</small></p>
        </div>
        <button className='btn-cart' onClick={()=> handleAddToCart(product)}>
            <p className='btn-text'>Add to Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
        </div>
    );
};

export default Product;
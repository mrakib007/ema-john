import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import './Orders.css';

const Orders = () => {
    const [products,setProducts] = useProducts();
    const [cart,setCart] = useCart(products);
    console.log(products);
    return (
        <div>
            This is order: {products.length}
            Cart has: {cart.length}
        </div>
    );
};

export default Orders;
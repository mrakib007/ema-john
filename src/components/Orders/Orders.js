import React from 'react';
import useProducts from '../../hooks/useProducts';
import './Orders.css';

const Orders = () => {
    const [products,setProducts] = useProducts();
    console.log(products);
    return (
        <div>
            This is order: {products.length}
        </div>
    );
};

export default Orders;
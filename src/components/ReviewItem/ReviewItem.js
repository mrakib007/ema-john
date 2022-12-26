import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const {name,price,shipping,quantity} = props.product;
    return (
        <div>
            This is review Item {name}
            {/* 53-5 end */}
        </div>
    );
};

export default ReviewItem;
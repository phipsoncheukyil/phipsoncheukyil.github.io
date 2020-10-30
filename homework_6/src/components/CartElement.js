import React from 'react';
import "./style.css";

function CartElement (props) {
    // Render the product passed in the props with an additional Edit and Delete button
    return (
        <div className="BBCartElement">
            <div id={props.order.product.img} className="BBCartImg"></div>
            <div className="BBCartDetails">
                <h2>{props.order.product.name}</h2>
                <h4>{props.order.glaze} Glaze</h4>
                <h3>${Number(props.order.product.price * props.order.amount).toFixed(2)} ({Number(props.order.product.price).toFixed(2)} x {props.order.amount})</h3>
                <div className="BBCartActions">
                    <h3 onClick={() => props.updateOrder(props.order, 5)}>Edit</h3>
                    <h3 onClick={() => props.removeOrder(props.order.id)}>Delete</h3>
                </div>
            </div>
        </div>
    );
}

export default CartElement;
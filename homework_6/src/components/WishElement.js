import React from 'react';
import "./style.css";

function WishElement (props) {
    return (
        <div className="BBCartElement">
            <div id={props.wish.product.img} className="BBCartImg"></div>
            <div className="BBCartDetails">
                <h3>{props.wish.product.name}</h3>
                <h4>{props.wish.glaze} Glaze</h4>
                <h4>${Number(props.wish.product.price).toFixed(2)} x {props.wish.amount}</h4>
                <h3>${Number(props.wish.product.price * props.wish.amount).toFixed(2)}</h3>
                <div className="BBCartActions">
                    <h3 onClick={() => props.moveWish(props.wish)}>Add To Cart</h3>
                    <h3 onClick={() => props.removeWish(props.wish.id)}>Delete</h3>
                </div>
            </div>
        </div>
    );
}

export default WishElement;
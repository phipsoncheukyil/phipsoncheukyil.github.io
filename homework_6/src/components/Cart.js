import React from 'react';
import "./style.css";
import CartElement from './CartElement';
import WishElement from './WishElement';

class CartPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const orderCount = this.props.orders.length;
        const wishCount = this.props.wishes.length;
        let orderMsg = <div></div>;
        let wishMsg = <div></div>;
        let checkoutOverview = <div></div>;
        let paybutton = <div></div>;

        if (orderCount === 0) {
            orderMsg = <h4>You currently have no buns in your cart.</h4>;
        }
        else {
            let totalPay = 0;
            for (var i = 0; i < this.props.orders.length; i++) {
                totalPay = totalPay + this.props.orders[i].amount * this.props.orders[i].product.price;
            }

            checkoutOverview = <h3 style={{textAlign: 'start', fontWeight: 500}}>Total Cost: ${Number(totalPay).toFixed(2)}</h3>
            paybutton = <button className="BBAddButton" onClick={this.props.payItems}>PAY NOW</button>

        }

        if (wishCount === 0) {
            wishMsg = <h5>You currently have no items in your wishlist</h5>;
        }

        return (
            <div className="BBProductBody">
                <div className="BBCartHeader">
                    <h2>YOUR BUNS</h2>
                    {orderMsg}
                </div>
                {this.props.orders.map((order, i) => {     
                    console.log("Order element:", order);                 
                    return (<CartElement key={i} order={order} updateOrder={this.props.updateOrder} removeOrder={this.props.removeOrder}/>);
                })}
                {checkoutOverview}
                {paybutton}
                <div className="BBWishHeader">
                    <h3>YOUR WISHLIST</h3>
                    {wishMsg}
                </div>
                {this.props.wishes.map((wish, i) => {     
                    console.log("Wish element:", wish);                 
                    return (<WishElement key={i} wish={wish} 
                            moveWish={this.props.moveWish} 
                            removeWish={this.props.removeWish}/>);
                })}
            </div>
        );
    }
}

export default CartPage;
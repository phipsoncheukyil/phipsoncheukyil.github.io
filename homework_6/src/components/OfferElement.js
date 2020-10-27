import React from 'react';
import "./style.css";

class OfferElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            price: props.price,
            discount: props.discount,
            img: props.img,
            desc: props.desc,
            viewDetails: props.onOpenDetails
        }
    }

    render() {
        return(
            <div id="BBOriginal" className="BBProductItem" onClick={() => this.state.viewDetails(this.state, 4)}>
                <div id={this.state.img} className="BBProductImg"></div>
                <div className="BBProductText">
                    <div className="BBProductName">{this.state.name}</div>
                    <div className="BBProductPrice"><span className="BBDiscountStrikethrough">${this.state.price}</span>
                        ${this.state.discount}/Bun
                    </div>
                </div>
            </div>
        );
    }
}

export default OfferElement;
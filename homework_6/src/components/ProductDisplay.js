import React from 'react';
import "./style.css";

class ProductElement extends React.Component {
    constructor(props) {
        super(props);
        // Props contains the product information that will be displayed (see ProductList for more information)
        this.state = {
            name: props.name,
            price: props.price,
            img: props.img,
            desc: props.desc,
            viewDetails: props.onOpenDetails,
            discount: props.discount
        }
    }

    render() {
        // Check if item has a discount based on special offers and if so display that price
        let price = 'discount' in this.props ? this.state.discount : this.state.price;

        return(
            <div id="BBOriginal" className="BBProductItem" onClick={() => this.state.viewDetails(this.state, 4)}>
                <div id={this.state.img} className="BBProductImg"></div>
                <div className="BBProductText">
                    <div className="BBProductName">{this.state.name}</div>
                    <div className="BBProductPrice">${price}/Bun</div>
                </div>
            </div>
        );
    }
}

export default ProductElement;
import React from 'react';
import "./style.css";

class ProductElement extends React.Component {
    constructor(props) {
        super(props);
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
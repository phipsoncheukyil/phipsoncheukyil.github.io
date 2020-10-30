import React from 'react';
import "./style.css";
import ProductElement from './ProductDisplay';
import productData from './ProductList';

class ProductPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            openDetails: props.openDetails
        }
    }

    render() {
        return (
            <div className="BBProductBody">
            <h2 className="BBProductBunTitle">OUR BUNS</h2>
                <div id="BBItems" className="BBProductWrapper">
                    <ProductElement name={productData.original.name} 
                                    price={productData.original.price} 
                                    img={productData.original.img} 
                                    desc={productData.original.desc} 
                                    onOpenDetails={this.state.openDetails}
                                    discount={productData.original.discount}/>
                    <ProductElement name={productData.glutenfree.name} 
                                    price={productData.glutenfree.price} 
                                    img={productData.glutenfree.img} 
                                    desc={productData.glutenfree.desc} 
                                    onOpenDetails={this.state.openDetails}
                                    discount={productData.original.discount}/>
                    <ProductElement name={productData.caramelpecan.name} 
                                    price={productData.caramelpecan.price} 
                                    img={productData.caramelpecan.img} 
                                    desc={productData.caramelpecan.desc} 
                                    onOpenDetails={this.state.openDetails}/>
                    <ProductElement name={productData.pumpkinspice.name} 
                                    price={productData.pumpkinspice.price} 
                                    img={productData.pumpkinspice.img} 
                                    desc={productData.pumpkinspice.desc} 
                                    onOpenDetails={this.state.openDetails}/>
                    <ProductElement name={productData.walnut.name} 
                                    price={productData.walnut.price} 
                                    img={productData.walnut.img} 
                                    desc={productData.walnut.desc} 
                                    onOpenDetails={this.state.openDetails}/>
                    <ProductElement name={productData.blackberry.name} 
                                    price={productData.blackberry.price} 
                                    img={productData.blackberry.img} 
                                    desc={productData.blackberry.desc} 
                                    onOpenDetails={this.state.openDetails}/>
                </div>
            </div>
        );
    }
}

export default ProductPage;
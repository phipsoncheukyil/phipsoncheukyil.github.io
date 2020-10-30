import React from 'react';
import "./style.css";
import CarouselSlider from './Carousel/CarouselSlider';
import productData from './ProductList';
import Review from './Review';

class DetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            amount: 1,
            glaze: "No",
            product: props.product,
        }
    
        this.SetGlaze = this.SetGlaze.bind(this);
        this.SetAmount = this.SetAmount.bind(this);
        this.SwapElement = this.SwapElement.bind(this);
    }

    SetGlaze(val) {
        this.setState((state, props) => ({
            glaze: val
        }));
    }

    SetAmount(val) {
        this.setState((state, props) => ({
            amount: val
        }));
    }

    SwapElement(newItem) {
        this.setState(() => ({
            product: newItem
        }));
    }


    render() {
        let price = 'discount' in this.state.product ? this.state.product.discount : this.state.product.price;

        return (
            <div id="BBItems" className="BBItemWrapper">
                <div className="BBItemBackButton">
                    <h3 className="BBBackButtonArrow" onClick={this.props.onBack}>←</h3>
                    <h2 className="BBProductBunTitle">{this.state.product.name}</h2>
                </div>

                <div className="BBItemDetails">
                    <div className="BBItemSpecs">
                        <div className="BBItemImgDesc">
                            <div id={this.state.product.img} className="BBItemImg"></div>
                            <div className="BBItemTxt">
                                {this.state.product.desc}
                            </div>
                        </div>

                        <div className="BBItemOptions">
                            <div className="BBOptionWrapper">
                                <h3 className="BBOptionTitle">Glaze:</h3>
                                <div className="BBGlazeOption">
                                <button className={this.state.glaze === "No" ? "Checked" : ""} 
                                        onClick={() => this.SetGlaze("No")}>None</button>

                                <button className={this.state.glaze === "Sugar-Milk" ? "Checked" : ""} 
                                        onClick={() => this.SetGlaze("Sugar-Milk")}>Sugar-Milk</button>

                                <button className={this.state.glaze === "Vanilla-Milk" ? "Checked" : ""} 
                                        onClick={() => this.SetGlaze("Vanilla-Milk")}>Vanilla-Milk</button>

                                <button className={this.state.glaze === "Double Chocolate" ? "Checked" : ""} 
                                        onClick={() => this.SetGlaze("Double Chocolate")}>Double Chocolate</button>
                                </div>
                        </div>

                        <div className="BBOptionWrapper">
                            <h3 className="BBOptionTitle">Amount:</h3>
                            <div className="BBQuantityOption">
                                <button className={this.state.amount === 1 ? "Checked" : ""} 
                                    onClick={() => this.SetAmount(1)}>1</button>

                                <button className={this.state.amount === 3 ? "Checked" : ""} 
                                    onClick={() => this.SetAmount(3)}>3</button>

                               <button className={this.state.amount === 6 ? "Checked" : ""} 
                                    onClick={() => this.SetAmount(6)}>6</button>

                                <button className={this.state.amount === 12 ? "Checked" : ""} 
                                    onClick={() => this.SetAmount(12)}>12</button>
                            </div>
                        </div>

                        <div className="BBItemPurchaseDetails">
                            <h4>{this.state.glaze} Glaze {this.state.product.name}</h4>
                            <p>Total Cost: ${Number(this.state.amount * price).toFixed(2)} ({this.state.amount} x {price})</p>
                        </div>

                        <div className="BBItemButtonDiv">
                            <button className="BBAddButton" onClick={() => this.props.addToCart(this.state)}>ADD TO CART</button>
                            <button className="BBAddButton" onClick={() => this.props.addWish(this.state)}>ADD TO WISHLIST</button>
                            </div>
                        </div>
                    </div>
                </div>
            <h2 style={{fontSize: "1.7em", textAlign: "left", width: "100%", paddingLeft: "2em"}}>Other Buns You May Like:</h2>
            <CarouselSlider currentProduct={this.state.product.name} recs={productData} viewDetails={this.SwapElement}/>
            <div className="BBItemDetails">
                <Review/>
            </div>
            </div>
        );
    }
}

export default DetailPage;
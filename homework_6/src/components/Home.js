import React from 'react';
import "./style.css";

class HomePage extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="BBHomeParallax">
            <div className="BBHomeIntroWrapper">
                <div className="BBIntroInstructions">
                    <h2 className="BBIntroTitle">Welcome to the Bun Bun Bakery eStore!</h2>
                    <p className="BBIntroDesc">To get started, go to the BUNS page and search through our buns. Choose the buns you desire, customize it with any glaze of your choice, and add the buns to your cart. Once you're done, you can go to your cart at checkout, purchase your buns, sit back and relax as we prepare your order within 20 minutes.</p>
                    <div className="BBIntroLinkWrapper">
                        <a href="products.html" className="BBIntroLink" >What buns are there?</a> 
                        <a href="about.html" className="BBIntroLink" >What is Bun Bun Bakery?</a>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default HomePage;
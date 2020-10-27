import React from 'react';
import "./style.css";

class AboutPage extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div id="BBContent" className="BBAboutWrapper">
            <div id="BBAbout1" className="BBAbout">
                <div className="BBAboutText">
                    <h2 className="BBAboutTitle">BEST BUNS IN BUSINESS</h2>
                    <p>Founded in 1974, Bun Bun Bakery has been a staple in the Santa Monica baking district. Our years of culinary expertise, compounded by our unmatched passion for baking, allows us to bring you the best bun-eating experience there is. Look no further, because buns can get no better than Bun Bun Bakery.</p>
                </div>
                <div id="about-1" className="BBAboutImg"></div>
            </div>
                <div id="BBAbout2" className="BBAbout">
                    <div id="about-2" className="BBAboutImg"></div>
                    <div id="text-2" className="BBAboutText">
                        <h2>FUN BUNS UNDER THE SUN</h2>
                        <p>Bathe under the California sun with our sweet, delectable buns! Bun Bun Bakery strives to bring joy and entertainment to our fellow Californians by offering regular events near the Santa Monica Pier. From games to prizes to show-and-tell contests, we strive to bring you fun with our buns!</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutPage;
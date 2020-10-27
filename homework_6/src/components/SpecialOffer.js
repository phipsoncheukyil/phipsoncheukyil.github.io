import React from 'react';
import "./style.css";
import OfferElement from './OfferElement';

class SpecialOfferPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            openDetails: props.openDetails
        }
    }

    render() {
        return (
            <div className="BBProductBody">
            <h2 className="BBProductBunTitle">SPECIAL OFFERS</h2>
                <div id="BBItems" className="BBProductWrapper">
                    <OfferElement name={"Original Bun"} 
                                  price={1.75} 
                                  img={"original"} 
                                  desc={""} 
                                  discount={0.75} 
                                  onOpenDetails={this.state.openDetails}/>
                    <OfferElement name={"Gluten-free Original Bun"} 
                                  price={1.75} 
                                  img={"gluten-free"} 
                                  desc={""} 
                                  discount={0.75}
                                  onOpenDetails={this.state.openDetails}/>
                </div>
            </div>
        );
    }
}

export default SpecialOfferPage;
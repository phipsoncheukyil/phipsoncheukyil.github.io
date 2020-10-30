import React, {Component} from 'react';

class CarouselElement extends Component {
    constructor(props) {
      super(props);
      this.state = {
          slideData: props.recs
        };
    }

    render() {
        return(
            Object.keys(this.state.slideData).filter((s) => {
                return this.props.product !== this.state.slideData[s].name;
            }).map((s, index) =>
                <div key={index} className="BBSlideElement" onClick={() => this.props.viewDetails(this.state.slideData[s])}>
                    <div id={this.state.slideData[s].img} className="BBSlideImg"></div>
                    <h4 className="BBSlideText">{this.state.slideData[s].name}</h4>
                    <p className="BBSlideText">${'discount' in this.state.slideData[s] ? this.state.slideData[s].discount : this.state.slideData[s].price}</p>
                </div>
            )
        )
    }
}

export default CarouselElement;
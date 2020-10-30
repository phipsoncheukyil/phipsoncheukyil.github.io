import React, { Component } from 'react';
import CarouselElement from './CarouselElement';
import '../style.css';


export default class CarouselSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            recs: props.recs,
            };

        this.goToNextSlide = this.goToNextSlide.bind(this);
        this.goToPrevSlide = this.goToPrevSlide.bind(this);
    }

    goToPrevSlide() {
        let index = this.state.activeIndex;
        index = index === 0 ? Object.keys(this.state.recs).length - 2 : index - 1;

        this.setState({
            activeIndex: index
            });
    }


    goToNextSlide() {
        let index = this.state.activeIndex;
        index = index === Object.keys(this.state.recs).length - 2 ? 0 : index + 1;

        this.setState({
            activeIndex: index
        });
    }

    render() {
        return (
            <div className="BBCarouselDiv">
                <button className="BBAddButton" onClick={this.goToPrevSlide}>&#60;</button>
                <div className='BBCarouselWrapper'>
                    <div className='BBSlideWrapper' style={{left: `${this.state.activeIndex * -32}vw`}}>
                        <CarouselElement
                            recs={this.props.recs}
                            product={this.props.currentProduct}
                            viewDetails={this.props.viewDetails}
                        />
                    </div>
                </div>
                <button className="BBAddButton" onClick={this.goToNextSlide}>&#62;</button>

            </div>
          );
    }
}
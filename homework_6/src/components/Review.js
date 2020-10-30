import React, {Component} from 'react';

class Review extends Component {
    render() {
        return(
            <ul className="BBItemReviews">
                <h2 style={{textAlign: "left", fontSize: "1.7em"}}>Reviews</h2>
                <li className="BBReview">
                    <div className="BBReviewTitle">
                        <h3 style={{textAlign: "left"}}>Trevor Noah</h3>
                        <h3>&#10084; &#10084; &#10084; &#10084; &#10084;</h3>
                    </div>
                    <div className="BBReviewDesc">
                        Absolute amazing buns! They were a bit cold when I ate them, but great nonetheless!
                    </div>
                </li>
                <li>
                    <div className="BBReviewTitle">
                        <h3 style={{textAlign: "left"}}>Megan Han</h3>
                        <h3>&#10084; &#10084; &#10084; &#10084; &#10084;</h3>
                    </div>
                    <div className="BBReviewDesc">
                        Wow! Who would’ve ever thought that Bun Bun Bakery would sell such amazing pastries and buns. This original bun is fantastic!
                    </div>
                </li>
                <li>
                    <div className="BBReviewTitle">
                        <h3 style={{textAlign: "left"}}>Jenn Palmer</h3>
                        <h3>&#10084; &#10084; &#10084; &#10084; &#10084;</h3>
                    </div>
                    <div className="BBReviewDesc">
                        A bit dry and the deliveryman who I spoke with was really impolite. An okay bun nonetheless.
                    </div>
                </li>
                <li>
                    <div className="BBReviewSubmit">
                        <h3 style={{textAlign: "left", fontSize: "1.7em"}}>Submit a Review Here</h3>
                        <form>
                            <label for="reviewer"><h3 className="BBReviewLabel" style={{textAlign: "left"}}>Reviewer Name: </h3></label>
                            <input type="text" pattern="^[a-zA-Z\s]*$" oninvalid="setCustomValidity('Enter a name with letters and whitespaces only');"  oninput="setCustomValidity('');" className="BBTextInput" id="reviewer" name="reviewer" value="" style={{float: "left"}}required></input>
                            <br/>

                            <label for="review"><h3 className="BBReviewLabel" style={{textAlign: "left"}}>Review:</h3></label>
                            <textarea id="review" pattern="^[a-zA-Z\s]*$" oninvalid="setCustomValidity('You must enter a review');"  oninput="setCustomValidity('');" name="review" style={{width: '100%', minHeight: '20vh'}} required></textarea>
                            <br/>
                            <br/>

                            <input type="submit" className="BBAddButton" value="SUBMIT REVIEW"></input>
                        </form>
                    </div>
                </li>
            </ul>
        )
    }
}

export default Review;
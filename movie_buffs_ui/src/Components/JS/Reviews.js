import React, { Component } from "react";
import { addReview } from "../../MoviesBuffsApi.js";
import "../CSS/Reviews.css";

export default class Reviews extends Component {
    constructor() {
        super();
        this.state = {
            reviews: [],
            imdbId: ''
        };
        this.addReviewItem = this.addReviewItem.bind(this)
    }

    addReviewItem(event) {
        event.preventDefault()
        let reviewData = {
            user_id: JSON.parse(localStorage.sessionDetails).localId,
            imdb_id: this.props.imdbId,
            text: event.target.reviewText.value
        }
        addReview(reviewData)
            .then(() => {
                this.props.method();
            })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            reviews: Object.values(nextProps.reviews),
            imdbId: nextProps.imdbId
        })
    }

    componentDidMount() {
        this.setState({
            reviews: Object.values(this.props.reviews),
            imdbId: this.props.imdbId
        })
    }

    render() {
        const element = <div className="main-review-container">
            <div className="tcomment-text">
                <h3><i class="fas fa-comment-alt"></i>&nbsp;Comments</h3>
            </div>
            <div className="comments-scroll">
                {this.state.reviews.map((review) => {
                    return <Comment review={review} />
                })}
            </div>
            <div>
                <form onSubmit={this.addReviewItem}>
                    <div className="input-group input-text-margin">
                        <span >
                            <button className="input-group-addon-register add-review-button" type='submit' ><i class="fas fa-comment-alt" /> </button>
                        </span>
                        <input
                            className="form-control height-width"
                            type="text"
                            name='reviewText'
                            placeholder="Add Reviews"
                            value={this.state.firstName}
                            onChange={this.handleFirstNameChange}
                        />
                    </div>
                </form>
                {/* <form onSubmit={this.addReviewItem}>
                    <input type='text' name='reviewText' />
                    <button type='submit' />
                </form> */}
            </div>

        </div>
        return element;
    }
}




class Comment extends Component {
    render() {
        const element = <div className="comment">
            <a href="#" className="avatar-thumd">
                <img className="avatar-img" alt="yasirjunejo profile" src="https://yts.am/assets/images/users/thumb/15258121502816204.jpg" />
            </a>
            <div className="comment-text">
                <h5>{this.props.review.user_name}</h5>
                <p>{this.props.review.review}</p>
                <br />
            </div>
        </div>
        return element;
    }
}
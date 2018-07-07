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
		this.setState ({
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
  		console.log(this.state.call)
  		console.log(this.props.reviews)
    	const element = <div>
    						<div className="text-container">
                            	<h3 className="recomended-text">Reviews</h3>
                        	</div>
    						<div>
    							<form onSubmit={this.addReviewItem}>
    								<input type='text' name='reviewText'/>
    								<button type='submit' />
    							</form>
    						</div>
    						{this.state.reviews.map((review) => {
    							return 	<div>
    										<div>
    											<i class="far fa-user"/>
    											<span>{review.user_name}</span>
    										</div>
    										<div>{review.review}</div>
    										<br/>
    									</div>
    						})}
    					</div>
    	return element;
  	}
}
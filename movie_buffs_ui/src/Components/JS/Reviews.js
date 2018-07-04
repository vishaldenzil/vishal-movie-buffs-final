import React, { Component } from "react";
import { addReview } from "../../MoviesBuffsApi.js";

export default class Reviews extends Component {

	constructor() {
		super()
		this.state = {
			user_name: '',
			text: ''
		}
	}

	componentDidMount() {
		this.setState({
			user_name: this.props.reviews.reviewItem.user_name,
			text: this.props.reviews.reviewItem.review
		})
	}

	render() {
		console.log('sdasdsad')
		const element = <div>
							<div>{this.state.user_name}</div>
							<div>{this.state.text}</div>
						</div>
		return element
	}
}
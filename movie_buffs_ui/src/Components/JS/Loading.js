import React, { Component } from "react";
import '../CSS/Loading.css'

export default class Loading extends Component {
	render() {
		const element = <div>
							<div class = "centered">
								<div class = "blob-1"></div>
								<div class = "blob-2"></div>
							</div>
						</div>
		return element;
	}
}
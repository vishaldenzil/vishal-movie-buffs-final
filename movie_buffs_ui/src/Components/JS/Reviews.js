// import React, { Component } from "react";
// import { addReview } from "../../MoviesBuffsApi.js";
// import "../CSS/Reviews.css";

// export default class Reviews extends Component {
//   constructor() {
//     super();
//     this.state = {
//       user_name: "",
//       text: ""
//     };
//   }

//   componentDidMount() {
//     this.setState({
//       user_name: this.props.reviews.reviewItem.user_name,
//       text: this.props.reviews.reviewItem.review
//     });
//   }

//   render() {
//     console.log("sdasdsad");
//     const element = (
//       <div className="main-review-card">
//         <div className="profile-pic">
//           <i class="far fa-user profile-icon" />
//         </div>
//         <div className="review-text-part">
//           <div className="user-name">{this.state.user_name}</div>
//           <div className="review-text">{this.state.text}</div>
//         </div>
//       </div>
//     );
//     return element;
//   }
// }

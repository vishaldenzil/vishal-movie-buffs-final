import React, { Component } from "react";
import "../CSS/Footer.css";
export default class Header extends Component {
  constructor() {
    super();

  }

  
  render() {
    const element = (
      <div className="footer-container">
        <footer className="App-footer">
        <div className='align-footer'>
          <div className='row'>
            <div className='col-md-12'>Created by</div>
          </div>
          <div className='row'>
            <div className='col-md-4'>Rahul Pugal</div>
            <div className='col-md-4'>Sandeep Kumar</div>
            <div className='col-md-4'>Vishal Denzil</div>
          </div>
        </div>
        </footer>
      </div>
    );
    return element;
  }
}
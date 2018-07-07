import React, { Component } from "react";
import Iframe from "react-iframe";
import "../CSS/video.css";
export default class Header extends Component {
    render() {
        const element = (
            <div className="video-container">
                <Iframe
                    url={this.props.data != undefined && this.props.data.trailer}
                    width="94%"
                    height="95%"
                    frameborder="5px"
                    allowFullScreen
                    ng-show="showvideo"
                />
            </div>

        );
        return element;
    }
}



import React, { Component } from "react";
import Iframe from "react-iframe";
import "../CSS/Video.css";
export default class Header extends Component {  
    render() {
      const element = (
                                <div className="iframe ">
                                    <Iframe
                                        url={this.props.data!=undefined && this.props.data.trailer}
                                        width="100%"
                                        height="100%"
                                        id="myId"
                                        className="myClassname"
                                        display="initial"
                                        position="relative"
                                        frameborder="5px"
                                        allowFullScreen
                                        ng-show="showvideo"
                                    />
                                </div>
         
      );
      return element;
    }

}

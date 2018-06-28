import React, { Component } from 'react';
import '../CSS/App.css';
import Iframe from 'react-iframe'
export default class Description extends Component
{
    render()
    {
        return(
            <div>
                <div className="row">
                    <div className="column-1">
                       <img classname="desc-img "src="https://imgc.allpostersimages.com/img/posters/blade-runner-2049-fire-ice_u-L-F9524N0.jpg?src=gp&w=300&h=375" />
                    </div>
                    <div className="column-2">
                     <div class="row-1">
                       <h3>Tomb Raider</h3>
                       <h4>2018</h4>
                       <h6>Action / Adventure / Drama / Fantasy </h6>
                     </div>
                    <div>
                        <h6> Ratings  : 6.6%</h6>
                     </div>
                    <div> 
                     <h4> Synopsis </h4>
                     <p>
                     Lara Croft is the fiercely independent daughter of an eccentric adventurer who vanished when she was scarcely a teen. Now a young woman of 21 without any real focus or purpose, Lara navigates the chaotic streets of trendy East London as a bike courier, barely making the rent, and takes college courses, rarely making it to class.
                    </p>
                     </div>
                    </div>
                </div>

                <div class="iframe">

                  <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                    width="100%"
                    height="350px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"
                    allowFullScreen/>
                </div>
            </div>

        );
    }
}

import React, { Component } from "react";
import "../CSS/Description.css";
import "../CSS/description-responsive.css";
import { searchId } from "../../MoviesBuffsApi";
import Header from "./Header.js";
import { Redirect } from 'react-router-dom'
import { addUserMovie } from "../../MoviesBuffsApi";
import Loading from './Loading.js'
import swal from 'sweetalert'
import Footer from './Footer.js'
import Video from './Video.js'
import Details from './Details'

export default class Description extends Component {
    constructor() {
        super();
        this.state =
            {
                Movies: {
                    movie: {},
                },
                loading: true
            };
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        searchId(id).then(movie => {
            this.setState({ Movies: movie, loading: false });
        });
    }
    render() {
        if (!localStorage.sessionDetails) {
            return <Redirect to="/" />;
        }
        if (this.state.loading) {
            return <Loading />;
        }
        let data = this.state.Movies.movie;
        const element =
            <div>
                <Header components={{ logout: true, search: true, browseMovies: true }} />
                <div className="main-description-container">
                    <div className="row-first">
                        <div className="column-1">
                            <img className="description-img"
                                src={data && data.Poster} alt='' />
                        </div>
                        <Details data={data} />
                    </div>
                        <Video data={data} />
                </div>
                <Footer />
            </div>
        return element;
    }
}




import React, { Component } from "react";
import { connect } from 'react-redux';
import styles from './moviePane.module.scss';
import PropTypes from 'prop-types';
import {
    getFetchedMovie,
    getIsFetchingMovie,
    getIsFetchingMovieSuccess
} from "../../modules/home/selectors/home.selectors"

class MoviePane extends Component {

    renderLoadingSpinner() {
        return <div className={ styles[ 'loadingSpinner' ] }>
            <div className={ styles[ 'lds-ring' ] }>
                <div/>
                <div/>
                <div/>
                <div/>
            </div>
        </div>
    }

    renderMovie() {
        const movie = this.props.fetchedMovie;
        return <div className={ styles[ 'detail-box' ] }>\
            { this.renderMovieDetails( movie ) };
            { this.renderMoviePoster( movie ) };
        </div>
    }

    renderMovieDetails( movie ) {
        return (
            <div className={ styles[ 'details' ] }>
                <h4>Title:</h4><p>{ movie.title }</p>
                <h4>Year:</h4><p>{ movie.year }</p>
                <h4>Rating:</h4><p>{ movie.rating }</p>
                <h4>Genre:</h4><p>{ movie.genre }</p>
                <h4>Plot:</h4><p>{ movie.plot }</p>
            </div>
        );
    }

    renderMoviePoster( movie ) {
        return (
            <div className={ styles[ 'poster' ] }>
                <img src={ movie.poster } alt={ movie.title }
                     className={ styles[ 'poster__img' ] }/>
            </div>
        );
    }

    render() {
        return (
            <div className={ `${ this.props.styles } ${ styles[ 'movie-pane' ] }` }>
                { this.props.isFetchingMovie && this.renderLoadingSpinner() }
                { !this.props.isFetchingMovie && this.props.isFetchingMovieSuccess && this.renderMovie() }
            </div> );
    }
}

MoviePane.propTypes = {
    styles: PropTypes.string,
    isFetchingMovie: PropTypes.bool,
    fetchedMovie: PropTypes.shape( {
        title: PropTypes.string,
        year: PropTypes.string,
        poster: PropTypes.string,
        rating: PropTypes.string,
        plot: PropTypes.string,
        genre: PropTypes.string,
    } )
}

MoviePane.defaultProps = {
    styles: '',
    isFetchingMovie: false,
    fetchedMovie: [],
}

export default connect( ( { home } ) => ( {
    isFetchingMovie: getIsFetchingMovie( home ),
    isFetchingMovieSuccess: getIsFetchingMovieSuccess( home ),
    fetchedMovie: getFetchedMovie( home ),
} ), {} )( MoviePane );

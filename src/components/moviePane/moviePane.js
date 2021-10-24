import React, { Component } from "react";
import { connect } from 'react-redux';
import styles from './moviePane.module.scss';
import PropTypes from 'prop-types';
import {
    getFetchedMovie,
    getIsFetchingMovie,
    getIsFetchingMovieSuccess
} from "../../modules/home/selectors/home.selectors"
import { addMovieToFavourites } from "../../modules/home/actions";

class MoviePane extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            addedToFavourites: false,
        }
    }

    componentDidUpdate( prevProps, prevState, snapshot ) {
        if ( prevState.addedToFavourites ) {
            this.setState( () => {
                return { addedToFavourites: false }
            } )
        }
    }

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
        const isValidMovie = !!movie.title;
        if ( isValidMovie ) {
            return <div className={ styles[ 'detail-box' ] }>
                { this.renderMovieDetails( movie ) }
                { this.renderMoviePoster( movie ) }
            </div>
        } else {
            return this.renderNoMoviesFound()
        }
    }

    renderNoMoviesFound() {
        return (
            <div className={ styles[ 'no-movies' ] }>
                <h3>No Movies Found. Try Another Query</h3>
            </div>
        );
    }

    addToFavouritesHandler() {
        if ( !this.state.addedToFavourites ) {
            this.props.addMovieToFavourites( this.props.fetchedMovie );
            this.setState( () => {
                return { addedToFavourites: true }
            } )
        }
    }

    renderMovieDetails( movie ) {
        return (
            <div className={ styles[ 'details' ] }>
                <div className={ styles[ 'details__content' ] }>
                    <div className={ styles[ 'details__content__item' ] }>
                        <h3>Title</h3><p>{ movie.title }</p>
                    </div>
                    <div className={ styles[ 'details__content__item' ] }>
                        <h3>Year</h3><p>{ movie.year }</p>
                    </div>
                    <div className={ styles[ 'details__content__item' ] }>
                        <h3>Rating</h3><p>{ movie.rating }</p>
                    </div>
                    <div className={ styles[ 'details__content__item' ] }>
                        <h3>Genre</h3><p>{ movie.genre }</p>
                    </div>
                    <div className={ styles[ 'details__content__item' ] }>
                        <h3>Plot</h3><p>{ movie.plot }</p>
                    </div>
                </div>
                <div className={ styles[ 'details__favourite' ] }>
                    <button className={ styles[ 'details__favourite__btn' ] }
                            onClick={ this.addToFavouritesHandler.bind( this ) }>
                        <span className="material-icons-round">favorite_border</span>
                        <p>Add to Favourites</p>
                    </button>
                </div>
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
} ), {
    addMovieToFavourites: addMovieToFavourites
} )( MoviePane );

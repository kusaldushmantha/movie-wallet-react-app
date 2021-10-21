import React, { Component } from "react";
import { connect } from 'react-redux';
import styles from './moviePane.module.scss';
import PropTypes from 'prop-types';
import { fetchMovies } from "../../modules/home/actions";
import { getFetchedMovies, getIsFetchingMovies, } from "../../modules/home/selectors/home.selectors"

class MoviePane extends Component {

    componentDidMount() {
        this.props.fetchMovies()
    }

    renderLoadingSpinner() {
        return <div className={ styles[ 'lds-ring' ] }>
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
    }

    renderMovieDetails() {
        const classes = `${ styles[ 'movie-pane' ] } ${ styles[ this.props.styles ] }`
        return <div className={ classes }>
        </div>
    }

    render() {
        return (
            <div className={ `${ this.props.styles } ${ styles[ 'movie-pane' ] }` }>
                { this.props.isFetchingMovies && this.renderLoadingSpinner() }
                { !this.props.isFetchingMovies && this.renderMovieDetails() }
            </div> );
    }
}

MoviePane.propTypes = {
    styles: PropTypes.string,
    isFetchingMovies: PropTypes.bool,
    fetchedMovies: PropTypes.array.isRequired,
}

MoviePane.defaultProps = {
    styles: '',
    isFetchingMovies: false,
    fetchedMovies: [],
}

export default connect( ( { home } ) => ( {
    isFetchingMovies: getIsFetchingMovies( home ),
    fetchedMovies: getFetchedMovies( home ),
} ), {
    fetchMovies: fetchMovies,
} )( MoviePane );

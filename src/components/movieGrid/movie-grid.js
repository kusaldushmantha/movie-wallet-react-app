import React, { Component } from "react";
import { connect } from 'react-redux';
import styles from './movie-grid.module.scss';
import PropTypes from 'prop-types';
import { fetchMovies } from "../../modules/home/actions";
import { getFetchedMovies, getIsFetchingMovies, } from "../../modules/home/selectors/home.selectors"

class MovieGrid extends Component {

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
        return <div className={ `${ this.props.styles } ${ styles[ 'grid' ] }` }>
            <ul>
                { this.props.fetchedMovies.map( ( movie, key ) => {
                    return <li key={ key }>{ movie.title }</li>
                } ) }
            </ul>
        </div>
    }

    render() {
        return (
            <div className={ `${ this.props.styles } ${ styles[ 'grid' ] }` }>
                { this.props.isFetchingMovies && this.renderLoadingSpinner() }
                { !this.props.isFetchingMovies && this.renderMovieDetails() }
            </div> );
    }
}

MovieGrid.propTypes = {
    styles: PropTypes.string,
    isFetchingMovies: PropTypes.bool,
    fetchedMovies: PropTypes.array.isRequired,
}

MovieGrid.defaultProps = {
    styles: '',
    isFetchingMovies: false,
    fetchedMovies: [],
}

export default connect( ( { home } ) => ( {
    isFetchingMovies: getIsFetchingMovies( home ),
    fetchedMovies: getFetchedMovies( home ),
} ), {
    fetchMovies: fetchMovies,
} )( MovieGrid );

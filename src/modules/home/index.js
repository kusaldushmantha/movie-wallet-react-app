import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { noop } from 'lodash';
import PropTypes from 'prop-types';
import styles from './styles/home.module.scss';
import SearchBox from "../../components/searchBox/searchbox";
import Header from "../../components/header/header";
import MoviePane from "../../components/moviePane/moviePane";
import { setSearchTermInState } from "./actions";
import { getFavouriteMovies } from "./selectors/home.selectors";

class HomePage extends PureComponent {

    formInputHandler( formInput ) {
        this.props.setSearchTerm( formInput );
    }

    render() {
        return (
            <Fragment>
                <Header favourites={ this.props.favouriteMovies }/>
                <div className={ styles[ 'home' ] }>
                    <div className={ styles[ 'content' ] }>
                        <SearchBox formSubmissionHandler={ this.formInputHandler.bind( this ) }/>
                        <MoviePane styles='movie-basic'/>
                    </div>
                </div>
            </Fragment>

        );
    }
}

HomePage.propTypes = {
    setSearchTerm: PropTypes.func,
    favouriteMovies: PropTypes.array,
};

HomePage.defaultProps = {
    setSearchTerm: noop,
    favouriteMovies: []
}

export default connect( ( { home } ) => ( {
    favouriteMovies: Array.from( getFavouriteMovies( home ) ),
} ), {
    setSearchTerm: setSearchTermInState,
} )( HomePage );



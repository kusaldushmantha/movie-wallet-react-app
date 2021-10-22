import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { noop } from 'lodash';
import PropTypes from 'prop-types';
import styles from './styles/home.module.scss';
import SearchBox from "../../components/searchBox/searchbox";
import Header from "../../components/header/header";
import MoviePane from "../../components/moviePane/moviePane";
import { setSearchTermInState } from "./actions";

class HomePage extends PureComponent {

    formInputHandler( formInput ) {
        this.props.setSearchTerm( formInput );
    }

    render() {
        return (
            <Fragment>
                <Header/>
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
    setSearchTerm: PropTypes.func
};

HomePage.defaultProps = {
    setSearchTerm: noop,
}

export default connect( ( { home } ) => ( {} ), {
    setSearchTerm: setSearchTermInState,
} )( HomePage );



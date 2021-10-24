import React, { Component } from "react";
import styles from './header.module.scss';
import PropTypes from "prop-types";
import { noop } from 'lodash';
import SimpleList from "../list/list";

class Header extends Component {

    constructor( props ) {
        super( props );
        this.state = { viewList: false }
    }

    renderFavouritesList() {
        this.setState( ( state ) => {
            return { viewList: !state.viewList }
        } )
    }

    render() {
        const isFavouritesAvailable = this.props.favourites.length > 0;
        return (
            <header className={ styles[ 'header' ] }>
                <div className={ styles[ 'header__logo' ] }>
                    <span className="material-icons">live_tv</span><h1>Movie Wallet</h1>
                </div>
                <div className={ styles[ 'header__favourites' ] }>
                    <button
                        onClick={ isFavouritesAvailable ? this.renderFavouritesList.bind( this ) : noop }>
                        { !isFavouritesAvailable &&
                        <span className="material-icons-round">favorite_border</span> }
                        { isFavouritesAvailable &&
                        <span className="material-icons">favorite</span> }
                    </button>
                    { this.state.viewList &&
                    <SimpleList list={ this.props.favourites } style={ styles[ 'list-style' ] }/> }
                </div>
            </header>
        );
    }
}

Header.propTypes = {
    favouriteMovies: PropTypes.array,
};

Header.defaultProps = {
    favouriteMovies: []
}

export default Header;

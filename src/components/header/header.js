import React, { Component } from "react";
import styles from './header.module.scss';

class Header extends Component {

    render() {
        return (
            <header className={ styles[ 'header' ] }>
                <div className={ styles[ 'header__logo' ] }>
                    <span className="material-icons">live_tv</span><h1>Movie Wallet</h1>
                </div>
                <div className={ styles[ 'header__favourites' ] }>
                    <button><span className="material-icons-round">favorite_border</span></button>
                </div>
            </header>
        );
    }
}

export default Header;

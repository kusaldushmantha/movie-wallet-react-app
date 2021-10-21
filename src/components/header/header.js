import React, { Component } from "react";
import styles from './header.module.scss';

class Header extends Component {

    render() {
        return (
            <header className={ styles[ 'header' ] }>
                <h1>Movie Wallet</h1>
            </header>
        );
    }
}

export default Header;

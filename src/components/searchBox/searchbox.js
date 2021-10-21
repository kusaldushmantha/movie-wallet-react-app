import React, { Component } from "react";
import styles from './searchbox.module.scss';

class SearchBox extends Component {

    render() {
        return (
            <div>
                <form action="#" className={ styles[ 'searchbox' ] }>
                    <input className={ styles[ 'searchbox__input' ] } type='text'
                           placeholder='Search Movies'/>
                    <button className={ styles[ 'searchbox__button' ] }>
                        <svg className={ styles[ 'searchbox__icon' ] }>
                            <use xlinkHref="img/sprite.svg#icon-magnifying-glass"/>
                        </svg>
                    </button>
                </form>
            </div>
        );
    }
}

export default SearchBox;

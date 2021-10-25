import React, { Component } from "react";
import { FixedSizeList as List } from 'react-window';
import styles from './list.module.scss';
import PropTypes from 'prop-types';


class SimpleList extends Component {

    renderFavourites( { index, style } ) {
        const listItem = this.props.list[ index ]
        return (
            <div className={ index % 2 ? styles[ 'listItemEven' ] : styles[ 'listItemOdd' ] }
                 style={ style }>
                <img src={ listItem.poster } alt={ listItem.title }
                     className={ styles[ 'list-img' ] }/>
                <div className={ styles[ 'list-content' ] }>
                    <p className={ styles[ 'list-p' ] }><span>Title : </span>{ listItem.title }</p>
                    <p className={ styles[ 'list-p' ] }><span>Year : </span>{ listItem.year }</p>
                    <p className={ styles[ 'list-p' ] }><span>Rating : </span>{ listItem.rating }
                    </p>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className={ this.props.style }>
                <List
                    className={ styles[ 'list' ] }
                    height={ 300 }
                    itemCount={ this.props.list.length }
                    itemSize={ 120 }
                    width={ 300 }
                >
                    { this.renderFavourites.bind( this ) }
                </List>
            </div>
        )
    }
}

SimpleList.propTypes = {
    list: PropTypes.array.isRequired,
    style: PropTypes.string,
}

SimpleList.defaultProps = {
    list: [],
    style: '',
}

export default SimpleList;

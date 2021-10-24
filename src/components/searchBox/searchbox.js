import React, { Component } from "react";
import styles from './searchbox.module.scss';
import PropTypes from "prop-types";

class SearchBox extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            inputValue: '',
            inputSubmitted: false,
        }
    }

    onChangeHandler( event ) {
        this.setState( () => {
            return {
                inputValue: event.target.value,
                inputSubmitted: false,
            }
        } );
    }

    onSubmitHandler( event ) {
        event.preventDefault();
        this.submitValue();
    }

    onBtnClickHandler() {
        this.submitValue();
    }

    submitValue() {
        if ( this.state.inputValue && !this.state.inputSubmitted ) {
            this.props.formSubmissionHandler( this.state.inputValue );
            this.setState( () => {
                return { inputSubmitted: true }
            } )
        }
    }

    render() {
        return (
            <div className={ this.props.styles }>
                <form onSubmit={ this.onSubmitHandler.bind( this ) }
                      className={ styles[ 'searchbox' ] }>
                    <input className={ styles[ 'searchbox__input' ] } type='text'
                           placeholder='Search Movies'
                           onChange={ this.onChangeHandler.bind( this ) }/>
                    <button className={ styles[ 'searchbox__button' ] }
                            onClick={ this.onBtnClickHandler.bind( this ) }>
                        <svg className={ styles[ 'searchbox__icon' ] }>
                            <use xlinkHref="img/sprite.svg#icon-magnifying-glass"/>
                        </svg>
                    </button>
                </form>
            </div>
        );
    }
}

SearchBox.propTypes = {
    styles: PropTypes.string,
    formSubmissionHandler: PropTypes.func.isRequired
}

SearchBox.defaultProps = {
    styles: '',
}

export default SearchBox;

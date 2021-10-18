import { Component } from "react";
import styles from './movie-grid.module.scss'
import PropTypes from 'prop-types';

class MovieGrid extends Component {

    render() {
        const styleClasses = `${ this.props.styles } ${ styles[ 'grid' ] }`
        return <div className={ styleClasses }>
            <ul>
                <li>First movie</li>
                <li>Second movie</li>
                <li>Third movie</li>
            </ul>
        </div>
    }
}

MovieGrid.propTypes = {
    styles: PropTypes.string,
}

MovieGrid.defaultProps = {
    styles: '',
}

export default MovieGrid;

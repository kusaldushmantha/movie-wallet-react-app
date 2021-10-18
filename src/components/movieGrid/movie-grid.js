import { Component } from "react";
import styles from './movie-grid.module.scss'
import PropTypes from 'prop-types';

class MovieGrid extends Component {

    render() {
        return <div className={ `${ this.props.styles } ${ styles[ 'grid' ] }` }>
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

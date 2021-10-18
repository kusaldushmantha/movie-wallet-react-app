import React, { PureComponent } from 'react';
import styles from './styles/home.module.scss';
import MovieGrid from "../../components/movieGrid/movie-grid";

class Index extends PureComponent {
    render() {
        return (
            <div className={ styles[ 'movie-grid' ] }>
                <MovieGrid/>
            </div>
        );
    }
}

export default Index;



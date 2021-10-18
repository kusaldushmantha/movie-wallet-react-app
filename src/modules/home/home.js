import React, {PureComponent} from 'react';
import styles from './home.module.scss';
import MovieGrid from "../../components/movieGrid/movie-grid";

class Home extends PureComponent {
    render() {
        return (
            <div className={styles['movie-grid']}>
                <MovieGrid/>
            </div>
        );
    }
}

export default Home;



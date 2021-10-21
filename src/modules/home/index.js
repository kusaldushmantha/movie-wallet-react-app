import React, { Fragment, PureComponent } from 'react';
import styles from './styles/home.module.scss';
import SearchBox from "../../components/searchBox/searchbox";
import Header from "../../components/header/header";
import MoviePane from "../../components/moviePane/moviePane";

class HomePage extends PureComponent {
    render() {
        return (
            <Fragment>
                <Header/>
                <div className={ styles[ 'home' ] }>
                    <div className={ styles[ 'content' ] }>
                        <SearchBox/>
                        <MoviePane styles='movie-basic'/>
                    </div>
                </div>
            </Fragment>

        );
    }
}

export default HomePage;



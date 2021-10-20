import axios from 'axios';
import { callAsync } from "../../../internal/apiCommons";
import { get } from 'lodash';

export const getMovieFromAPI = async function ( movieName ) {
    const apiResponse = await callAsync( () => axios.get( 'http://www.omdbapi.com/?apikey=ea82c66a&t=' + movieName ) )
    if ( apiResponse.err.status ) {
        return apiResponse
    }
    return {
        title: get( apiResponse, [ 'data', 'Title' ] ),
        year: get( apiResponse, [ 'data', 'Year' ] ),
        poster: get( apiResponse, [ 'data', 'Poster' ] ),
        rating: get( apiResponse, [ 'data', 'imdbRating' ] )
    }
}

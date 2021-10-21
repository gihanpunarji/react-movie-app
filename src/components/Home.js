import React, { useState, useEffect } from 'react'
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'
import NoIMAGE from '../images/no_image.jpg'
import { UseHomeFetch } from '../hooks/UseHomeFetch'
import HeroImg from './HeroImg';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';

function Home() {

    const { state, loading, error, setSerachTerm } = UseHomeFetch();

    return (
        <>
            {state.results[0] ? 
                <HeroImg 
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].original_title}
                    text={state.results[0].overview} 
                />
            : null }
            <SearchBar setSearchTerm={setSerachTerm} />
            <Grid header='Popular Movies'>
                {state.results.map((movie) => (
                    <Thumb key={movie.id}
                    clikcable 
                    image={
                        movie.poster_path
                        ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                        : 'NoIMAGE'
                    }
                    movieID={movie.id} />
                ))}
            </Grid>
            <Spinner />
        </>
    )
}

export default Home

import React, { useState, useEffect } from 'react'
import { POSTER_SIE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'
import NoIMAGEE from '../images/no_image.jpg'
import { UseHomeFetch } from '../hooks/UseHomeFetch'
import HeroImg from './HeroImg';
import Grid from './Grid';

function Home() {

    const { state, loading, error } = UseHomeFetch();
    return (
        <>
            {state.results[0] ? 
                <HeroImg 
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].original_title}
                    text={state.results[0].overview} 
                />
            : null }
            <Grid header='Popular Movies'>
                {state.results.map((movie) => (
                    <div key={movie.id}>{movie.title}</div>
                ))}
            </Grid>
        </>
    )
}

export default Home

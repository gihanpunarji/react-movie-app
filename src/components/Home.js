import React, { useState, useEffect } from 'react'
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'
import NoIMAGE from '../images/no_image.jpg'
import { UseHomeFetch } from '../hooks/UseHomeFetch'
import HeroImg from './HeroImg';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Button from './Button';

function Home() {

    const { state, loading, error, searchTerm, setSerachTerm, setisLoading } = UseHomeFetch();

    console.log(state);
    if(error) return <div>Something went wrong...</div>

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
            <Grid header={searchTerm ? 'Search Results' : 'Popular Movies'}>
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
            {loading && <Spinner />}
            {state.page < state.total_pages && !loading && ( 
                <Button text='Load More' callback={() => setisLoading(true)} />
            )}
        </>
    )
}

export default Home

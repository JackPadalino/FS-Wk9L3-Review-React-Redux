import { CircularProgress } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleMoviePage = () => {
    const [selectedMovie, setSelectedMovie] = useState({});
    const [loading, setLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const { movieId } = useParams();

    const fetchMoviesInfo = async () => {
        try {
            setLoading(true);
            const movie = await axios.get(`/api/movies/${movieId}`);
            setSelectedMovie(movie.data);
            setLoading(false);
        } catch (err) {
            setHasError(true);
        }
    }

    useEffect(() => {
        fetchMoviesInfo();
    }, []);

    if (hasError) return <h1>Oh no, things broke!</h1>
    if (loading) return <CircularProgress />

    return (
        <div>
            <h1>{selectedMovie.name}</h1>
            <h2>{selectedMovie.runtime}</h2>
        </div>
    );
};

export default SingleMoviePage;
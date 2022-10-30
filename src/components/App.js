import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import {
    GenresPage,
    HomePage,
    MoviesPage
} from './';
import { Button } from '@mui/material';
import SingleMoviePage from './SingleMoviePage';

/**
 * This is the entry point for all of our react stuff
 */
const App = () => {
    return (
        <div>
            <Link to={'/'}>
                <Button variant="contained">Home</Button>
            </Link>
            <Link to={'/movies'}>
                <Button variant="contained">Movies</Button>
            </Link>
            <Link to={'/genres'}>
                <Button variant="contained">Genres</Button>
            </Link>

            <Routes>
                <Route path="/genres" element={<GenresPage />} />
                <Route path="/movies" element={<MoviesPage />} />
                {/* http://localhost:3000/movies/1 */}
                <Route path="/movies/:movieId" element={<SingleMoviePage />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </div>
    );
};

export default App;
import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const cardStyles = {
    maxWidth: '150px'
}

const MovieCard = ({ movie }) => {
    return (
        <Link to={`/movies/${movie.id}`}>
        <Card style={cardStyles}>
            <CardContent>
                <Typography variant="h5">{movie.name}</Typography>
                <Typography variant="subheader" color="text.secondary">RUNTIME: {movie.runtime}</Typography>
            </CardContent>
        </Card>
        </Link>
    );
};

export default MovieCard;
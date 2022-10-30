import axios from 'axios';
import React, { useEffect, useState } from 'react';

const GenresPage = () => {
    const [genres, setGenres] = useState([]);

    const getGenres = async () => {
        // Reach out into our API
        const genres = await axios.get("/api/genres");

        // Update local state
        setGenres(genres.data);
    }

    useEffect(() => {
        getGenres();
    }, [])

    return (
        <div>
            <h1>Genre Page</h1>

            {genres.map(genre => {
                return <p key={genre.id}>{genre.name}</p>
            })}
        </div>
    );
};

export default GenresPage;
import React, { useEffect, useState } from 'react';
import Video from './Video';
import { embedMovie } from '../constants/embed';
import { useRouter } from 'next/router';

function DetailMovie() {
    const router = useRouter();
    const { mid } = router.query;
    const movieID: string | undefined = mid?.toString();
    const [urlMovie, setUrlMovie] = useState<string>();
    useEffect(() => {
        const url = embedMovie(movieID);
        setUrlMovie(url);
    }, [movieID]);

    return <div>{urlMovie && <Video src={urlMovie} />}</div>;
}

export default DetailMovie;

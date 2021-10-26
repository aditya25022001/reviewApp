import React, { useState } from 'react'
import { Image } from 'react-bootstrap'
import { Skeleton } from '@material-ui/lab'

export const Movie = ({ name, image, genre, description, cast, availableOn, releaseDate }) => {
    const [loaded, setLoaded] = useState(false)
    return (
        <div className='card movie_card mx-auto'>
            <h4>{name}</h4>
            {!loaded && <Skeleton variant="rect" width="100%" height={250} animation="wave" />} 
            <Image width="100%" height={250} onLoad={e => setLoaded(true)} src={image} alt={name}/>
            <div>Genre : {genre.join(',')}</div>
            <div>{description}</div>
            <div>{cast}</div>
            <div>{availableOn}</div>
            <div>{releaseDate}</div>
        </div>
    )
}

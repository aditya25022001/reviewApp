import React from 'react'
import { Image } from 'react-bootstrap'

export const Movie = ({ name, image, genre, description, cast, availableOn, releaseDate }) => {
    return (
        <div className='card movie_card mx-auto'>
            <h4>{name}</h4>
            <Image fluid src={image} alt={name}/>
            <div>{genre}</div>
            <div>{description}</div>
            <div>{cast}</div>
            <div>{availableOn}</div>
            <div>{releaseDate}</div>
        </div>
    )
}

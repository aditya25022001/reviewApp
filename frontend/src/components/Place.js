import React from 'react'
import { Image } from 'react-bootstrap'

export const Place = ({ name, image, location, type, description }) => {
    return (
        <div className='card movie_card mx-auto'>
            <h4>{name}</h4>
            <Image fluid src={image} alt={name}/>
            <div>{description}</div>
            <div>{location}</div>
            <div>{type}</div>
        </div>
    )
}

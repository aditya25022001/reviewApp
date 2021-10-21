import React from 'react'
import { Image } from 'react-bootstrap'

export const Cafe = ({ name, image, description, location, established }) => {
    return (
        <div className='card movie_card mx-auto'>
            <h4>{name}</h4>
            <Image fluid src={image} alt={name}/>
            <div>{description}</div>
            <div>{location}</div>
            <div>{established}</div>
        </div>
    )
}

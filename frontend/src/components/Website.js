import React from 'react'
import { Image } from 'react-bootstrap'

export const Website = ({ name, image, description, launched, url }) => {
    return (
        <div className='card movie_card mx-auto'>
            <h4>{name}</h4>
            <Image fluid src={image} alt={name}/>
            <div>{description}</div>
            <div>{launched}</div>
            <div>{url}</div>
        </div>
    )
}

import React from 'react'
import { Image } from 'react-bootstrap'

export const Automobile = ({ name, image, description, price, company }) => {
    return (
        <div className='card movie_card mx-auto'>
            <h4>{name}</h4>
            <Image fluid src={image} alt={name}/>
            <div>{description}</div>
            <div>{price}</div>
            <div>{company}</div>
        </div>
    )
}

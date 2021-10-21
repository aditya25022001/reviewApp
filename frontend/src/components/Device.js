import React from 'react'
import { Image } from 'react-bootstrap'

export const Device = ({ name, description, launchDate, company, price, image }) => {
    return (
        <div className='card movie_card mx-auto'>
            <h4>{name}</h4>
            <Image fluid src={image} alt={name}/>
            <div>{description}</div>
            <div>{price}</div>
            <div>{launchDate}</div>
            <div>{company}</div>
        </div>
    )
}

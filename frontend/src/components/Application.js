import React from 'react'
import { Image } from 'react-bootstrap'

export const Application = ({ name, logo, description, launch, category, size }) => {
    return (
        <div className='card movie_card mx-auto'>
            <h4>{name}</h4>
            <Image fluid width={100} height={100} src={logo} alt={name}/>
            <div>{description}</div>
            <div>{size}</div>
            <div>{category}</div>
            <div>{launch}</div>
        </div>
    )
}
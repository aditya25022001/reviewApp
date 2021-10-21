import React from 'react'
import { Image } from 'react-bootstrap'

export const Channel = ({ name, description, image, url, subscribers, category }) => {
    return (
        <div className='card movie_card mx-auto'>
            <h4>{name}</h4>
            <Image fluid width={100} height={100} src={image} alt={name}/>
            <div>{description}</div>
            <div>{url}</div>
            <div>{subscribers}</div>
            <div>{category}</div>
        </div>
    )
}

import React, { useState } from 'react'
import { Image } from 'react-bootstrap'
import { Skeleton } from '@material-ui/lab'

export const Automobile = ({ name, image, description, price, company }) => {
    const [loaded, setLoaded] = useState(false)
    return (
        <div className='card movie_card mx-auto'>
            <h4>{name}</h4>
            {!loaded && <Skeleton variant="rect" width="100%" height={250} animation="wave" />} 
            <Image fluid onLoad={e => setLoaded(true)} src={image} alt={name}/>
            <div>{description}</div>
            <div>{price}</div>
            <div>{company}</div>
        </div>
    )
}

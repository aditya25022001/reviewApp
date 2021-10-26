import React, { useState } from 'react'
import { Image } from 'react-bootstrap'
import { Skeleton } from '@material-ui/lab'

export const Application = ({ name, logo, description, launch, category, size }) => {
    const [loaded, setLoaded] = useState(false)
    return (
        <div className='card movie_card mx-auto'>
            <h4>{name}</h4>
            {!loaded && <Skeleton variant="rect" width="100%" height={250} animation="wave" />} 
            <Image fluid width={100} onLoad={e => setLoaded(true)} height={100} src={logo} alt={name}/>
            <div>{description}</div>
            <div>{size}</div>
            <div>{category}</div>
            <div>{launch}</div>
        </div>
    )
}
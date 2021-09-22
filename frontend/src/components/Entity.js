import React from 'react'
import { Link } from 'react-router-dom'

export const Entity = ({ name, image, to }) => {
    return (
        <Link to={to} style={{ color:'black', textDecoration: 'none' }} className='card p-5 d-flex flex-direction-column align-items-center entity_card mx-auto my-2'>
            <div>
                {image}
            </div>
            <div>
                {name}
            </div>
        </Link>
    )
}

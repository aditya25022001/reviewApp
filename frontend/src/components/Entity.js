import React from 'react'
import { Link } from 'react-router-dom'

export const Entity = ({ name, image, to, disabled }) => {
    return (
        <Link to={disabled ? '/' : to} style={{ color:'black', textDecoration: 'none' }} id={disabled ? 'disabled_entity' : 'entity'} className='card p-5 d-flex flex-direction-column align-items-center entity_card mx-auto my-2'>
            <div>
                {image}
            </div>
            <div>
                {name}
            </div>
        </Link>
    )
}

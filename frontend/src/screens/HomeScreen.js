import React from 'react'
import { Entity } from '../components/Entity'
import AddIcon from '@material-ui/icons/Add';
import {entities} from '../data.js'
import { useSelector } from 'react-redux'

export const HomeScreen = () => {

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    return (
        <div style={{ padding:'5rem 0.5rem 3rem 0.5rem' }} className='mx-auto'>
            <div style={{ display:'flex', flexWrap:'wrap' }}>
                {entities.map((each,index) => (
                    <Entity key={index} name={each.name} image={each.image} to={each.to} />
                    ))}
                <Entity name="Add Entity" disabled={!userInfo || (userInfo && !userInfo.isAdmin)} image={<AddIcon/>} to="/add-entity" />
            </div>
        </div>
    )
}

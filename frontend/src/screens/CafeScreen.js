import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCafesAction } from '../actions/cafeActions'
import { Loader } from '../components/Loader'
import { Message } from '../components/Message'
import { Cafe } from '../components/Cafe'

export const CafeScreen = () => {

    const dispatch = useDispatch()

    const userGetCafes = useSelector(state => state.userGetCafes)
    const { loading, error, cafes } = userGetCafes

    useEffect(()=>{
        dispatch(getCafesAction())
    },[dispatch])

    return (
        <div className='pt-5 mt-4'>
            {loading 
            ? <Loader/>
            : error
            ? <Message error={error} variant='error'/>
            : cafes && cafes.map(cafe => (
                <Cafe key={cafe._id} name={cafe.name} description={cafe.description} image={cafe.image} established={cafe.established} location={cafe.location} />
            )) 
            }
        </div>
    )
}

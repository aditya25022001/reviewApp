import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPlacesAction } from '../actions/placeActions'
import { Loader } from '../components/Loader'
import { Message } from '../components/Message'
import { Place } from '../components/Place'

export const PlaceScreen = () => {

    const dispatch = useDispatch()

    const userGetPlaces = useSelector(state => state.userGetPlaces)
    const { loading, error, places } = userGetPlaces

    useEffect(() => {
        dispatch(getPlacesAction())
    },[dispatch])

    return (
        <div className='mt-4 pt-5'>
            {loading
            ? <Loader/>
            : error
            ? <Message error={error} variant='error'/>
            : places && places.map(place => (
                <Place key={place._id} name={place.name} image={place.image} description={place.description} location={place.location} type={place.type} />
            ))
            }            
        </div>
    )
}

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAutomobilesAction } from '../actions/autoActions'
import { Loader } from '../components/Loader'
import { Message } from '../components/Message'
import { Automobile } from '../components/Automobile'

export const AutomobileScreen = () => {
    
    const dispatch = useDispatch()

    const userGetAutomobiles = useSelector(state => state.userGetAutomobiles)
    const { loading, error, automobiles } = userGetAutomobiles

    useEffect(()=>{
        dispatch(getAutomobilesAction())
    },[dispatch])
    
    return (
        <div className='pt-5 mt-4'>
            {loading 
            ? <Loader/>
            : error 
            ? <Message message={error} variant='error'/>
            : automobiles && automobiles.map((automobile,index) => (
                <Automobile key={index} name={automobile.name} image={automobile.image} company={automobile.company} description={automobile.description} price={automobile.price} />
            ))}
        </div>
    )
}

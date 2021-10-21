import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAppsAction } from '../actions/appActions'
import { Loader } from '../components/Loader'
import { Message } from '../components/Message'
import { Application } from '../components/Application'

export const ApplicationScreen = () => {

    const dispatch = useDispatch()

    const userGetApps = useSelector(state => state.userGetApps)
    const { loading, error, apps } = userGetApps

    useEffect(()=>{
        dispatch(getAppsAction())
    },[dispatch])

    return (
        <div className='pt-5 mt-4'>
            {loading 
            ? <Loader/>
            : error 
            ? <Message message={error} variant='error'/>
            : apps && apps.map((app,index) => (
                <Application key={index} name={app.name} logo={app.logo} description={app.description} launch={app.launch} category={app.category} size={app.size} />
            ))}
        </div>
    )
}

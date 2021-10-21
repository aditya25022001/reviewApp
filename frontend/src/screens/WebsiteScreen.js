import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWebsitesAction } from '../actions/webActions'
import { Loader } from '../components/Loader'
import { Message } from '../components/Message'
import { Website } from '../components/Website'

export const WebsiteScreen = () => {

    const dispatch = useDispatch()

    const userGetWebsites = useSelector(state => state.userGetWebsites)
    const { loading, error, websites } = userGetWebsites

    useEffect(() => {
        dispatch(getWebsitesAction())
    },[dispatch])

    return (
        <div className='mt-4 pt-5'>
            {loading 
            ? <Loader/>
            : error
            ? <Message message={error} variant='error'/>
            : websites && websites.map(website => (
                <Website key={website._id} name={website.name} image={website.image} url={website.url} description={website.description} launched={website.launched} />
            ))
            }
        </div>
    )
}

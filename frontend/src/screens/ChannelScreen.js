import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getChannelsAction } from '../actions/channelActions'
import { Loader } from '../components/Loader'
import { Message } from '../components/Message'
import { Channel } from '../components/Channel'

export const ChannelScreen = () => {

    const dispatch = useDispatch()

    const userGetChannels = useSelector(state => state.userGetChannels)
    const { loading, error, channels } = userGetChannels

    useEffect(() => {
        dispatch(getChannelsAction())
    },[dispatch])
    
    return (
        <div className='mt-4 pt-5'>
            {loading
            ? <Loader/>
            : error
            ? <Message error={error} variant='error'/>
            : channels && channels.map((channel,index) => (
                <Channel key={index} name={channel.name} image={channel.image} description={channel.description} url={channel.url} subscribers={channel.subscribers} category={channel.category} />
            ))
            }            
        </div>
    )
}

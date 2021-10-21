import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDevicesAction } from '../actions/deviceActions'
import { Loader } from '../components/Loader'
import { Message } from '../components/Message'
import { Device } from '../components/Device'

export const DeviceScreen = () => {

    const dispatch = useDispatch()

    const userGetDevices = useSelector(state => state.userGetDevices)
    const { loading, error, devices } = userGetDevices

    useEffect(() => {
        dispatch(getDevicesAction())
    },[dispatch])
    
    return (
        <div className='mt-4 pt-5'>
            {loading
            ? <Loader/>
            : error
            ? <Message error={error} variant='error'/>
            : devices && devices.map((device,index) => (
                <Device key={index} name={device.name} company={device.company} price={device.price} image={device.image} description={device.description} launchDate={device.launchDate} />
            ))
            }            
        </div>
    )
}

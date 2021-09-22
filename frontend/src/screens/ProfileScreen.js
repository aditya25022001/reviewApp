import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileAction } from '../actions/profileActions'
import { Loader } from '../components/Loader'
import { Message } from '../components/Message'
import { Avatar } from '@material-ui/core';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

export const ProfileScreen = ({ history }) => {
    
    const userProfile = useSelector(state => state.userProfile)
    const { loading, error, user } = userProfile

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    useEffect(()=>{
        if(!userInfo){
            history.push('/')
        }
        else{
            dispatch(getProfileAction())
        }
    },[userInfo, history, dispatch])

    return (
        <div>
            <Container className='mx-auto mt-5'>
                {loading 
                ? <Loader/> 
                : error
                ? <Message message={error} variant='error' />
                :
                <div className='pt-5'>
                    <div className='d-flex' style={{ alignItems:'flex-end' }}>
                        <div style={{ position:'absolute' }}>
                            <Avatar style={{ color:'white', backgroundColor:'black' }}>{user && user.name && user.name.split('')[0]}</Avatar>
                        </div>
                        <CameraAltIcon className='border' style={{ cursor:'pointer', color:'gray', fontSize:'1.3rem', left:'1.6rem', borderRadius:'50%', position:'relative', backgroundColor:'white', padding:'0.1rem' }}/>
                    </div>
                    <h4>{user._id}</h4>
                    <h4>{user.name}</h4>
                    <h4>{user.email}</h4>
                    <h4>{user.number}</h4>
                </div>
                }
            </Container>
        </div>
    )
}

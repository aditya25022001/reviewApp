import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileAction } from '../actions/profileActions'
import { Loader } from '../components/Loader'
import { Message } from '../components/Message'

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
                <>
                    <h4>{user._id}</h4>
                    <h4>{user.name}</h4>
                    <h4>{user.email}</h4>
                    <h4>{user.number}</h4>
                </>
                }
            </Container>
        </div>
    )
}

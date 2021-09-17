import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Loader } from '../components/Loader'
import { LogoutComponent } from '../components/LogoutComponent'

export const HomeScreen = ({ history }) => {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    useEffect(()=>{
        if(!userInfo){
            history.push('/')
        }
    },[userInfo, history])
    return (
        <div>
            <Loader/>
            {userInfo && <LogoutComponent/>}
        </div>
    )
}

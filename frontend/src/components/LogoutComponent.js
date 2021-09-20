import React from 'react'
import PowerSettingsNewRoundedIcon from '@material-ui/icons/PowerSettingsNewRounded';
import { useDispatch } from 'react-redux';
import { userLogoutAction } from '../actions/authActions';

export const LogoutComponent = () => {

    const dispatch = useDispatch()
    const logoutHandler = () => {
        dispatch(userLogoutAction())
    }

    return (
        <div style={{ cursor:'pointer', position:'fixed', bottom:'3rem', right:'1rem', width:'40px', height:'40px', zIndex:'151' }}>
            <PowerSettingsNewRoundedIcon onClick={logoutHandler} className='logout' style={{ boxShadow:"2px 2px 2px rgb(196, 196, 196), -2px -2px 2px rgb(196, 196, 196), -2px 2px 2px rgb(196, 196, 196), 2px -2px 2px rgb(196, 196, 196)", width:'100%', height:'100%',padding:'10%', backgroundColor:'whitesmoke', color:'black', borderRadius:'50%',fontSize:30 }} />
        </div>
    )
}
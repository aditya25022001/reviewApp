import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Button from '@material-ui/core/Button';
import { Tooltip } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { resetPasswordAction } from '../actions/authActions'
import { Loader } from '../components/Loader';
import { Message } from '../components/Message';

export const ResetPasswordScreen = ({ history, match }) => {

    const dispatch = useDispatch()
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [open, setOpen] = useState(false)
    const [variant, setVariant] = useState('error')
    const [errorMessage, setErrorMessage] = useState("")

    const id = match.params.id

    const userResetPassword = useSelector(state => state.userResetPassword)
    const { loading, error, success, userInfoTemp } = userResetPassword

    const sanitation = () => {
        if(password===confirmPassword){
            if(password.length>8){
                return true
            }
            else{
                setOpen(true)
                setErrorMessage("Password must be atleast 8 characters")
                return false
            }
        }
        else{
            setOpen(true)
            setErrorMessage("Passwords do not match")
            return false
        }
    }

    useEffect(()=>{
        if(userInfoTemp && success){
            setVariant('success')
            setOpen(true)
            setErrorMessage("Password reset successful")
            setTimeout(()=>{
                history.push('/login')
            },3000)
        }
    },[userInfoTemp, dispatch, success, history])

    const resetPasswordHandler = (e) => {
        e.preventDefault()
        if(sanitation()){
            dispatch(resetPasswordAction(password, id))
        }
    }

    if(open){
        setTimeout(()=>{
            setOpen(false)
        },3000)
    }

    return (
        <>
            {loading && <Loader/>}
            {error && <Message variant='error' message={error} />}
            {open && <Message variant={variant} message={errorMessage} />}
            <Form onSubmit={resetPasswordHandler} className='p-4 mb-5 rounded mx-auto border form_component'>  
                <div className='mb-2 form_header_email'>Reset Password</div>        
                <Form.Group className='mb-3' >
                    <div className='d-flex'>
                        <TextField label="Password" required variant="outlined" value={password} onChange={e => setPassword(e.target.value)} type={showPassword ? "text" : "password"} />
                        <Tooltip title={showPassword ? 'Hide Password' : 'Show Password'} placement="right">
                            <Button variant='contained' style={{ backgroundColor:'black', cursor:'pointer', color:'white' }} className='ml-3 rounded' onClick = {e => setShowPassword(!showPassword)} >
                                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </Button>
                        </Tooltip>
                    </div>
                </Form.Group>            
                <Form.Group className='mb-3' >
                    <div className='d-flex'>
                        <TextField label="Confirm Password" required variant="outlined" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} type={showConfirmPassword ? "text" : "password"} />
                        <Tooltip title={showConfirmPassword ? 'Hide Password' : 'Show Password'} placement="right">
                            <Button variant='contained' style={{ backgroundColor:'black', cursor:'pointer', color:'white' }} className='ml-3 rounded' onClick = {e => setShowConfirmPassword(!showConfirmPassword)} >
                                {showConfirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </Button>
                        </Tooltip>
                    </div>
                </Form.Group>                   
                <Button variant='contained' type="submit" style={{ color:'white', backgroundColor:'black' }} className='border-0 w-100 py-3' >Reset</Button>  
            </Form>   
        </>
    )
}
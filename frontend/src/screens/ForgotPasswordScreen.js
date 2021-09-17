import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { userRequestOtpAction } from '../actions/authActions'
import { useDispatch, useSelector } from 'react-redux'
import { Loader } from '../components/Loader';
import { Message } from '../components/Message';

export const ForgotPasswordScreen = ({ history }) => {

    const dispatch = useDispatch()

    const userGetOtp = useSelector(state => state.userGetOtp)
    const { loading, error, success, userInfoTemp } = userGetOtp

    const [email, setEmail] = useState("")    

    const passwordChangeHandler = (e) => {
        e.preventDefault()
        dispatch(userRequestOtpAction(email))
    }

    useEffect(()=>{
        if(userInfoTemp && success){
            setTimeout(()=>{
                history.push('/forgot/otp')
            },3500)
        }
    },[history, userInfoTemp, dispatch, success])

    return (
        <>
        {loading && <Loader/>}
        {error && <Message variant='error' message={error} />}
        {success && <Message variant='success' message={`Email has been sent to ${email}`} />}
        <Form onSubmit={passwordChangeHandler} className='p-4 mb-5 rounded mx-auto form_component'>  
            <div className='mb-2 form_header_email'>Forgot Password</div>                       
            <div className='mt-3 mb-5'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. New to managing mails!! now</div>     
            <Form.Group className='mb-3' >
                <div className='d-flex'>
                    <TextField required autoFocus id="outlined-password-input" label="Email" type="email" inputMode="email" autoComplete="current-password" variant="outlined" value={email} onChange={e => setEmail(e.target.value)}/> 
                </div>
            </Form.Group>                 
            <Button variant='contained' type="submit" style={{ color:'white', backgroundColor:'black' }} className='border-0 w-100 py-3' >Send</Button>  
        </Form>
    </>
    )
}

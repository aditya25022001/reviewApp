import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useSelector } from 'react-redux'
import { Message } from '../components/Message';
import bcrypt from 'bcryptjs'

export const EnterOtpScreen = ({ history }) => {

    const [otp, setOtp] = useState("")
    const [error, setError] = useState(false)
    const [message, setMessage] = useState(false)

    const userGetOtp = useSelector(state => state.userGetOtp)
    const { userInfoTemp } = userGetOtp
    const requiredOtp = userInfoTemp.otp
    const id = userInfoTemp._id

    const otpVerification = (e) => {
        e.preventDefault()
        if(bcrypt.compare(requiredOtp, otp)){
            setTimeout(()=>{
                setMessage(true)
            },1000)
            setTimeout(()=>{
                history.push(`/forgot/reset/${id}`)
            },3000)
        }
        else{
            setError(true)
        }
    }

    return (
        <>
            {error && <Message variant="error" message="Invalid otp" />}
            {message && <Message variant='success' message="Verified!" />}
            <Form onSubmit={otpVerification} className='p-4 mb-5 rounded mx-auto border form_component'>  
                <div className='mb-2 form_header_email'>Enter OTP</div>                       
                <div className='mt-3 mb-5'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. New to managing mails!! now</div>     
                <Form.Group className='mb-3' >
                    <div className='d-flex'>
                        <TextField required autoFocus id="outlined-password-input" label="OTP" type="text" variant="outlined" value={otp} onChange={e => setOtp(e.target.value)}/> 
                    </div>
                </Form.Group>                 
                <Button variant='contained' type="submit" style={{ color:'white', backgroundColor:'black' }} className='border-0 w-100 py-3' >Verify</Button>  
            </Form>
        </>
    )
}
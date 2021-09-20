import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Button, TextField } from '@material-ui/core'

export const ContactScreen = ({ history }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(()=>{
        if(userInfo){
            setName(userInfo.name)
            setEmail(userInfo.email)
        }
    },[userInfo])

    const contactHandler = (e) => {
        e.preventDefault()
        console.log({name, email, message})
    }

    return (
        <>
            <Form onSubmit={contactHandler} className='p-4 mb-5 rounded mx-auto border form_component_contact'>
                <div className='d-flex mb-4 text-center align-items-center justify-content-center'>
                    <div className='mb-2 form_header_email h4'>Contact us </div>                 
                    <div className='mb-2 ml-3 h2 wave'>&#128075;</div>         
                </div>
                <Form.Group className='mb-3' >
                    <TextField autoFocus={true} required id="outlined-required" label="Name" variant="outlined" type="text" value={name} onChange={e => setName(e.target.value)}/>         
                </Form.Group>
                <Form.Group className='mb-3' >
                    <TextField required id="outlined-required" label="Email" variant="outlined" type="email" inputMode="email" value={email} onChange={e => setEmail(e.target.value)}/>         
                </Form.Group>
                <Form.Group className='mb-3' >
                    <TextField multiline rows={7} required id="outlined-required" label="Message" variant="outlined" type="textarea" value={message} onChange={e => setMessage(e.target.value)}/>         
                </Form.Group>
                <Button variant='contained' type="submit" style={{ color:'white', backgroundColor:'black' }} className='border-0 w-100 py-3' >Make contact</Button>  
            </Form>
        </>
    )
}
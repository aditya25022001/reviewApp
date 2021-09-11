import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [terms, setTerms] = useState(false)
    return (
        <div>
            <Form className='p-4 rounded mx-auto form_component'>
                <div className='mb-4 w-100 pl-1 py-1 form_header'>Sign Up</div>
                <Form.Group className='mb-3' >
                    <TextField autoFocus={true} label="Name" required variant="outlined" value={name} onChange={e => setName(e.target.value)} type="text" />
                </Form.Group>
                <Form.Group className='mb-3' >
                    <TextField label="Email" required inputmode='email' type='email' variant="outlined" value={email} onChange={e => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className='mb-3' >
                    <TextField label="Phone" required inputmode='tel' inputProps={{maxLength:10}} type='tel' variant="outlined" value={number} onChange={e => setNumber(e.target.value)} />
                </Form.Group>
                <Form.Group className='mb-3' >
                    <div className='d-flex'>
                        <TextField label="Password" required variant="outlined" value={password} onChange={e => setPassword(e.target.value)} type={showPassword ? "text" : "password"} />
                        <Button variant='contained' style={{ backgroundColor:'black', cursor:'pointer', color:'white' }} className='ml-3 rounded' onClick = {e => setShowPassword(!showPassword)} >
                            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </Button>
                    </div>
                </Form.Group>
                <Form.Group className='mb-3' >
                    <div className='d-flex'>
                        <TextField label="Confirm Password" required variant="outlined" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} type={showConfirmPassword ? "text" : "password"} />
                        <Button variant='contained' style={{ backgroundColor:'black', cursor:'pointer', color:'white' }} className='ml-3 rounded' onClick = {e => setShowConfirmPassword(!showConfirmPassword)} >
                            {showConfirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </Button>
                    </div>
                </Form.Group>
                <Form.Group>
                    <div className='mb-3 d-flex align-items-center'>
                        <Checkbox value={terms} onClick={e => setTerms(!terms)} color='secondary' />
                        <div>Agree to the<span>{" "}<Link to="/terms" id='terms' style={{ cursor:'pointer', color:'#0a84ae' }}>terms of service</Link></span></div>
                    </div>     
                </Form.Group>
                <Button variant='contained' type="submit" style={{ color:'white', backgroundColor:'black' }} className='border-0 w-100 py-3 mx-auto'>
                    Register
                </Button>
            </Form>   
        </div>
    )
}

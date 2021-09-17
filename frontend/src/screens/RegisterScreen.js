import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Message } from '../components/Message'
import { Loader } from '../components/Loader'
import { userRegisterAction } from '../actions/authActions'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

export const RegisterScreen = ({ location, history }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [terms, setTerms] = useState(false)

    const [userError, setUserError] = useState("")
    const [open, setOpen] = useState(false)

    const dispatch = useDispatch()
    
    const userRegister = useSelector(state => state.userRegister)
    const { loading, error, userInfo } = userRegister
    
    const redirect = location.search ? location.search.split('=')[1] : '/'

    const emailSanitation = () => {
        return /[@]/g.test(email) && /[.]/g.test(email)
    }

    const numberSanitation = () => {
        if(!/[^a-z]/g.test(number) || !/[^A-Z]/g.test(number)){
            setUserError("Number cannot have alphabets")
            setOpen(true)
        }
        if(!/[^~!@#$%^&*]/g.test(number)){
            setUserError("Number cannot have special characters")
            setOpen(true)
        }
        return /[^a-z]/g.test(number) && /[^A-Z]/g.test(number) && /[0-9]/g.test(number) && /[^~!@#$%^&*]/g.test(number) && number.length===10                
    }
    
    const passwordSanitation = () => {
        if(!/[a-z]/g.test(password)){
            setUserError("Password must have atleast one lower case alphabet")
            setOpen(true)
        }
        if(!/[A-Z]/g.test(password)){
            setUserError("Password must have atleast one upper case alphabet")
            setOpen(true)
        }
        if(!/[!@#$%^&*]/g.test(password)){
            setUserError("Password must have atleast one special character")
            setOpen(true)
        }
        if(!/[0-9]/g.test(password)){
            setUserError("Password must have atleast one number")
            setOpen(true)
        }
        if(password.length<8){
            setUserError("Password must be atleast 8 characters")
            setOpen(true)    
        }
        if(password!==confirmPassword){
            setUserError("Passwords do not match")
            setOpen(true)    
        }
        return /[a-z]/g.test(password) && /[A-Z]/g.test(password) && /[0-9]/g.test(password) && /[~!@#$%^&*]/g.test(password) && password.length>8 && password===confirmPassword
    }
    
    const checkSanitation = () => {
        if(!terms){
            setUserError("Please check the box")
            setOpen(true)  
            return false          
        }
        return true
    }

    const registerHandler = (e) => {
        e.preventDefault()
        if(emailSanitation() && numberSanitation() && passwordSanitation() && checkSanitation()){
            dispatch(userRegisterAction(name, email, number, password))
        }
        else{

        }
    }

    if(open){
        setTimeout(()=>{
            setOpen(false)
            setUserError("")
        },4000)
    }

    useEffect(()=>{
        if(userInfo){
            history.push(redirect)
        }
    },[history, userInfo, redirect])

    return (
        <div>
            {loading && <Loader/>}
            {open && <Message variant='error' message={userError} />}
            {error && <Message variant='error' message={error} />}
            <Form onSubmit={registerHandler} className='p-4 rounded mx-auto form_component'>
                <div className='mb-4 w-100 pl-1 py-1 form_header'>Sign Up</div>
                <Form.Group className='mb-3' >
                    <TextField autoFocus label="Name" required variant="outlined" value={name} onChange={e => setName(e.target.value)} type="text" />
                </Form.Group>
                <Form.Group className='mb-3' >
                    <TextField label="Email" required inputMode='email' type='email' variant="outlined" value={email} onChange={e => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className='mb-3' >
                    <TextField label="Phone" required inputMode='tel' inputProps={{maxLength:10, minLength:10}} type='tel' variant="outlined" value={number} onChange={e => setNumber(e.target.value)} />
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
                <div className='mx-auto text-center mt-3'>Already a member? <Link to="/login" style={{ textDecoration:"underline", cursor:'pointer', color:'black' }}>Sign in</Link> instead</div>
            </Form>   
        </div>
    )
}

import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Message } from '../components/Message'
import { Loader } from '../components/Loader'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { userLoginAction } from '../actions/authActions'

export const LoginScreen = ({ location, history }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const [userError, setUserError] = useState("")
    const [open, setOpen] = useState(false)

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo } = userLogin

    useEffect(()=>{
        if(userInfo){
            history.push(redirect)
        }
    },[history, userInfo, redirect])

    if(open){
        setTimeout(()=>{
            setOpen(false)
            setUserError("")
        },4000)
    }

    const loginHandler = (e) => {
        e.preventDefault()
        dispatch(userLoginAction(email,password))
    }

    return (
        <div>
            {loading && <Loader/>}
            {open && <Message variant='error' message={userError} />}
            {error && <Message message={error} variant='error' />}
            <Form onSubmit={loginHandler} className='p-4 rounded mx-auto form_component'>
                <div className='mb-4 w-100 pl-1 pt-1 form_header'>Sign In</div>
                <div className='mb-4'>Sign in to continue to MyReview dashboard!!</div> 
                <Form.Group className='mb-3' >
                    <TextField autoFocus label="Email" required inputMode='email' type='email' variant="outlined" value={email} onChange={e => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className='mb-3' >
                    <div className='d-flex'>
                        <TextField label="Password" required variant="outlined" value={password} onChange={e => setPassword(e.target.value)} type={showPassword ? "text" : "password"} />
                        <Button variant='contained' style={{ backgroundColor:'black', cursor:'pointer', color:'white' }} className='ml-3 rounded' onClick = {e => setShowPassword(!showPassword)} >
                            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </Button>
                    </div>
                </Form.Group>
                <div className='mt-3 mb-4 pl-1'>
                    <Link to='/forgot' style={{color:'black', textDecoration:'underline', }}>
                        Forgot Password
                    </Link>
                </div> 
                <Button variant='contained' type="submit" style={{ color:'white', backgroundColor:'black' }} className='border-0 w-100 py-3 mx-auto'>
                    Sign in
                </Button>
                <div className='mx-auto text-center mt-3'>New to MyReview? <Link to="/register" style={{ textDecoration:"underline", cursor:'pointer', color:'black' }}>Sign Up</Link> now</div>
            </Form>
        </div>
    )
}

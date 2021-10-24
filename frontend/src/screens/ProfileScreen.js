import React, { useEffect, useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileAction, updateUserProfile } from '../actions/profileActions'
import { Loader } from '../components/Loader'
import { Message } from '../components/Message'
import { Tooltip, Button, TextField, Avatar } from '@material-ui/core'
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import axios from 'axios'

export const ProfileScreen = ({ history }) => {
    
    const userProfile = useSelector(state => state.userProfile)
    const { loading, error, user } = userProfile

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userUpdate = useSelector(state => state.userUpdate)
    const { loading:loadingUpdate, success, error:errorUpdate } = userUpdate

    const dispatch = useDispatch()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")

    const [imageUpload, setImageUpload] = useState(false)
    const [imageError, setImageError] = useState(false)

    const updateProfileHandler = (e) => {
        e.preventDefault()
        dispatch(updateUserProfile({ _id:userInfo._id, name:name, email:email, number:number }))
    }

    const uploadProfileHandler = async (e) => {
        e.preventDefault()
        const file = e.target.files[0]
        if(['png','jpg','jpeg'].includes(file.name.split('.')[1])){
            const formData = new FormData()
            formData.append('application',file)
            try{
                const config = {
                    headers:{
                        'Content-type':'multipart/form-data',
                        'Authorization': `Bearer ${userInfo.token}`
                    }
                }
                const { data } = await axios.post('/api/upload', formData, config)
                if(data){
                    setImageUpload(data.success)
                }
            }
            catch(error){
                console.log(error)
            }
        }
        else{
            setImageError(true)
        }
    }

    if(imageError){
        setTimeout(()=>{
            setImageError(false)
        },2000)
    }

    useEffect(()=>{
        if(!userInfo){
            history.push('/')
        }
        else{
            dispatch(getProfileAction())
            setName(userInfo.name)
            setEmail(userInfo.email)
            setNumber(userInfo.number)
        }
    },[userInfo, history, dispatch, imageUpload])

    return (
        <div>
            <Container className='mx-auto mt-5' style={{ paddingTop:'2rem' }}>
                {success && <Message message="Profile updated successfully" variant='success' />}
                {loading || loadingUpdate
                ? <Loader/> 
                : error || imageError || errorUpdate
                ? <Message message={error || errorUpdate || "Invalid file type"} variant='error' />
                : !imageError &&
                <div>
                    <div className={`d-flex mx-auto`} style={{ alignItems:'baseline', width:'max-content' }}>
                        <div>
                            <Avatar className='border-0' src={user.profilePic && `/uploads/profilePics/${user.profilePic}`} style={{ color:'white', backgroundColor:'black', width:'10rem', height:'10rem', boxShadow:'1px 2px 5px 0px gray' }}/>
                            <Tooltip title="Change Picture" placement="right">
                                <label style={{ cursor:'pointer', width:'max-content', marginLeft:'-2.8rem' }}>
                                    <input type="file" onChange={uploadProfileHandler} />
                                    <CameraAltIcon style={{ padding:'0.2rem', cursor:'pointer', color:'#1c60c7', fontSize:'2rem', borderRadius:'50%', backgroundColor:'white', left:'7rem', position:'relative', top:'-2.4rem', boxShadow:'1px 2px 5px 0px gray' }}/>
                                </label>
                            </Tooltip>
                        </div>
                    </div>
                    <Form onSubmit={updateProfileHandler} className='mx-auto profile_form_component' style={{ paddingBottom:'2rem' }}>
                        <Form.Group className='my-3'>
                            <TextField label="ID" variant="outlined" value={user._id} disabled={true} readOnly />
                        </Form.Group>
                        <Form.Group className='my-3'>
                            <TextField label="Name" variant="outlined" onChange={e => setName(e.target.value)} value={name} />
                        </Form.Group>
                        <Form.Group className='my-3'>
                            <TextField label="Email" variant="outlined" onChange={e => setEmail(e.target.value)} value={email} type="email" inputmode="email" />
                        </Form.Group>
                        <Form.Group className='my-3'>
                            <TextField label="Number" variant="outlined" onChange={e => setNumber(e.target.value)} value={number} inputmode="tel" />
                        </Form.Group>
                        <Form.Group className='my-3'>
                            <TextField label="Points" variant="outlined" value={user.points} disabled={true} readOnly />
                        </Form.Group>
                        <Form.Group className='my-3'>
                            <TextField label="Reviews" variant="outlined" value={user.reviews && user.reviews.length} disabled={true} readOnly />
                        </Form.Group>
                        <Form.Group className='my-3'>
                            <Button type="submit" variant='contained' className='py-3' style={{ color:'white', backgroundColor:'black', width:'100%' }}>Update</Button>
                        </Form.Group>
                    </Form>
                </div>
                }
            </Container>
        </div>
    )
}

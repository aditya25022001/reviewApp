import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Message } from '../components/Message'
import { Loader } from '../components/Loader'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { addMovieAction } from '../actions/movieActions'

export const AddMovieScreen = ({ history }) => {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [genre, setGenre] = useState("")
    const [description, setDescription] = useState("")
    const [cast, setCast] = useState("")
    const [availableOn, setAvailableOn] = useState("")
    const [releaseDate, setReleaseDate] = useState("")
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const userAddMovie = useSelector(state => state.userAddMovie)
    const { loading, error, success, movie } = userAddMovie
    useEffect(() => {
        if(!userInfo){
            history.push('/')
        }
        if(success){
            history.push('/movies')
        }
    },[history, userInfo, success])
    const addMovieHandler = (e) => {
        e.preventDefault()
        dispatch(addMovieAction(name, image, description, genre.split(','), cast.split(','),releaseDate, availableOn))
    }
    return (
        <div style={{ paddingBottom:'5rem' }}>
            {loading && <Loader/>}
            {error && <Message variant='error' message={error} />}
            {success && <Message variant='success' message={movie.message} />}
            <Form onSubmit={addMovieHandler} style={{ marginBottom:'2rem' }} className='p-4 rounded mx-auto form_component'>
                <div className='mb-4 w-100 pl-1 py-1 form_header'>Add Movie</div>
                <Form.Group className='mb-3' >
                    <TextField autoFocus label="Movie Name" required variant="outlined" value={name} onChange={e => setName(e.target.value)} type="text" />
                </Form.Group>
                <Form.Group className='mb-3' >
                    <TextField label="Image URL" placeholder="online link to image" required variant="outlined" value={image} onChange={e => setImage(e.target.value)} />
                </Form.Group>
                <Form.Group className='mb-3' >
                    <TextField multiline rows={4} label="Description" required variant="outlined" value={description} onChange={e => setDescription(e.target.value)} />
                </Form.Group>
                <Form.Group className='mb-3' >
                    <TextField label="Genre" required placeholder="comma separated values" variant="outlined" value={genre} onChange={e => setGenre(e.target.value)} type="text" />
                </Form.Group>
                <Form.Group className='mb-3' >
                    <TextField label="Cast" required placeholder="comma separated values" variant="outlined" value={cast} onChange={e => setCast(e.target.value)} />
                </Form.Group>
                <Form.Group className='mb-3' >
                    <TextField label="Release Date" required variant="outlined" value={releaseDate} onChange={e => setReleaseDate(e.target.value)} />
                </Form.Group>
                <Form.Group className='mb-3' >
                    <TextField label="Available on" required variant="outlined" value={availableOn} onChange={e => setAvailableOn(e.target.value)} />
                </Form.Group>
                <Button variant='contained' type="submit" style={{ color:'white', backgroundColor:'black' }} className='border-0 w-100 py-3 mx-auto'>
                    Add Movie
                </Button>
            </Form> 
        </div>
    )
}

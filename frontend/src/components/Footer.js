import React, { useEffect } from 'react'
import { Navbar } from 'react-bootstrap'
import FavoriteIcon from '@material-ui/icons/Favorite';
import Aos from 'aos'
import 'aos/dist/aos.css'

export const Footer = () => {
    useEffect(()=>{
        Aos.init({  })
    },[])
    return (
        <Navbar data-aos='fade-up' expand="lg" bg="light" variant="light" fixed='bottom'>
            <div className='mx-auto' style={{ fontSize:'0.8rem', fontWeight:'bold' }}><FavoriteIcon style={{ color:'red', fontSize:'1rem' }}/>CS(A) IET'23</div>
        </Navbar>
    )
}

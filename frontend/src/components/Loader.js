import React from 'react'
import GradeRoundedIcon from '@material-ui/icons/GradeRounded';
// import { Image } from 'react-bootstrap'

export const Loader = () => {
    return (
        <div style={{ width:'max-content', paddingTop:'15rem' }} className='mx-auto loader'>
            {/* <Image src='./logo512.png' fluid width={100} height={100} /> */}
            <GradeRoundedIcon style={{ color:'gold', fontSize:'7rem' }} />
        </div>
    )
}

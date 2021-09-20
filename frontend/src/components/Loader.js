import React from 'react'
import GradeRoundedIcon from '@material-ui/icons/GradeRounded';

export const Loader = () => {
    return (
        <div style={{ width:'max-content', paddingTop:'15rem', height:'100vh' }} className='mx-auto loader'>
            <GradeRoundedIcon style={{ color:'gold', fontSize:'7rem' }} />
        </div>
    )
}

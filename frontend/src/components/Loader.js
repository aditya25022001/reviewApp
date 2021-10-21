import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';

export const Loader = () => {
    return (
        <div className='mx-auto mt-5 pt-5' style={{ width:'max-content' }}>
            <CircularProgress style={{ color:'black' }} size={50} thickness={2} />
        </div>
        )
}

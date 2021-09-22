import React from 'react'
import { Entity } from '../components/Entity'
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import TwoWheelerIcon from '@material-ui/icons/TwoWheeler';
import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import PlaceIcon from '@material-ui/icons/Place';
import BusinessIcon from '@material-ui/icons/Business';
import AndroidIcon from '@material-ui/icons/Android';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LanguageIcon from '@material-ui/icons/Language';
import AddIcon from '@material-ui/icons/Add';

export const HomeScreen = () => {
    const entities = [
        {
            name:'Movies and Shows',
            image:<MovieCreationIcon/>,
            to:'/movies'
        }, 
        {
            name:'Automobiles', 
            image:<TwoWheelerIcon/>,
            to:'/automobiles'
        
        }, 
        {
            name:'Restaurants & Cafe', 
            image:<FreeBreakfastIcon/>,
            to:'/restaurants'
        },
        {
            name:'Devices', 
            image:<DevicesOtherIcon/>,
            to:'/devices'
        },
        {
            name:'Places',
            image:<PlaceIcon/>,
            to:'/places'
        },
        {
            name:'Institutions',
            image:<BusinessIcon/>,
            to:'/institutions'
        },
        {
            name:'Applications',
            image:<AndroidIcon/>,
            to:'/applications'
        },
        {
            name:'Youtube Channels',
            image:<YouTubeIcon/>,
            to:'/ytchannels'
        },
        {
            name:'Websites',
            image:<LanguageIcon/>,
            to:'/websites'
        }
    ]

    return (
        <div style={{ padding:'5rem 0rem 3rem 0rem' }} className='mx-auto'>
            <div style={{ display:'flex', flexWrap:'wrap' }}>
                {entities.map(each => (
                    <Entity key={each} name={each.name} image={each.image} to={each.to} />
                    ))}
                <Entity name="Add Entity" image={<AddIcon/>} to="/add-entity" />
            </div>
        </div>
    )
}

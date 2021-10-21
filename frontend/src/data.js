import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import TwoWheelerIcon from '@material-ui/icons/TwoWheeler';
import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import PlaceIcon from '@material-ui/icons/Place';
import AndroidIcon from '@material-ui/icons/Android';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LanguageIcon from '@material-ui/icons/Language';
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
        to:'/cafes'
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
        name:'Applications',
        image:<AndroidIcon/>,
        to:'/apps'
    },
    {
        name:'Youtube Channels',
        image:<YouTubeIcon/>,
        to:'/channels'
    },
    {
        name:'Websites',
        image:<LanguageIcon/>,
        to:'/websites'
    }
]

export { entities }
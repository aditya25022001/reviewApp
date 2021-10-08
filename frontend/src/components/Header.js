import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import GitHubIcon from '@material-ui/icons/GitHub';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import Tooltip from '@material-ui/core/Tooltip'

export const Header = () => {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const location = useLocation().pathname
    return (
        <Navbar fixed='top' className='border-bottom' collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="/" style={{ fontSize:'1.4rem' }}>Review</Navbar.Brand>
        <Navbar.Toggle className='border-0' aria-controls="responsive-navbar-nav">
            <span className='border-0'>
                <MenuOpenIcon style={{ color:'black', fontSize:'1.6rem' }}/>
            </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="/" style={{ fontSize:'1.05rem' }} className={typeof window!==undefined && window.innerWidth>990 && 'mx-3'} id={location==='/' ? "active" : ""}>Home</Nav.Link>
                <Nav.Link href="/about" style={{ fontSize:'1.05rem' }} className={typeof window!==undefined && window.innerWidth>990 && 'mx-3'} id={location==='/about' ? "active" : ""}>About</Nav.Link>
                <Nav.Link href="/features" style={{ fontSize:'1.05rem' }} className={typeof window!==undefined && window.innerWidth>990 && 'mx-3'} id={location==='/features' ? "active" : ""}>Features</Nav.Link>
                <Nav.Link href="/contact" style={{ fontSize:'1.05rem' }} className={typeof window!==undefined && window.innerWidth>990 && 'mx-3'} id={location==='/contact' ? "active" : ""}>Contact</Nav.Link>
                {userInfo 
                ? <Nav.Link href="/profile" style={{ fontSize:'1.05rem' }} className={typeof window!==undefined && window.innerWidth>990 && 'mx-3'} id={location==='/profile' ? "active" : ""}>Profile</Nav.Link>
                : <Nav.Link href="/register" style={{ fontSize:'1.05rem' }} className={typeof window!==undefined && window.innerWidth>990 && 'mx-3'} id={(location==='/register' || location==='/login') ? "active" : ""}>Sign Up</Nav.Link>
                }
                <Tooltip title="view source" placement="bottom">
                    <Nav.Link href='https://github.com/aditya25022001/reviewApp' target="_blank" rel="noopener noreferrer">
                        <GitHubIcon style={{ fontSize:'1.5rem', alignSelf: 'center' }}/>
                    </Nav.Link>
                </Tooltip>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

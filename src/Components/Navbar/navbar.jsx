// import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Container from 'react-bootstrap/Container';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './nav.css'
import { useState } from 'react';
function NavBar() {

    const [sideMenu, setSideMenu] = useState('navigations')

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));







    return <>
        <div className='main-nav-box'>
            <Container>
                <div className='navigation-container'>
                    <div className='brand-name'>
                        <h4><span>e</span>Mart</h4>
                    </div>
                    <div className={`web-only navigations`}>
                        <ul>
                            <div className="close-nav">
                                <CloseIcon className='close' onClick={() => {
                                    setSideMenu('')
                                }}
                                />
                            </div>
                            <li>home</li>
                            <li>Products</li>
                            <li>about</li>
                            <li>contact</li>
                        </ul>
                    </div>
                    <div>
                        <PersonIcon className='icon' />
                        <IconButton aria-label="cart" className='icon'>
                            <StyledBadge badgeContent={4} color="secondary">
                                <ShoppingCartIcon />
                            </StyledBadge>
                        </IconButton>

                        <MenuIcon className='icon menu-icon' onClick={() => {
                            setSideMenu('navigationShow')
                        }} />

                    </div>
                </div>
            </Container>

        </div>
        <div className={`${sideMenu} navigations`}>
            <ul>
                <div className="close-nav">
                    <CloseIcon className='close' onClick={() => {
                        setSideMenu('')
                    }}
                    />
                </div>
                <li>home</li>
                <li>products</li>
                <li>about</li>
                <li>contact</li>
            </ul>
        </div>
    </>
}
export default NavBar;
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
import { useState, useContext, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { AppContext } from '../../Context/context';
function NavBar() {
    let { cart, cartlength } = useContext(AppContext)
    let [searchParams] = useSearchParams();


    const [sideMenu, setSideMenu] = useState('navigations')
    const navigate = useNavigate()
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));


    useEffect(() => {
        console.log(cart)
        console.log(cartlength)
    }, [])

    const GoToHome = () => {
        navigate('/')
    }

    return <>
        <div className='main-nav-box'>
            <Container>
                <div className='navigation-container'>
                    <div className='brand-name'>
                        <h4 onClick={GoToHome}><span>e</span>Mart</h4>
                    </div>
                    <div className={`web-only navigations`}>
                        <ul>
                            <div className="close-nav">
                                <CloseIcon className='close' onClick={() => {
                                    setSideMenu('')
                                }}
                                />
                            </div>
                            <li onClick={() => {
                                navigate('/')
                            }}>home</li>
                            <li>Products</li>
                            <li onClick={() => {
                                navigate('/about')
                            }}>about</li>
                            <li onClick={() => {
                                navigate('/contact')
                            }}>contact</li>
                        </ul>
                    </div>
                    <div>
                        <PersonIcon className='icon' />
                        <div style={{ display: "inline-block", cursor: "pointer" }} onClick={() => {
                            if (window.location.pathname == '/cart') {
                                window.history.back()
                            } else {
                                navigate('/cart')

                            }
                        }}>
                            <IconButton aria-label="cart" className='icon' >
                                <StyledBadge badgeContent={cartlength} color="secondary">
                                    <ShoppingCartIcon />
                                </StyledBadge>
                            </IconButton>
                        </div>

                        <MenuIcon className='icon menu-icon' onClick={() => {
                            setSideMenu('navigationShow')
                        }} />

                    </div>
                </div>
            </Container>

        </div>
        <div className={`${sideMenu} navigations sideNavigation`} onClick={() => {
            setSideMenu('')
        }}>
            <ul>
                <div className="close-nav">
                    <CloseIcon className='close' onClick={() => {
                        setSideMenu('')
                    }}
                    />
                </div>
                <li onClick={() => {
                    navigate('/')
                }}>home</li>
                <li>Products</li>
                <li onClick={() => {
                    navigate('/about')
                }}>about</li>
                <li onClick={() => {
                    navigate('/contact')
                }}>contact</li>

                <div className='close-nav navigation-social'>
                    <i class="fa-brands fa-facebook navigation-social-icon"></i>
                    <i class="fa-brands fa-instagram navigation-social-icon"></i>
                    <i class="fa-brands fa-twitter navigation-social-icon"></i>
                </div>
            </ul>
        </div>
    </>
}
export default NavBar;
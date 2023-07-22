import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import GitHubIcon from '@mui/icons-material/GitHub';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Cart from '../Cart/Cart';
import './Navbar.scss'

export default function Navbar() {

    const scrollUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const products = useSelector((state) => state.cart.products)

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="fixed" style={{ background: 'white', color: 'black' }}>
            <Container maxWidth="lg">
                <Toolbar style={{ minHeight: '50px' }}>
                    <Typography
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >
                        La Sienne
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="black"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >

                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography className="nav-link">
                                    <Link to="/products/1" style={{ textDecoration: 'none', color: 'black' }} onClick={scrollUp}>
                                        Clothes
                                    </Link>
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography className="nav-link">
                                    <Link to="/products/2" style={{ textDecoration: 'none', color: 'black' }} onClick={scrollUp}>
                                        Dresses
                                    </Link>
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography className="nav-link">
                                    <Link to="/products/3" style={{ textDecoration: 'none', color: 'black' }} onClick={scrollUp}>
                                    Shoes
                                    </Link>
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu} style={{ margin: '5px 0 5px 0' }}>
                                <Typography className="nav-link">
                                    <Link to="https://github.com/fifolio/Lasienne" target="_blank" className="github" style={{ textDecoration: 'none', color: 'white', backgroundColor: 'black', padding: '10px', borderRadius: '5px' }}>
                                        Github
                                    </Link>
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </Box>

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >
                        La Sienne
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} className="main-nav-links">
                        <Button sx={{ color: 'black', display: 'block' }} className="nav-link" onClick={scrollUp}>
                            <Link to="/products/1" style={{ textDecoration: 'none', color: 'black' }}>
                                Clothes
                            </Link>
                        </Button>
                        <Button sx={{ color: 'black', display: 'block' }} className="nav-link">
                            <Link to="/products/2" style={{ textDecoration: 'none', color: 'black' }} onClick={scrollUp}>
                                Dresses
                            </Link>
                        </Button>
                        <Button sx={{ color: 'black', display: 'block' }} className="nav-link">
                            <Link to="/products/3" style={{ textDecoration: 'none', color: 'black' }} onClick={scrollUp}>
                            Shoes
                            </Link>
                        </Button>
                        <Button sx={{ color: 'black', display: 'block' }}>
                            <Link to="https://github.com/fifolio/Lasienne" target="_blank" className="github" style={{ textDecoration: 'none', color: 'black' }}>
                                <GitHubIcon style={{ width: '19px', marginRight: '5px', marginTop: '-3px' }} />
                                Github
                            </Link>
                        </Button>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open Cart">
                            <IconButton onClick={handleOpenUserMenu}>
                                <div className="icons">
                                    <ShoppingCartOutlinedIcon />
                                </div>
                            </IconButton>

                        </Tooltip>
                        <Menu
                        className="menuItemCart"
                            style={{
                                marginTop: '40px',

                            }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >

                            <MenuItem sx={{
                                padding: 0
                            }}>

                                {products.length ? <Cart /> : <span className="cartEmpty">Cart empty</span>}
                            </MenuItem>


                        </Menu>
                        {products.length > 0 && <span style={{
                            backgroundColor: '#2879fe',
                            padding: '2px 8px',
                            fontWeight: 'bold',
                            color: 'white',
                            borderRadius: '100%',
                            position: 'relative',
                            left: '-15px',
                            top: '-5px',
                            fontSize: '13px'
                        }}>{products.length}</span>}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
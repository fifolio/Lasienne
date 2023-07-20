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

import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { useState } from 'react';
import './Navbar.scss'

export default function Navbar() {
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
                <Toolbar disableGutters>
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
                        CRYSTALS
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
                                <Typography textAlign="center">something</Typography>
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
                        CRYSTALS
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} className="main-nav-links">
                        <Button onClick={handleCloseNavMenu} sx={{ color: 'black', display: 'block' }} className="nav-link">CLOTHING</Button>
                        <Button onClick={handleCloseNavMenu} sx={{ color: 'black', display: 'block' }} className="nav-link">TOPS</Button>
                        <Button onClick={handleCloseNavMenu} sx={{ color: 'black', display: 'block' }} className="nav-link">DRESSES</Button>
                        <Button onClick={handleCloseNavMenu} sx={{ color: 'black', display: 'block' }} className="nav-link">BEACHWEAR</Button>
                        <Button onClick={handleCloseNavMenu} sx={{ color: 'black', display: 'block' }} className="nav-link">SPORTS</Button>
                        <Button onClick={handleCloseNavMenu} sx={{ color: 'black', display: 'block' }} className="nav-link">OUTDOORS SHOES</Button>
                        <Button onClick={handleCloseNavMenu} sx={{ color: 'black', display: 'block' }} className="nav-link">ACCESSORIES</Button>
                    </Box>


                    <Box sx={{ flexGrow: 0 }}>
                        <SearchIcon />
                        <PersonOutlineIcon />
                        <FavoriteBorderIcon />
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu}>
                                <div className="icons">
                                    <div>
                                        <ShoppingCartOutlinedIcon />
                                    </div>
                                </div>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
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

                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">something</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}



// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import SearchIcon from '@mui/icons-material/Search';
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import Cart from '../Cart/Cart';
// import "./Navbar.scss";
// import { useSelector } from 'react-redux';

// export default function Navbar() {

//     const products = useSelector((state) => state.cart.products)

//     const [open, setOpen] = useState(false)

//     return (
//         <div className="navbar">
//             <div className="wrapper">
//                 <div className="left">
//                     <div className="item">
//                         <img src="/img/en.png" />
//                         <KeyboardArrowDownIcon />
//                     </div>
//                     <div className="item">
//                         <span>USD</span>
//                         <KeyboardArrowDownIcon />
//                     </div>
//                     <div className="item">
//                         <Link className="link" to="/products/1">Women</Link>
//                     </div>
//                     <div className="item">
//                         <Link className="link" to="/products/2">Men</Link>
//                     </div>
//                     <div className="item">
//                         <Link className="link" to="/products/3">Children</Link>
//                     </div>
//                 </div>
//                 <div className="center">
//                     <Link className="link" to="/">
//                         <img src="/icon.png" width="25px" style={{marginRight: '6px', marginBottom: '-5px'}} />
//                         CRYSTALS
//                         </Link>
//                 </div>
//                 <div className="right">
//                       <div className="item">
//                         <Link className="link" to="https://github.com/fifolio" target='_blank'>Github</Link>
//                     </div>
//                     <div className="item">
//                         <Link className="link" to="/">About</Link>
//                     </div>
//                     <div className="item">
//                         <Link className="link" to="/">Contact</Link>
//                     </div>
//                     <div className="item">
//                         <Link className="link" to="/">Stores</Link>
//                     </div>
//                     <div className="icons">
//                         <SearchIcon />
//                         <PersonOutlineIcon />
//                         <FavoriteBorderIcon />
//                         <div className="cartIcon" onClick={() => setOpen(!open)}>
//                         <ShoppingCartOutlinedIcon />
//                         <span>{products.length}</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {open && <Cart />}
//         </div>
//     )
// }
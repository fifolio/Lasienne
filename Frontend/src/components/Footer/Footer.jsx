/* eslint-disable react/jsx-no-target-blank */
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom';
import "./Footer.scss";

export default function Footer() {


    return (

        <Box sx={{ flexGrow: 1 }} className="footer">
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} className="top">
                <Grid item className="item">
                    <h1>Categories</h1>
                    <Link to="/products/1" style={{textDecoration: 'none', color: '#555'}}>Clothing</Link>
                    <Link to="/products/2" style={{textDecoration: 'none', color: '#555'}}>Dresses</Link>
                    <Link to="/products/3" style={{textDecoration: 'none', color: '#555'}}>Sports</Link>
                    <Link to="/products/4" style={{textDecoration: 'none', color: '#555'}}>Accessories</Link>
                </Grid>
                <Grid item className="item">
                    <h1>More</h1>
                    <Link to="https://github.com/fifolio/Crystals" target="_blank" style={{textDecoration: 'none', color: '#555'}}>Github</Link>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </Grid>
                <Grid item className="item">
                    <h1>About</h1>
                    Our journey began with a vision to create a space where women could find clothing that not only reflects their unique style but also complements their inner essence.
                </Grid>
                <Grid item className="item">
                    <span className="logo">
                        <img src="/icon.png" width="20px" style={{ marginRight: '6px', marginBottom: '-3px' }} />
                        Crystals
                    </span>
                    <span className="copyright">&copy; {new Date().getFullYear()} <a href="https://github.com/fifolio" target="_blank">fifolio</a></span>
                    <div style={{marginTop: '30px'}}>
                        <img src="https://www.businesstoday.com.my/wp-content/uploads/2022/08/VISA-MASTER-01.png" width="100px" />
                    </div>
                </Grid>
            </Grid>

        </Box>
    )
}


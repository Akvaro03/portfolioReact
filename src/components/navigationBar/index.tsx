import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from '@mui/material';



const pages = ['Home', 'Skills', 'Proyects'];

const icons = [<GitHubIcon />, <LinkedInIcon />]

function NavigationBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [activeLink, setActiveLink] = React.useState("")


    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleClickLink = (pageActived: string) => {
        handleCloseNavMenu()
        setActiveLink(pageActived)
    }
    return (
        <AppBar position="static" sx={{ background: "none", boxShadow: "none" }}>
            <Container sx={{ paddingTop: "10px", paddingBottom: "10px" }} maxWidth="lg">
                <Toolbar disableGutters>
                    <GitHubIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        ALVARO BALLARINI
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
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
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>


                    <GitHubIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        ALVARO BALLARINI
                    </Typography>
                    <Box sx={{ flexGrow: 1, justifyContent: "end", gap: "40px", display: { xs: 'none', md: 'flex' } }}>
                        <Box sx={{ display: "flex", gap: "50px" }}>
                            <PagesNavigationHandle activeLink={activeLink} handleClickLink={handleClickLink} pages={pages} />
                        </Box>
                        <Box sx={{ display: "flex", gap: "30px" }}>
                            {icons.map((icono, key) => (
                                <IconButton
                                    size="large"
                                    key={key}
                                    aria-label="show more"
                                    aria-haspopup="true"
                                    color="inherit"
                                >
                                    {icono}
                                </IconButton>
                            ))}
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}


const PagesNavigationHandle = ({ pages, handleClickLink, activeLink }: { pages: string[], handleClickLink: (pageActived: string) => void, activeLink: string }) => (
    pages.map((page: string) => (
        <MenuItem key={page} onClick={() => handleClickLink(page)}>
            <Link sx={{ color: activeLink === page ? "red" : 'white', transition: ".8s" }} underline='none' color="white" href={"#" + page} >{page}</Link>
        </MenuItem>
    ))
)

export default NavigationBar;
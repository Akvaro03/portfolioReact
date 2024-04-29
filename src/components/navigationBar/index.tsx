import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';

import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import Style from "./navigationBar.module.css"

const pages = ['Home', "Projects", 'Skills', 'Contact'];

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
    const handleClickPage = (pageActivated: string) => {
        handleCloseNavMenu()
        setActiveLink(pageActivated)
    }
    return (
        <AppBar position="fixed" sx={{ background: "none", boxShadow: "none" }}>
            <Container sx={{ paddingTop: "10px", paddingBottom: "10px" }} maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Menu responsive and Links */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} component={"section"}>
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
                    {/* Tittle and Icon */}
                    <CodeIcon sx={{ display: 'flex', mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#"
                        sx={{
                            mr: 2,
                            display: 'flex',
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

                    {/* Links */}
                    <Box sx={{ flexGrow: 1, justifyContent: "end", gap: "40px", display: { xs: 'none', md: 'flex' } }} component={"section"}>
                        <Box sx={{ display: "flex", gap: "50px" }}>
                            <PagesNavigationHandle activeLink={activeLink} handleClickPage={handleClickPage} pages={pages} />
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


const PagesNavigationHandle = ({ pages, handleClickPage, activeLink }: { pages: string[], handleClickPage: (pageActived: string) => void, activeLink: string }) => (
    pages.map((page: string) => (
        <MenuItem key={page} >
            <Link
                sx={{
                    color: activeLink === page ? "white" : '#9CA3AF',
                    transition: ".8s",
                    fontWeight: "500",
                    width: "100%",
                    height: "100%"
                }}
                onClick={() => handleClickPage(page)}
                underline='none'
                className={Style.linkHeader}
                color="white"
                href={"#" + page} >
                {page.toUpperCase()}
            </Link>
        </MenuItem >
    ))
)

export default NavigationBar;
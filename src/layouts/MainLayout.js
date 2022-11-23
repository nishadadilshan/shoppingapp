import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import { Outlet } from '@mui/icons-material';
// import { Outlet, useNavigate } from "react-router-dom";
import HomePage from '../components/home/home'
import Footer from '../components/footer/footer'


const BasicPopover = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div style={{ marginLeft: 5 }}>
            <Typography aria-describedby={id} variant="contained" onMouseOver={handleClick} >
                Women
            </Typography>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
            </Popover>
        </div>
    );
}
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const NavigationBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: "#7f8c8d" }}>
                <div>
                    <Toolbar>
                        {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        { <MenuIcon /> }
                    </IconButton> */}
                        <Typography
                            variant="h5"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                            style={{ color: "black" }}
                        >
                            Bloomingdale's
                        </Typography>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        {/* <Divider component="li" variant="inset" /> */}

                    </Toolbar>
                </div>
                <div>
                    <BasicPopover />
                </div>

            </AppBar>
        </Box>
    );
}

export default function Mainlayout() {
    return (
        <>
            <NavigationBar />
            <Box>
                <HomePage />
            </Box>
            <Divider />
            <Box>
                <Footer />
            </Box>
        </>
    );
}
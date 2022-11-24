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


const MouseOverPopover = (props) => {
    let {
        Title,
        content
    } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <div>
            <Typography
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                style={{ color: "black", fontFamily: "inherit", }}
            >
                {Title}
            </Typography>
            <Popover
                id="mouse-over-popover"
                sx={{
                    pointerEvents: 'none',
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Typography sx={{ p: 1 }}>{content}</Typography>
            </Popover>
        </div>
    );
}

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.25),
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
            <AppBar position="static" style={{ backgroundColor: "white" }}>
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
                            style={{ color: "black", fontWeight: 'bold' }}
                        >
                            BLOOMINGDALE'S
                        </Typography>
                        <Button variant="contained" style={{ color: "white", backgroundColor: "#2c3e50" }}>Log In</Button>
                        <Search style={{ color: "black" }}>

                            <SearchIconWrapper>
                                <SearchIcon style={{ color: "black" }} />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        {/* <Divider component="li" variant="inset" /> */}

                    </Toolbar>
                </div>
                <div style={{ marginLeft: 25, marginRight: 25, display: "flex", justifyContent: 'space-between' }}>
                    <MouseOverPopover
                        Title={"WOMEN"}
                        content="list of women"
                    />
                    <MouseOverPopover
                        Title={"SHOES"}
                        content="list of women"
                    />
                    <MouseOverPopover
                        Title={"HANDBAGS"}
                        content="list of women"
                    />
                    <MouseOverPopover
                        Title={"JEWELRY & ACCESSORIES"}
                        content="lorum ipesm"
                    />
                    <MouseOverPopover
                        Title={"MEN"}
                        content="list of women"
                    />
                    <MouseOverPopover
                        Title={"KIDS"}
                        content="list of women"
                    />
                    <MouseOverPopover
                        Title={"HOME"}
                        content="list of women"
                    />
                    <MouseOverPopover
                        Title={"SALE"}
                        content="list of women"
                    />
                    <MouseOverPopover
                        Title={"DESIGNERS"}
                        content="list of women"
                    />
                    <MouseOverPopover
                        Title={"EDITORIAL"}
                        content="list of women"
                    />
                    <MouseOverPopover
                        Title={"GIFT"}
                        content="list of women"
                    />
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
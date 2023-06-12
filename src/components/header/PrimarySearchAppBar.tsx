import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {activeText, customPrimaryColor} from "../../utils/customColors";
import {Search, SearchIconWrapper, StyledInputBase} from "./SearchBar";
import {headerIconStyling} from "../../sx/headerStyles";
import {Link} from "react-router-dom";

export default function PrimarySearchAppBar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
            <MenuItem onClick={handleMenuClose}>Log out</MenuItem>
        </Menu>
    );

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar sx={{backgroundColor: customPrimaryColor}}>
                    <Link to={"/"} style={{textDecoration: 'none', color: activeText, marginLeft: '20px'}}>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <img
                                src={"../../../public/assets/icon.png"}
                                alt={'Dungeon Master Screen logo'}
                                style={{width: '40px', height: '40px'}}
                            />
                            <Typography
                                variant="h4"
                                noWrap
                                component="div"
                                sx={{
                                    display: {xs: 'none', sm: 'block'},
                                    margin: '10px 51.5px 0 5px',
                                    paddingBottom: '5px'
                                }}
                            >
                                DMS
                            </Typography>
                        </div>
                    </Link>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{'aria-label': 'search'}}
                        />
                    </Search>
                    <Box sx={{flexGrow: 1}}/>
                    <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                        <IconButton
                            size="large"
                            aria-label="show 4 new mails"
                            color="inherit">
                            <NotificationsIcon style={headerIconStyling}/>
                        </IconButton>
                        <IconButton
                            size="large"
                            color="inherit"
                        >
                            <MailIcon style={headerIconStyling}/>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle style={headerIconStyling}/>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {
                renderMenu
            }
        </Box>
    )
        ;
}
import { AppBar, styled, Toolbar, Typography , InputBase, Badge ,Tab, Tabs, Avatar, Tooltip, Divider,Menu,  MenuItem, IconButton, Button} from '@mui/material';
import React, {useEffect, useState} from 'react';
import blithelogo from '../../../Assets/logo/logo-gray.jpg'
import './NavBar.css';
import { TiSocialLinkedinCircular } from "react-icons/ti";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import { Box, fontSize } from '@mui/system';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import PublicIcon from '@mui/icons-material/Public';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../../app/slice/authSlice';
import { getUserDetailsByID } from '../../../app/slice/userSlice';
import { getLocalStorage } from '../../../Helpers/Common/utils';
import BookmarkIcon from "@mui/icons-material/Bookmark";

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent:'space-between'
})

const Search = styled("div")(({theme}) =>({
    backgroundColor:  theme.palette.text.tertiary,
    padding:"0 10px",
    borderRadius:theme.shape.borderRadius,
    width: '40%',
}))

const SearchInput = styled(InputBase)(({theme}) =>({
    color: theme.palette.primary.main,
    cursor: 'pointer'
}))

const Icons = styled(Box)(({theme}) =>({
    display:'flex',
    alignItems:'center',
    color: theme.palette.text.primary,
    [theme.breakpoints.down("sm")]:{
        display: 'none'
    }
}))

const CustomTab = styled(Tab)(({theme}) => ({
    color: theme.palette.mode === "light" ? theme.palette.text.tertiary : theme.palette.text.primary,
}))

const UserBox = styled(Box)(({theme}) =>({
    display:'flex',
    alignItems:'center',
    color: theme.palette.text.primary,
    gap:'10px',
    [theme.breakpoints.up("sm")]:{
        display: 'none'
    }
}))

const CustomMenuItem = styled(MenuItem)(({theme}) =>({
    color:  theme.palette.text.primary,
}))


export const NavBar = (props) =>  {

        const { token } = useSelector((state) => state.auth);
        const dataa = useSelector((state) => state.auth.auth);
        const [open, setOpen] = useState(false);
        const navigate = useNavigate();
        const dispatch = useDispatch();
        const location = useLocation();
        const userData = getLocalStorage("userData")
        const username = userData?.username ? userData?.username :'';

    return (
        <AppBar position='sticky' bgcolor={"#A14F57"}>
            <StyledToolbar>
            
                <Typography variant='h6' sx={{display:{xs:'none', sm:'flex'}, fontFamily:'Playfair Display', justifyContent:'center', alignItems:'center', color:'white' }}>Blithe
                    <TiSocialLinkedinCircular color="white" fontSize="2rem" />
                </Typography>
                <LinkedInIcon sx={{display:{xs:'block', sm:'none'}, 
                    fontSize:"2rem"}} />
                <Search>
                    <SearchInput placeholder='Search..' />
                </Search>
                <Icons>

                    <Tabs 
                        className='tab'
                        indicatorColor="secondary"
                        aria-label="icon label tabs example"
                        selectionFollowsFocus
                        variant="fullWidth"
                        textColor="secondary"
                        color='white'
                        value={
                            location.pathname !== "/"
                              ? location.pathname
                              : false
                          }
                        >
                        <CustomTab icon={
                            <Tooltip title="Home" color='white'>
                                <HomeIcon />
                            </Tooltip>
                        } 
                        component={Link}
                        to={"/"}
                        />
                         
                        {/* underdevelopoment */}
                        {/* <CustomTab icon={<Badge badgeContent={4} color="error">
                            <Tooltip title="Feeds">
                                <PublicIcon />
                            </Tooltip>
                        </Badge>} 
                        // label="Home" 
                        value="/"
                        /> */}
                        

                        <CustomTab icon={<Badge badgeContent={4} color="error">
                            <Tooltip title="under development">
                                <MailIcon  />
                            </Tooltip>
                            </Badge>
                        } 
                            component={Link}
                            to={"/"}
                        />
                    

                        <CustomTab 
                            //icon={<Badge badgeContent={4} color="error">
                            icon={
                            <Tooltip title="Bookmarks">
                                <BookmarkIcon  />
                            </Tooltip>
                        } 
                        component={Link}
                        to={"/users/bookmark"}
                        />

                        {/* underdevelopoment */}
                        {/* <CustomTab icon={<Badge badgeContent={4} color="error" >
                            <Tooltip title="Notifications">
                                <NotificationsIcon  />
                            </Tooltip>
                        </Badge>} 
                        // label="Notifications" 
                        value="/notifications" 
                        /> */}

                        <CustomTab icon={
                            <Tooltip title="My Profile">
                                <Avatar alt={userData?.firstName} src={userData?.profilePic} sx={{ width: '2rem', height: '2rem' }}
                                    onClick={e=> setOpen(true)}
                                />
                            </Tooltip>    
                            } 
                            // label="
                            // Me" 
                            value="/myprofile" 
                            />
                    </Tabs>
                </Icons>
                <UserBox  onClick={e=> setOpen(true)}>
                    <Avatar alt={userData?.firstName}
              src={userData?.profilePic} sx={{ width: '2rem', height: '2rem' }} />
                    <Typography variant='span'>{userData?.firstName}</Typography>
                </UserBox>
            </StyledToolbar>
            
            <Menu
                // anchorEl={anchorEl}
                id="menu"
                open={open}
                onClose={e=> setOpen(false)}
                onClick={e=> setOpen(false)}
                className='menu'
                PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                    },
                    '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    color: 'red',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                    },
                },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            >
                {/* to={`/user/profile/${}`} */}
                {/* <Link to={userData ? `/profile/${userData._id}` : '#'}> */}
                <Link to={username  && username.length ? `/profile/${username}` : '#'}>
                    <CustomMenuItem>
                        <Avatar /> Profile
                    </CustomMenuItem>
                </Link>
                <CustomMenuItem>
                    <Avatar /> My account
                </CustomMenuItem>
                <Divider />
                <CustomMenuItem>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                </CustomMenuItem>
                <CustomMenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </CustomMenuItem>
                <Button onClick={()=> dataa && dataa.token ?  dispatch(logoutUser()) : navigate("./login")}>
                    <CustomMenuItem>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        { dataa && dataa.token ? 'Logout': 'Login'}
                    </CustomMenuItem>
                </Button>
            </Menu>
        </AppBar>
    );
}


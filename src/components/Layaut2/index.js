import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import settengs from "./Settengs.png";
import img from "./img.png";
import {Avatar} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {Dashboard} from "@mui/icons-material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase, faFolder, faGear, faPeopleGroup, faUsers, faPhone} from "@fortawesome/free-solid-svg-icons";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import MyListItem2 from "./ListItem2";

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    background:"#6956E5",
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));




const menu1=[
    {title:"Dashboard", icon:<Dashboard/>, path:"/"},
    {title:"Teams", icon:<FontAwesomeIcon icon={faPeopleGroup}/>, path:"/teams"},
    {title:"Employes", icon:<FontAwesomeIcon icon={faUsers}/>, path:"/employees"},
    {title:"Projects", icon:<FontAwesomeIcon icon={faBriefcase}/>, path:"/projects"}
]

const menu2=[
    {title:"Meettengs", icon:<FontAwesomeIcon icon={faPhone}/>, path:"/meettengs"},
    {title:"Tasks", icon:<FontAwesomeIcon icon={faFolder}/>, path:"/tasks"},
    {title:"Settengs", icon:<FontAwesomeIcon icon={faGear}/>, path:"/settengs"}
];

export default function Layaut2() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    let location = useLocation();
    console.log(location.pathname);

    const navigate=useNavigate();


    const getLink=(value)=>{
        console.log(value);
        if (value=="/"){
            return value;
        }
        let s = value.substring(1);

        let indexOf = s.indexOf("/");
        if (indexOf===-1){
            return value;
        }
        let s1 = value.substring(0, indexOf+1);
        return s1;
    }


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            {/*<CssBaseline />*/}
            <AppBar position="fixed" open={open} >
                <Toolbar sx={{background:"#fffff !important"}}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
                        <Box display={"flex"} justifyContent={"center"} flexDirection={"column"} >
                            <Typography variant={"h6"}> Good Morning Anima</Typography>
                            <Typography>Hope you have a good day</Typography>
                        </Box>
                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={4}>
                            <SearchIcon/>
                            <NotificationsIcon/>
                            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={1}>
                                <Avatar src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTadSAgMa0Si3aeLKU9sPJ24i1IZX3nKOVLnA&usqp=CAU"} />
                                <KeyboardArrowDownIcon/>
                            </Box>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader style={{display:"flex", justifyContent:"space-between"}}>
                    <Box display={"flex"} gap={2} alignItems={"center"} marginLeft={1}>
                        <img src={settengs} style={{width:"32px", height:"auto"}}/>
                        <Typography style={{color:"#6956E5", fontWeight:"bold"}}>Teamify</Typography>
                    </Box>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {menu1.map((text, index) => (
                        <MyListItem2 key={text.title} disablePadding
                                     onClick={()=> navigate(text.path)}
                                     className={getLink(location.pathname)===text.path?"active":""}
                        >
                            <ListItemButton>
                                <ListItemIcon>
                                    {text.icon}
                                </ListItemIcon>
                                <ListItemText primary={text.title} />
                            </ListItemButton>
                        </MyListItem2>
                    ))}
                </List>
                <Divider />
                <List>
                    {menu2.map((text, index) => (
                        <MyListItem2 key={text.title} disablePadding
                        //              className={(router.pathname.startsWith(text.path) && text.path!=="/") ||
                        // router.pathname===text.path
                        //     ?"active":""} onClick={()=> router.push(text.path)}
                        >
                            <ListItemButton>
                                <ListItemIcon>
                                    {text.icon}
                                </ListItemIcon>
                                <ListItemText primary={text.title} />
                            </ListItemButton>
                        </MyListItem2>
                    ))}
                </List>

                <img src={img} style={{width:"100%", height:"auto", marginTop:"50px", padding:"10px"}}/>

            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                <Outlet/>
            </Main>
        </Box>
    );
}
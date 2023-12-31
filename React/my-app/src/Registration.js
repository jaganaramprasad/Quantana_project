import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { mainListItems} from './listItems';

// import Deposits from './Deposits';
import Orders from './Orders';
import Dashboard1 from './Dashboard1';
import Rrr from './Rrr';
import SearchIcon from '@mui/icons-material/Search';
import Dropdown from 'react-bootstrap/Dropdown';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import Registertabel from "./Registertable" ;
import Registertabel1 from "./components/Registertable1" ;


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
  
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', 
              // backgroundColor:"#662E9B"
              backgroundColor:"white",
              color:"black"
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Subjects
            </Typography>

            <Select
             defaultValue="default" 
      IconComponent={KeyboardArrowDownIcon}
      sx={{
        width: 200,
        height: 35,
        "& .MuiSelect-icon": {
          transition: "0.2s",
          transform: "rotate(0deg)",
        },
        "&.Mui-expanded .MuiSelect-icon": {
          transform: "rotate(-180deg)",
        },
      }}
    >
      <MenuItem value="default">All sites</MenuItem>
      <MenuItem value="jeep">Jeep</MenuItem>
      <MenuItem value="volkswagen">Volkswagen</MenuItem>
      <MenuItem value="volvo">Volvo</MenuItem>
      <MenuItem value="jaguar">Jaguar</MenuItem>
      <MenuItem value="audi">Audi</MenuItem>
    </Select>
            <IconButton color="inherit">
              <Badge color="secondary">
                <SearchIcon />
              </Badge>

            </IconButton>
            

            <IconButton color="inherit">
              <Badge color="secondary">
                <NotificationsIcon />
              </Badge>

            </IconButton>
        

            
            <IconButton color="inherit">
              <Badge color="secondary">
                <AccountCircleIcon />
              </Badge>

            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
       
          <List component="nav" >
            {mainListItems}
          </List>

        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          
          <Toolbar />
          <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
       
            <Grid container spacing={3}>
        
              <Grid item xs={12}>
               
                  < Registertabel/>
                  
                  {/* < Registertabel1/> */}
              </Grid>
            </Grid>
    
      
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from "@mui/icons-material/Dashboard";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
// import LayersIcon from '@mui/icons-material/Layers';
// import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
export const mainListItems = (
  <React.Fragment>
    <div>
      <div>
        <ListItemButton component={Link} to="/Mainpage">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton component={Link} to="/Students">
          <ListItemIcon>
            <AccountCircleTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="Subjects" />
        </ListItemButton>
        <ListItemButton component={Link} to="/Maindashboard">
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Employees" />
        </ListItemButton>
        <ListItemButton component={Link} to="/Guidelines">
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItemButton>
      </div>

      <div>
        <ListItemButton component={Link} to="/Logout">
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </div>
    </div>
  </React.Fragment>
);

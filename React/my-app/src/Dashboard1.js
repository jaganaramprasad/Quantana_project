// import React from 'react';
import "./Dashboard.css"; // Import the CSS file

import React from "react";

import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PersonIcon from "@mui/icons-material/Person";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";

import Card from "react-bootstrap/Card";
const Dashboard = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "50px",
      }}
    >
      <Card style={{backgroundColor: "#D14141" ,color:"white"}}>
        <Card.Body>
         
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <h4 variant="body1">12</h4>

            <spam variant="body1">
              <ReportProblemIcon />
            </spam>
          </div>

        <Card.Text>servere adverse Events</Card.Text> 
        </Card.Body>
      </Card>


      <Card style={{backgroundColor: "#EA9E4F" ,color:"white"}}>
        <Card.Body>
         
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <h4 variant="body1">927</h4>

            <spam variant="body1">
            <SentimentDissatisfiedIcon />
            </spam>
          </div>

        <Card.Text>adverse Events</Card.Text> 
        </Card.Body>
      </Card>

      <Card style={{backgroundColor: "#444E61",color:"white"}}>
        <Card.Body>
         
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <h4 variant="body1">41</h4>

            <spam variant="body1">
            <PersonIcon />
            </spam>
          </div>

        <Card.Text>pending</Card.Text> 
        </Card.Body>
      </Card>

      <Card style={{backgroundColor: "#D4D4D4",color:"white"}}>
        <Card.Body>
         
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <h4 variant="body1">884</h4>

            <spam variant="body1">
             <PeopleOutlineIcon />
            </spam>
          </div>

        <Card.Text>Total Subject</Card.Text> 
        </Card.Body>
      </Card>
    </div>
  );
};

export default Dashboard;

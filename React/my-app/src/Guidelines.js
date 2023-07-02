

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./Guidelines.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { useState } from "react";

// import  '../../public/assests/covid19.png'

import React from "react";


const Guidelines = () => {


    const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  
  return (
    <div className="container mt-5">


    <div className="row">
      <div className="card ">
        <div className="row">


          <div className="col-4" style={{ borderRight: "1px solid black" }}>
          <title  className=" row">Study details</title>
            <div className="p-3">
              <Card.Img
                variant="top"
                height="200px"
                src='/assests/covid19.png'
                alt="Image"
              />
              <Card.Body>
                <Card.Title  className="row">COVID-19 Corona vaccine </Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                {" "}
                <ListGroup.Item
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  9876543210
                  <BsFillTelephoneFill />
                </ListGroup.Item>
                <ListGroup.Item>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    Chinmaya Mission Hospital <ImLocation2 />
                  </div> 
                  Raja ram road , Durga Nagar Colony, Mumbai, Maharashtra.
                </ListGroup.Item>


              <Form.Group  className="mt-4" controlId="validationCustom03">
              
                <Form.Control type="date" placeholder=" Schedule start" required style={{ height: '50px', fontSize: '16px', padding: '10px' }} />

              </Form.Group>



              <Form.Group  className="mt-4" controlId="validationCustom03">
              
              <Form.Control type="date" placeholder=" Schedule ends" required style={{ height: '50px', fontSize: '16px', padding: '10px' }} />
            </Form.Group>



            <Form.Group  className="mt-4" controlId="validationCustom03">
              
              <Form.Control type="text" placeholder=" Total subjects -(estimated)" required  style={{ height: '50px', fontSize: '16px', padding: '10px' }}/>
            </Form.Group>
              </ListGroup>

              
              <Card.Body>
                
              </Card.Body>
            </div>
          </div>
          <div className="col-8">

          <title className="row">Terms & conditions</title>
            <Card.Body className="scrollable-card">
           

              <Card.Text>
                <Card.Text>
                  <p>
               
                    » Inform caregivers/parents about the Post-Marketing Surveillance study of ® COBAIN and the procedures of the study.
                  </p>
                  <p>
             
                    » Fill the PMS form with details of vaccination history, concurrent illness etc.

                  </p>
                  <p>
               
                 » Provide the diary card to caregivers/subjects with instructions to fill out the same, with any events noted after vaccination or seven days.
                  </p>
                  <p>
                
                 
                 » Subjects to bring the diary card when they come for the next visit.
                  </p>
                  <p>
               
               
                    &nbsp;» Instruct caregivers / subjects to promptly report any serious/severe health events experienced by them after vaccine administration, and to seek medical care.
                  </p>
                  <p>
              
          
                 » Fill out the PMS form with reported adverse events and their management.

                  </p>
                  <p>
              
             
                    » Representatives of BAIL's designated team will collect these forms at periodic intervals.
                  </p>
                 
                </Card.Text>
              </Card.Text>
            </Card.Body>
            <div className=" row card-footer ">

            <Form className="text-muted">
                {["checkbox"].map((type) => (
                  <div key={`default-${type}`}>
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`I have and I accept`}
                      onChange={handleCheckboxChange}
                    />{" "}
                  </div>
                ))}{" "}
                {isChecked && <Button variant="warning">Next</Button>}
              </Form>{" "}

            </div>

          </div>
          
          
        </div>
      </div>
      
    </div>
    </div>
  
  );
};

export default Guidelines;

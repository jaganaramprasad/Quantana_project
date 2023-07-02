import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import Row from "react-bootstrap/Row";

import { useNavigate } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../Registertabel.css";
import { Stepper } from "react-form-stepper";
import NewStepper from "./NewStepper";

const Registertable = () => {
  const navigate = useNavigate();

  const handleAddSubject = () => {
    console.log("ssssssssssss");

    navigate("/Registration4");
  };

  const handleRemoveSubject =()=>{

    navigate("/Registration2");

  }

  return (
    <div className="row px-0">
      <div className="card">
        <div className="row">
          <Card.Header
            as={"h5"}
            className="col-4"
            style={{
              borderRight: "1px solid rgb(206, 212, 218)",
              borderRadius: "0px",
              display: "flex",
              justifyContent: "center",
              padding: "25px",
            }}
          >
            Registration steps
          </Card.Header>
          <Card.Header className="col-8 p-0" style={{ fontSize: "10px" }}>
            <Stepper steps={[{}, {}, {}, {}, {}, {}]} activeStep={3}  styleConfig={{
                  activeBgColor: 'green',
                  completedBgColor: 'green',
                  inactiveBgColor: 'white',
                  inactiveTextColor: 'green'
              }}/>

{/* <NewStepper activeStep={3} /> */}
          </Card.Header>

          <div
            className="col-4"
            style={{ borderRight: "1px solid rgb(206, 212, 218)" }}
          >
            <div
              className="mt-3 "
             
            >
              <Card className="cardbody">
                <Card.Body>
                  <Card.Title>1. Subject details</Card.Title>
                  <Card.Text>Age, Sex, Weight, Phone, etc....</Card.Text>
                </Card.Body>
              </Card>

              <Card className="cardbody">
                <Card.Body>
                  <Card.Title>2. Past health history</Card.Title>
                  <Card.Text>Allergies, medication, etc.</Card.Text>
                </Card.Body>
              </Card>

              <Card className="cardbody">
                <Card.Body>
                  <Card.Title>3. Site Information</Card.Title>
                  <Card.Text>Hospital, Doctor, Phone etc</Card.Text>
                </Card.Body>
              </Card>

              <Card className="cardbody active-card">
                <Card.Body>
                  <Card.Title>4. Study details</Card.Title>
                  <Card.Text>Dose 1, Dose 2, details.</Card.Text>
                </Card.Body>
              </Card>

              <Card className="cardbody">
                <Card.Body>
                  <Card.Title>5. Symptoms</Card.Title>
                  <Card.Text>PMS Symptoms</Card.Text>
                </Card.Body>
              </Card>

              <Card className="cardbody">
                <Card.Body>
                  <Card.Title>6. Preview and confirm</Card.Title>
                  <Card.Text>Summary of subject Registration</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>

          <div
            className="col-8 mt-3 "
            // style={{ height: "600px", overflow: "auto" }}y
          >
            <Row className="mb-4">
              <Col md="6">


        <Form.Group controlId="validationCustom04">
                  <Form.Label>Name of the Study</Form.Label>
                  <div className="input-container">
                    <Form.Control
                      type="text"
                      placeholder="Enter here"
                      className="input-part"
                      required
                      
                      
                      
                    />
                  </div>
        </Form.Group>

              </Col>

              <Col md="6">
                <Form.Label>Name of Dose</Form.Label>
                <Form.Select required>
                  <option value="">Enter here</option>
                  <option value="Doe">Doe</option>
                  <option value="Smith">Smith</option>
                </Form.Select>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Col>
            </Row>

            <Row className="mb-4">
              <Col md="6">
                <Form.Group controlId="validationCustom04">
                  <Form.Label>Date of adminstration</Form.Label>
                  <div className="input-container">
                    <Form.Control
                      type="date"
                      placeholder="Select D.O.B"
                      className="input-part"
                      required
                    />
                  </div>
                </Form.Group>
              </Col>

              <Col md="6">
                <Form.Label>Name of Dose</Form.Label>
                <Form.Select required>
                  <option value="">Enter here</option>
                  <option value="Doe">Doe</option>
                  <option value="Smith">Smith</option>
                </Form.Select>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Col>
            </Row>

            <Row className="mb-4">
              <Col md="6">
                <Form.Group controlId="validationCustom04">
                  <Form.Label>Date of adminstration</Form.Label>
                  <div className="input-container">
                    <Form.Control
                      type="Time"
                      placeholder="Select D.O.B"
                      className="input-part"
                      required
                    />
                  </div>
                </Form.Group>
              </Col>

              <Col md="6">
                <Form.Label>Anatomical site of adminstration</Form.Label>
                <Form.Select required>
                  <option value="">Enter here</option>
                  <option value="Doe">Doe</option>
                  <option value="Smith">Smith</option>
                </Form.Select>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Col>
            </Row>

            <Row className="mb-4">
              <Col md="6">
                <Form.Group controlId="validationCustom04">
                  <Form.Label>Batch Number</Form.Label>
                  <div className="input-container">
                    <Form.Control
                      type="text"
                      placeholder="Enter here"
                      className="input-part"
                      required
                    />
                  </div>
                </Form.Group>
              </Col>

              <Col md="6">
              <Form.Group controlId="validationCustom04">
                  <Form.Label>Expiry Date</Form.Label>
                  <div className="input-container">
                    <Form.Control
                      type="date"
                      placeholder="Select D.O.B"
                      className="input-part"
                      required
                    />
                  </div>
                </Form.Group>
              </Col>
            </Row>


            <Row className="mb-4">
            <Col md="6">
            <Form.Group  controlId="validationCustom04">
                <Form.Label>Any adverse event within 30 min, post vaccination?</Form.Label>
                <div className="d-flex">
                 
              <div style={{ display: "flex",
              flexDirection: "row",
              gap: "50px"}}>
              <Form>
                <div className="mb-3">
                  <Form.Check 
                    type="checkbox"
                    id="default-checkbox"
                    label="YES"
                  />
                </div>
              </Form>

              <Form>
                <div className="mb-3">
                  <Form.Check 
                    type="checkbox"
                    id="default-checkbox"
                    label="NO"
                  />
                </div>
              </Form>
              </div>

                </div>
              </Form.Group>
              </Col>
              </Row>

            <Card.Footer className="row footer">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "20px",
                  justifyContent: "end",
                  "--bs-gutter-x": "0 !important",
                }}
              >
             <Button variant="secondary"  onClick={handleRemoveSubject}>previous</Button>
                <Button variant="warning" onClick={handleAddSubject}>
                  Next
                </Button>
              </div>
            </Card.Footer>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Registertable;

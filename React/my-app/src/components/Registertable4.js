import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Row from "react-bootstrap/Row";
// import ToggleButton from "react-bootstrap/ToggleButton";
// import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import { useNavigate } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../Registertabel.css";
import { Stepper } from "react-form-stepper";

const Registertable = () => {
  const navigate = useNavigate();

  const handleAddSubject = () => {
    console.log("ssssssssssss");

    navigate("/Registration5");
  };

  const handleRemoveSubject = () => {
    navigate("/Registration3");
  };

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
            <Stepper
              steps={[{}, {}, {}, {}, {}, {}]}
              activeStep={4}
              styleConfig={{
                // activeBgColor: "rgb(36, 237, 29)",
                // bgColor: (index) => (index > 3 ? "green" : "default-color"),
                // completeBgColorr:"green"

                activeBgColor: 'green',
                completedBgColor: 'green',
                inactiveBgColor: 'white',
                inactiveTextColor: 'green'
              }}
            />
          </Card.Header>

          <div
            className="col-4"
            style={{ borderRight: "1px solid rgb(206, 212, 218)" }}
          >
            <div
              className="mt-3 custom-scrollbar"
              style={{ height: "600px", overflow: "auto" }}
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

              <Card className="cardbody">
                <Card.Body>
                  <Card.Title>4. Study details</Card.Title>
                  <Card.Text>Dose 1, Dose 2, details.</Card.Text>
                </Card.Body>
              </Card>

              <Card className="cardbody active-card">
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
            className="col-8 mt-3 custom-scrollbar"
            style={{ height: "600px", overflow: "auto" }}
          >
            <Row className="mb-4">
              <Col md="6">
                <Form.Group controlId="validationCustom04">
                  <Form.Label>Date of onset</Form.Label>
                  <div className="input-container">
                    <Form.Control
                      type="date"
                      //   placeholder="Select D.O.B"
                      className="input-part"
                      required
                    />
                  </div>
                </Form.Group>
              </Col>

              <Col md="6">
                <Form.Group controlId="validationCustom04">
                  <Form.Label>Time of onset(24Hrs)</Form.Label>
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
            </Row>

            <Row className="mb-5">
              <Col md="6">
                <Form.Group controlId="validationCustom04">
                  <Form.Label>Date of resolution</Form.Label>
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
                <Form.Group controlId="validationCustom04">
                  <Form.Label>Time of resolution(24Hrs)</Form.Label>
                  <div className="input-container">
                    <Form.Control
                      type="Time"
                      placeholder=" HH:MM"
                      className="input-part"
                      required
                    />
                  </div>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-4 ">
              <Col md="6">
                <Form.Group
                  controlId="validationCustom04"
                  style={{ display: "flex", gap: "10px" }}
                >
                  <Form.Label>Event Classification</Form.Label>
                  <Form.Select aria-label="Default select example" style={{backgroundColor:"#FF8000"}}>
                    <option style={{ backgroundColor: "white" }}>Addverse events </option>
                    <option  style={{ backgroundColor: "white" }}value="1">One</option>
                    <option style={{ backgroundColor: "white" }}value="2">Two</option>
                    <option style={{ backgroundColor: "white" }}value="3">Three</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col md="6">
                {/* <Form.Label>Anatomical site of adminstration</Form.Label>
                <Form.Select required>
                  <option value="">Enter here</option>
                  <option value="Doe">Doe</option>
                  <option value="Smith">Smith</option>
                </Form.Select>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
              </Col>
            </Row>

            <Row className="mb-4">
              <Col md="6">
                {/* <Form.Group controlId="validationCustom04">
                  <Form.Label>Batch Number</Form.Label>
                  <div className="input-container">
                    <Form.Control
                      type="text"
                      placeholder="Enter here"
                      className="input-part"
                      required
                    />
                  </div>
                </Form.Group> */}
              </Col>

              <Col md="6">
                {/* <Form.Group controlId="validationCustom04">
                  <Form.Label>Expiry Date</Form.Label>
                  <div className="input-container">
                    <Form.Control
                      type="date"
                      placeholder="Select D.O.B"
                      className="input-part"
                      required
                    />
                  </div>
                </Form.Group> */}
              </Col>
            </Row>

            <Row className="mb-4">
              <Col md="6">
                {/* <Form.Group  controlId="validationCustom04">
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
              </Form.Group> */}
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
                <Button variant="secondary" onClick={handleRemoveSubject}>
                  previous
                </Button>
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

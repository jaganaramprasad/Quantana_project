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
    console.log("ram");

    navigate("/Registration5");
  };

  const handleRemoveSubject = () => {
    navigate("/Registration4");
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
              activeStep={5}
              styleConfig={{


                activeBgColor: "green",
                completedBgColor: "green",
                inactiveBgColor: "white",
                inactiveTextColor: "green",
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

              <Card className="cardbody ">
                <Card.Body>
                  <Card.Title>5. Symptoms</Card.Title>
                  <Card.Text>PMS Symptoms</Card.Text>
                </Card.Body>
              </Card>

              <Card className="cardbody active-card">
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
                <Card style={{minHeight:"18rem"}}>
                <Card.Header> <b>Subject Details </b></Card.Header>
                  <Card.Body>

                    <div style={{display:"flex",justifyContent:"space-between"}}>
                    <p> Subject Name </p>
                    <p> <b>Krishna </b></p>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                    <p> Subject ID</p>
                    <p> <b>000643-k </b></p>
                    </div>

                    <div style={{display:"flex",justifyContent:"space-between"}}>
                    <p> Age</p>
                    <p> <b>23 Yrs </b></p>
                    </div>

                    <div style={{display:"flex",justifyContent:"space-between"}}>
                    <p> Mobile</p>
                    <p> <b>9465921745 </b></p>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                    <p> Gender</p>
                    <p> <b>Male </b></p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col md="6">
              <Card style={{minHeight:"18rem"}}>
                <Card.Header> <b>Health History</b></Card.Header>
                  <Card.Body>

                    <div style={{display:"flex",justifyContent:"space-between"}}>
                    <p> Allergies </p>
                    <p> <b>No </b></p>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                    <p> Family History</p>
                    <p> <b>None </b></p>
                    </div>

                    <div style={{display:"flex",justifyContent:"space-between"}}>
                    <p> IIiness</p>
                    <p> <b>NO </b></p>
                    </div>

                    <div style={{display:"flex",justifyContent:"space-between"}}>
                    <p> Medication used in last 3days</p>
                    <p> <b>No </b></p>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                    {/* <p> Gender</p>
                    <p> <b>Male </b></p> */}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row className="mb-5">
              <Col md="6">
              <Card style={{minHeight:"18rem"}}>
                <Card.Header> <b>Site Information </b></Card.Header>
                  <Card.Body>

                    <div style={{display:"flex",justifyContent:"space-between"}}>
                    <p> Site Name </p>
                    <p> <b>Krishna </b></p>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                    <p> PI Name</p>
                    <p> <b>000643-k</b></p>
                    </div>

                    <div style={{display:"flex",justifyContent:"space-between"}}>
                    <p> Mobile</p>
                    <p> <b> 9465921745</b></p>
                    </div>

                    {/* <div style={{display:"flex",justifyContent:"space-between"}}>
                    <p> Mobile</p>
                    <p> <b>9465921745 </b></p>
                    </div> */}
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                    <p> Chinmaya Mission Hospital</p>
                    {/* <p> <b>Male </b></p> */}
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col md="6">
              <Card style={{minHeight:"18rem"}}>
                <Card.Header> <b>Subject Details </b></Card.Header>
                  <Card.Body>

                    <div style={{display:"flex",justifyContent:"space-between"}}>
                    <p> Subject Name </p>
                    <p> <b>Krishna </b></p>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                    <p> Dose Name</p>
                    <p> <b>Dose 2</b></p>
                    </div>

                    <div style={{display:"flex",justifyContent:"space-between"}}>
                    <p> Batch No</p>
                    <p> <b>000643-k </b></p>
                    </div>

                    <div style={{display:"flex",justifyContent:"space-between"}}>
                    <p> Date of adminstration</p>
                    <p> <b>12/05/2023 </b></p>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                    <p> Expiry Date</p>
                    <p> <b>12/12/2023 </b></p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row className="mb-4 ">
              <Col md="6">
              <Card style={{minHeight:"18rem"}}>
                <Card.Header> <b>Events </b></Card.Header>
                  <Card.Body>

                    <div style={{display:"flex",justifyContent:"space-between"}}>
                    <p> Date & Time of onset </p>
                    <p> <b>12/12/2023 </b></p>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                    <p> Date & Time of Resolution</p>
                    <p> <b>12/12/2023 </b></p>
                    </div>

                    <div style={{display:"flex",justifyContent:"space-between"}}>
                    <p> AE</p>
                    <p> <b>FEVER </b></p>
                    </div>

                    <div style={{display:"flex",justifyContent:"space-between"}}>
                    <p> Note</p>
                    <p> <b>Meets Case Defination </b></p>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                    <p> Gender</p>
                    <p> <b>Male </b></p>
                    </div>
                  </Card.Body>
                </Card>
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

              <Col md="6"></Col>
            </Row>

            <Row className="mb-4">
              <Col md="6"></Col>
            </Row>

            <Card.Footer className="row footer">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "20px",
                  justifyContent: "end",
           
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

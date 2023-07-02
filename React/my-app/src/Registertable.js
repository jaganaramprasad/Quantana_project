import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import ToggleButton from "react-bootstrap/ToggleButton";

import { useNavigate } from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Registertabel.css";
import { Stepper } from "react-form-stepper";
import { useState } from "react";

const Registertable = () => {
  const navigate = useNavigate();

  // const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "initial", value: "1" },
    { name: "Follow up", value: "2" },
    // { name: "Radio", value: "3" },
  ];

  const radio = [
    { name: "Male", value: "1" },
    { name: " Female", value: "2" },
    { name: "Other's", value: "3" },
  ];

  
  const handleAddSubject = () => {
    console.log("ssssssssssss");

    navigate("/Registration1");
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
              activeStep={0}
              styleConfig={{
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
              // style={{ height: "600px", overflow: "auto" }}
            >
              <Card className="cardbody active-card">
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
            className="col-8 mt-3 custom-scrollbar"
          
          >
            <Row className="mb-4">
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control required type="text" placeholder="First name" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control required type="text" placeholder="Last name" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-4">
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Date of report</Form.Label>
                <Form.Control type="date" placeholder="" required />
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="validationCustom04">
                <Form.Label>Report type</Form.Label>

                <div className="d-flex">
                 
                <ButtonGroup className="w-100"> 
                      {radios.map((radio, idx) => (
                        <ToggleButton
                        className="boarder_change"
                          key={idx}
                          id={`radio-${idx}`}
                          type="radio"
                          variant={
                            idx % 2 ? "outline-success" : "outline-danger"
                          }

                          name="radio"
                          value={radio.value}
                          checked={radioValue === radio.value}
                          onChange={(e) => setRadioValue(e.currentTarget.value)}
                        >
                          {radio.name}
                        </ToggleButton>
                      ))}
                    </ButtonGroup>




                </div>
              </Form.Group>
            </Row>

            <Row className="mb-4">
              <Form.Group as={Col} md="6" controlId="validationCustom04">
                <Form.Label>Date of birth</Form.Label>
                <div className="input-container">
                  <Form.Control
                    type="date"
                    placeholder="Select D.O.B"
                    className="input-part"
                    required
                  />
                </div>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom04">
                <Form.Label>Sex</Form.Label>
                <div className="d-flex">
                  

                 <ButtonGroup className="w-100">
                      {radio.map((radio, idx) => (
                        <ToggleButton
                        className="boarder_change"
                          key={idx}
                          id={`radio-${idx}`}
                          type="radio"
                          variant={
                            idx % 2 ? "outline-success" : "outline-danger"
                          }
                          name="radio"
                          value={radio.value}
                          checked={radioValue === radio.value}
                          onChange={(e) => setRadioValue(e.currentTarget.value)}
                        >
                          {radio.name}
                        </ToggleButton>
                      ))}
                    </ButtonGroup>

                </div>
              </Form.Group>
            </Row>

            <Row className="mb-4">
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Weight</Form.Label>
                <InputGroup className="md-4">
                  <Form.Control
                    placeholder="Enter Weight"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Text id="basic-addon2">In KG</InputGroup.Text>
                </InputGroup>
              </Form.Group>
            </Row>
            <Card.Footer className=" row footer" >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "20px",
                  justifyContent: "end",
                  // marginTop:"100px"
                 
                }}
              >
                <Button variant="secondary">previous</Button>
                <Button variant="warning" onClick={handleAddSubject}>
                  Next
                </Button>
              </div>
            </Card.Footer>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Registertable;

import React,{ useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Row from "react-bootstrap/Row";
import ToggleButton from "react-bootstrap/ToggleButton";
// import ToggleButton from 'react-bootstrap/ToggleButton';
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../Registertabel.css";
import { Stepper } from "react-form-stepper";

const Registertable = () => {

    const navigate = useNavigate();

  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Initial', value: '1' },
    { name: 'Follow up', value: '2' },
    // { name: 'Radio', value: '3' },
  ];

    const handleAddSubject = () => {
        console.log("ssssssssssss");
    
       navigate("/Registration3");
      };

      const handleRemoveSubject =()=>{

        navigate("/Registration1");

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
            <Stepper steps={[{}, {}, {}, {}, {}, {}]} activeStep={2}  styleConfig={{
                  activeBgColor: 'green',
                  completedBgColor: 'green',
                  inactiveBgColor: 'white',
                  inactiveTextColor: 'green'
              }}/>
          </Card.Header>

          <div
            className="col-4"
            style={{ borderRight: "1px solid rgb(206, 212, 218)" }}
          >
            <div
              className="mt-3 custom_scrollbar"
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

              <Card className="cardbody active-card">
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
            style={{ height: "600px", overflow: "auto" }}
          >
            <Row className="mb-4">
              <Col md="6">
                <Form.Label>Hospital name</Form.Label>
                <Form.Select required>
                  <option value="">Enter here</option>
                  <option value="John">John</option>
                  <option value="Jane">Jane</option>
                </Form.Select>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Col>

              <Col md="6">

                 <Form.Group  controlId="validationCustom02">
                <Form.Label>PI name</Form.Label>
                <Form.Control required type="text" placeholder="PI name" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>


              </Col>
            </Row>

            <Row className="mb-4">
              <Col md="6">
              <Form.Group  controlId="validationCustom03">
                <Form.Label>Date of report</Form.Label>
                <Form.Control type="date" placeholder="" required />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              </Col>

              <Col md="6">
                <Form.Group as={Col} md="12" controlId="validationCustom04">
                  <Form.Label>Report Type</Form.Label>
                  <div className="d-flex">
                    

    <ButtonGroup className="w-100">
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
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
                <Button variant="warning" onClick={handleAddSubject} >Next</Button>
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

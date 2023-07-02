// import React from 'react'
// import CardGroup from 'react-bootstrap/CardGroup';
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import './Guidelines.css'

// import Button from 'react-bootstrap/Button';
// import { AiOutlineArrowRight } from "react-icons/ai";
// import { BsFillTelephoneFill } from "react-icons/bs";
// import { ImLocation2 } from "react-icons/im";
// import { useState } from 'react';
// import './Registertabel.css'

// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';
// import ToggleButton from 'react-bootstrap/ToggleButton';
// import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';


// const Guidelines = () => {

//     const [value, setValue] = useState([1, 3]);
//   const [isChecked, setIsChecked] = useState(false);



//   const handleChange = (val) => setValue(val);

//   const handleCheckboxChange = (e) => {
//     setIsChecked(e.target.checked);
//   };

// return (
// <div className="row" style={{padding:"30px"}}> 
// <CardGroup> 
//    <div className="col-12 col-md-3 " >
//       <Card  style={{ width: 'auto' }} className='left_card'>
//       <Card.Header as="h5">Registration Steps</Card.Header>
//       <div className='p-3'>
//       <Card.Img variant="top" height="200px" src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" />
//       <Card.Body>

//         <Card.Title></Card.Title>


//       </Card.Body >
//       <ListGroup className="list-group-flush">
//         <ListGroup.Item>



//         </ListGroup.Item>
//       <ListGroup.Item>
 
//         </ListGroup.Item>
      
//       </ListGroup>
//       <Card.Body>

        
//       </Card.Body>
//     </div>
//       </Card>
   
//       </div> 
     
// <div className="row">


//     <div className='col-4'>

//      <h1>jgjhasdgasgdjk</h1>

//     </div>


//    <div className='col-8'>
//       <h1>jgjhasdgasgdjk</h1> 


// <Card className='right_card'>
// <Card.Header as="h5">Terms & conditions</Card.Header>
// <Card.Body className="scrollable-card">

// <Form >
//       <Row className="mb-3">
//         <Form.Group as={Col} md="6" controlId="validationCustom01">
//           <Form.Label>First name</Form.Label>
//           <Form.Control
//             required
//             type="text"
//             placeholder="First name"
           
//           />
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="6" controlId="validationCustom02">
//           <Form.Label>Last name</Form.Label>
//           <Form.Control
//             required
//             type="text"
//             placeholder="Last name"
         
//           />
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         </Form.Group>
        
//       </Row>
//       <Row className="mb-3">
//         <Form.Group as={Col} md="6" controlId="validationCustom03">
//           <Form.Label>Date of report</Form.Label>
//           <Form.Control type="text" placeholder="" required />
  
//         </Form.Group>

        
//         <Form.Group as={Col} md="6" controlId="validationCustom04">
//           <Form.Label>Report type</Form.Label>
//           <Form.Control type="text" placeholder="" required />
   
//         </Form.Group>
//       </Row>
  

//       <Row className="mb-3">


// <Form.Group as={Col} md="6" controlId="validationCustom04">
//   <Form.Label>Sex</Form.Label>
//   <div className="input-container">
//     <Form.Control type="text" placeholder="Select D.O.B" className="input-part" required />
//     <Form.Control type="text" placeholder="Enter age" className="input-part" required />
    
//   </div>
// </Form.Group>

   

// <Form.Group as={Col} md="6" controlId="validationCustom04">
//   <Form.Label>Sex</Form.Label>
//   <div className="d-flex ">
//     <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
//       <ToggleButton id="tbg-btn-1" value={1}>
//        Male
//       </ToggleButton>
//       <ToggleButton id="tbg-btn-2" value={2}>
//      Female
//       </ToggleButton>
//       <ToggleButton id="tbg-btn-3" value={3}>
//        other's
//       </ToggleButton>
//     </ToggleButtonGroup>
//   </div>
// </Form.Group>

//       </Row>
     
//       <Row className="mb-3">
//         <Form.Group as={Col} md="6" controlId="validationCustom03">
//           <Form.Label>Weight</Form.Label>
//     <InputGroup className="md-6">
//         <Form.Control 
//           placeholder="Enter Weight"
      
//           aria-describedby="basic-addon2"
//         />
//         <InputGroup.Text id="basic-addon2">In KG</InputGroup.Text>
//       </InputGroup>
//         </Form.Group>



//       </Row>
//     </Form>
//         </Card.Body>














//       <Card.Footer >
     
//        <Button variant="dark">previous</Button>
//        <Button variant="warning">Next</Button>
//         </Card.Footer>
//       </Card> 
//       </div>  
//   </div>
//     </CardGroup>
//     </div> 

    
//   )
// }

// export default Guidelines



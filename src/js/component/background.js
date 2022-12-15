import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import TimerFunctionSec from "./timersec";
import TimerFunctionTen from "./timerten";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faClock } from '@fortawesome/free-regular-svg-icons'

const myStyle = {
	color: "white",
	fontSize: "200px",
	boxShadow: "1px 2px 5px grey",
	backgroundColor: "#101411",
	fontFamily: 'Times New Roman'
  };


const Background = () => {
    return (
<Container>
<Row className="m-5 p-5">
  <Col className="bg-black">
    <Stack className="justify-content-center" direction="horizontal" gap={5}>
      {/* <div className="p-1" style={myStyle}><FontAwesomeIcon icon="fa-regular fa-clock" /></div> */}
      <div className="pl-5" style={myStyle}>0</div>
      <div style={myStyle}>0</div>
      <div style={myStyle}>0</div>
      <div style={myStyle}><TimerFunctionTen /></div>
      <div style={myStyle}><TimerFunctionSec /></div>
    </Stack>
  </Col>
</Row>
</Container>
    )
  }

  export default Background
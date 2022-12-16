import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import TimerFunctionSec from "./timersec";
import TimerFunctionHundred from "./timer100";
import TimerFunctionMin from "./timerten";
import TimerFunctionThousand from "./timer1000";
import TimerFunctionMillion from "./timermillion";
// import { faClock } from '@fortawesome/free-regular-svg-icons'/
library.add(fas, far);

const Clock = () => {
  return <FontAwesomeIcon icon="fa-regular fa-clock" />
}

const myStyle = {
	color: "white",
	fontSize: "200px",
	boxShadow: "1px 2px 5px grey",
	backgroundColor: "#101411",
	fontFamily: 'Times New Roman',
  borderRadius: "20px",
  paddingLeft: "30px",
  paddingRight: "30px"
};


const Background = () => {
    return (
<Container fluid>
<Row className="m-5 p-5">
  <Col className="bg-black">
    <Stack className="justify-content-center py-5" direction="horizontal" gap={5}>
      <div className="pl-5" style={myStyle}>{Clock()}</div>
      <div style={myStyle}><TimerFunctionMillion /></div>
      <div style={myStyle}><TimerFunctionThousand /></div>
      <div style={myStyle}><TimerFunctionHundred /></div>
      <div style={myStyle}><TimerFunctionMin /></div>
      <div style={myStyle}><TimerFunctionSec /></div>
    </Stack>
  </Col>
</Row>
</Container>
    )
  }

  export default Background
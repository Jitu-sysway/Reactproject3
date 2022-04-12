import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Design.css";
import img1 from '../assets/figment.JPG'
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import { text } from "@fortawesome/fontawesome-svg-core";

export default function Design() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="one">
            <div className="five">
              Email :<br /> jitu.kbl@gmail.com <br />
              Phone :<br />
              +917077968191 <br /> Find me On <br />
              
            </div>
          </div>
          <div className="two">
            <div className="six">
              <p className="seven">
                Santosh<br />
                Deb
              </p>
              Creative director - saint studios
              <br /> I'm santosh deb, a huge HTML lover.
              <br />
              <Button variant="primary" size="lg" disabled>
                Portfolio
              </Button>{" "}
              <Button variant="primary" size="lg" disabled>
                Resume
              </Button>{" "}
            </div>
          </div>
          <div className="three">
            <img src={img1} alt="figment" className="four"></img>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

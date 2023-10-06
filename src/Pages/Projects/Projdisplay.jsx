import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Project.css";
import ProjectPop from "./ProjectPop";

const Projdisplay = () => {
  return (
    <Container id="projects" fluid style={{ marginTop: "15vh" }}>
      <Row style={{ marginBottom: "15vh" }}>
        <Col style={{ textAlign: "center" }}>
          {" "}
          <h1>Projekty </h1>
        </Col>
      </Row>
      <Row className="projektyRow">
        <ProjectPop klasa="p1" nazwa="Projekt sklepu" />
        <ProjectPop klasa="p1" nazwa="Projekt sklepu" />
        <ProjectPop klasa="p2" nazwa="Layout" />

        <ProjectPop klasa="p1" nazwa="Projekt sklepu" />
        <ProjectPop klasa="p2" nazwa="Layout" />
        <ProjectPop klasa="p2" nazwa="Layout" />
      </Row>
    </Container>
  );
};

export default Projdisplay;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Project.css";
import ProjectPop from "./ProjectPop";

const shop_images = [
  "/shop/shop1.png",
  "/shop/kolekcja.png",
  "/shop/loggin.png",
  "/shop/checkout.png",
];

const layout_images = ["/shop/main.png", "/shop/menu.png", "/shop/about.png"];

const Projdisplay = () => {
  return (
    <Container id="projects" fluid style={{ marginTop: "15vh" }}>
      <Row style={{ marginBottom: "15vh" }}>
        <Col style={{ textAlign: "center" }}>
          {" "}
          <h1>Projects </h1>
        </Col>
      </Row>
      <Row className="projektyRow">
        <ProjectPop klasa="p1" nazwa="Shop Project" img={shop_images} />
        <ProjectPop klasa="p1" nazwa="Shop Project" img={shop_images} />
        <ProjectPop klasa="p2" nazwa="Layout" img={layout_images} />

        <ProjectPop klasa="p1" nazwa="Shop Project" img={shop_images} />
        <ProjectPop klasa="p2" nazwa="Layout" img={layout_images} />
        <ProjectPop klasa="p2" nazwa="Layout" img={layout_images} />
      </Row>
    </Container>
  );
};

export default Projdisplay;

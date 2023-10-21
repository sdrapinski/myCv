import { Modal, Button, Form, Row, Col, Carousel } from "react-bootstrap";
import React, { useState } from "react";

function Modalepop(props) {
  const images = props.img;

  const zamknij = (props) => {
    props.onHide();
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header style={{ position: "relative" }}>
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{
            margin: "auto",
          }}
        >
          {props.nazwa}{" "}
          <svg
            onClick={() => zamknij(props)}
            style={{
              cursor: "pointer",
              position: "absolute",
              top: "20%",
              left: "95%",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Carousel variant={props.klasa === "p1" ? "dark" : "white"}>
          {images.map((img) => (
            <Carousel.Item key={img}>
              <img
                className="d-block w-100"
                src={`./projekty${img}`}
                alt={`./projekty${img}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal.Body>
    </Modal>
  );
}

function ProjectPop({ klasa, nazwa, img }) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Col
        style={{ cursor: "pointer", overflowX: "hidden" }}
        md={{ offset: 0, span: 3 }}
        xs={{ offset: 0, span: 5 }}
        className={`projecthandler ${klasa}`}
        onClick={() => setModalShow(true)}
      >
        <img
          className="prozdj"
          style={{ marginLeft: "-12px" }}
          src={`./projekty/${img[0]}`}
          alt="project"
        />
      </Col>

      <Modalepop
        img={img}
        nazwa={nazwa}
        klasa={klasa}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ProjectPop;

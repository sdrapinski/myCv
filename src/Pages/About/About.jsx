import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import './About.css'
const About = () => {
    return (
        <Container id="about" fluid style={{marginTop:"15vh"}}>
        <Row style={{marginBottom:"5vh"}}>
            <Col style={{textAlign:"center"}}> <h1>
                <i> Hej </i> </h1></Col>
        </Row>
        <Row>
            <Col className="omnie" >
            Jestem młodym i szybko uczącym się Juniorem
            z ponad pół rocznym komercyjnym doświadczeniem. <br />
            Specjalizuję się we Front-endzie a w szczególności w bibliotece React, w której umiejętności szkole od roku. <br />
            Korzystam z Gita oraz programów do UI Desgin (Figma / Adobe XD)
          <br />  Dla poszerzenia wiedzy ukończyłem liczne kursy
            na platformach online.

            </Col>
        </Row>
        </Container>
    )
}

export default About

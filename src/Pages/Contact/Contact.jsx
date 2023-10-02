import React from 'react'
import { Container,Row,Col,Form,Button } from 'react-bootstrap'
import './Contact.css'
const Contact = () => {
    return (
        <Container id="contact" fluid className="glownycontact">
            <Row >
                <Col md={{span: 6, offset: 5}} xs={{span:8,offset:2}} style={{marginTop:30}}> <h2> Zostań w kontakcie  </h2>   </Col>
                <Col md={{ span: 6, offset: 3 }} className="formik">
                    <form action="https://formsubmit.co/szymondrapinkiwork@gmail.com" method="POST">
                <Form.Group  className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label> <h3>Imie </h3></Form.Label> 
        <Form.Control type="text"  name="name" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label> <h3>Email do kontaktu </h3></Form.Label> 
    <Form.Control type="email"  name="email" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label> <h3>Wiadomość </h3></Form.Label> 
    <Form.Control as="textarea" name="message" rows={3} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Button xs={{offset:2}} className="btn btn-primary buttonik" type="submit"> Napisz do mnie</Button>
    </Form.Group>
    <input type="hidden" name="_next" value="https://sdrapinski.github.io/CV_New/"></input>
     </form>
     </Col>
     </Row> 
     <Row> 
                
                 <Col  md={{offset:3}} xs={{offset:0}} className="infocontact" >
                 <p>
                    <a href="mailto:szymondrapinki@gmail.com">szymondrapinki@gmail.com </a> 
                 </p>
                 <p>
                    +48 795 147 996
                 </p>
                 <p>
                     <a href="http://www.linkedin.com/in/szymon-drapiński-front-end">

                    
                     <svg width="38" height="38" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C17.514 2 22 6.486 22 12C22 17.514 17.514 22 12 22C6.486 22 2 17.514 2 12C2 6.486 6.486 2 12 2ZM12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM10 8C10 8.557 9.553 9.008 9 9.008C8.447 9.008 8 8.558 8 8C8 7.443 8.447 6.992 9 6.992C9.553 6.992 10 7.444 10 8V8ZM10 10H8V16H10V10ZM13 10H11V16H13V13.139C13 11.417 15.002 11.258 15.002 13.139V16H17V12.641C17 9.357 13.872 9.477 13 11.093V10Z" fill="white"/>
</svg>

                 </a>
                 </p>
                
                 </Col>
                 </Row>
        </Container>
    )
    
}

export default Contact

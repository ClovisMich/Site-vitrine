import React from "react";
import { Col, Form, Row } from "react-bootstrap";

const Contact = () =>{
    return(
        <>
        <h1>Nous contactez</h1>

        <div>
            <Form style={{background: '#EEE'}} className='p-1'>
                <Row className="m-2">
                    <Form.Group as={Col}>
                        <Form.Label>Nom</Form.Label>
                        <Form.Control required type="text" placeholder="Nom"/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Prénom</Form.Label>
                        <Form.Control required type="text" placeholder="Prénom"/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Mail</Form.Label>
                        <Form.Control required type="email" placeholder="Mail"/>
                    </Form.Group>
                </Row>
                <Row className="m-2">
                    <Form.Group as={Col}>
                        <Form.Label>Pourquoi nous contacez vous ?</Form.Label>
                        <Form.Control required  as="textarea" placeholder="Votre message" style={{height: '150px'}}/>
                    </Form.Group>
                </Row>
            </Form>
        </div>
        </>
    )
}

export default Contact
import React from "react";
import { Button, Card } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

const Accueil = () =>{
    return(
        <>
        <h1>Notre Magasin</h1>

        <section id="boisson">
            
            <h3>Nos boisson</h3>
            
            <Card>
                <Card.Img variant="top" src="https://picsum.photos/id/2/200/300"/>
                <Card.Body>
                    <Card.Title>Vin</Card.Title>
                    <Card.Text>
                        Vin daté de 1998 issu de la région bordelaise
                    </Card.Text>
                    <Button variant="primary"><HashLink to="/magasin#boisson" style={{color: 'white', textDecoration: 'none'}}>Boisson</HashLink></Button>
                </Card.Body>
            </Card>
        </section>

        </>
    )
}

export default Accueil
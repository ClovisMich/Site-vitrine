import React from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"
import { NavHashLink } from "react-router-hash-link"



const NavigationBar = () =>{
    return (
        <Navbar bg="dark" data-bs-theme="dark">

            <Container>
                <Navbar.Brand>  <Nav.Link as= {Link} to="/">Magasin de vivre</Nav.Link></Navbar.Brand>
                <Nav className="me-auto">
                    <NavDropdown title="Magasin">
                        <NavDropdown.Item>
                            <NavHashLink to="/magasin#boisson" style={{color: 'white', textDecoration: 'none'}}>Boisson</NavHashLink>
                        </NavDropdown.Item>
                            <NavDropdown.Divider/>
                        <NavDropdown.Item>
                        <NavHashLink to="/magasin#nourriture" style={{color: 'white', textDecoration: 'none'}}>Nourriture</NavHashLink>
                        </NavDropdown.Item>
                            <NavDropdown.Divider/>
                        <NavDropdown.Item>
                        <NavHashLink to="/magasin#loisir" style={{color: 'white', textDecoration: 'none'}}>Loisir</NavHashLink>
                        </NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link as= {Link} to="/contact">Contact</Nav.Link>
                    <Nav.Link as= {Link} to="/panier">Panier</Nav.Link>

                </Nav>
            </Container>

        </Navbar>
    )
}

export default NavigationBar
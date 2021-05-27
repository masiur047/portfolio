import React, { useState } from "react";
import {
    Navbar,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    NavbarToggler,
} from "reactstrap";

import { colors } from '../utils/colors'

const NavigationComponent = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <Navbar
                color={colors.one}
                style={{ backgroundColor: colors.two, height: "60px", borderBlockColor: "#000", borderColor: "#000", border: "#000" }}
                light
                className="navbar"
                expand="md"
                fixed="top"
            >
                <NavbarToggler style={{ color: colors.one, backgroundColor: colors.three }} onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>

                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink style={{
                                color: colors.three,
                                backgroundColor: colors.two,
                                borderRadius: 0,
                                width: "200px",
                                textAlign: "center"
                            }} className={'about-university'} href="/profile"><h2>Masiur's Site</h2></NavLink>
                        </NavItem>




                        <NavItem>
                            <NavLink style={{
                                color: colors.three,
                                backgroundColor: colors.two,
                                borderRadius: 0,
                                width: "00px",
                                textAlign: "center"
                            }} href="/profile"></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{
                                color: colors.three,
                                backgroundColor: colors.two,
                                borderRadius: 0,
                                width: "50px",
                                textAlign: "center"
                            }} href="/profile"></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{
                                color: colors.three,
                                backgroundColor: colors.two,
                                borderRadius: 0,
                                width: "100px",
                                textAlign: "center"
                            }} href="/profile"></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{
                                color: colors.three,
                                backgroundColor: colors.two,
                                borderRadius: 0,
                                width: "100px",
                                textAlign: "center"
                            }} href="/profile"></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{
                                color: colors.three,
                                backgroundColor: colors.two,
                                borderRadius: 0,
                                width: "100px",
                                textAlign: "center"
                            }} href="/profile"></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{
                                color: colors.three,
                                backgroundColor: colors.two,
                                borderRadius: 0,
                                width: "100px",
                                textAlign: "center"
                            }} href="/profile"></NavLink>
                        </NavItem>




                        <NavItem>
                            <NavLink style={{
                                color: colors.three,
                                backgroundColor: colors.two,
                                borderRadius: 0,
                                width: "100px",
                                textAlign: "center"
                            }} href="/profile"><h3>Profile</h3></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{
                                color: colors.three,
                                backgroundColor: colors.two,
                                borderRadius: 0,
                                width: "100px",
                                textAlign: "center"
                            }} href="/skills"><h3>Skills</h3></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{
                                color: colors.three,
                                backgroundColor: colors.two,
                                borderRadius: 0,
                                width: "100px",
                                textAlign: "center"
                            }} href="/projects"><h3>Projects</h3></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{
                                color: colors.three,
                                backgroundColor: colors.two,
                                borderRadius: 0,
                                width: "100px",
                                textAlign: "center"
                            }} href="/aboutme"><h3>About</h3></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{
                                color: colors.three,
                                backgroundColor: colors.two,
                                borderRadius: 0,
                                width: "100px",
                                textAlign: "center"
                            }} href="/contactme"><h3>Contact</h3></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{
                                color: colors.three,
                                backgroundColor: colors.two,
                                borderRadius: 0,
                                width: "100px",
                                textAlign: "center"
                            }} href="/cv"><h3>CV</h3></NavLink>
                        </NavItem>

                    </Nav>
                </Collapse>
            </Navbar >
        </>
    );
};

export default NavigationComponent;



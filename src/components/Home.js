import React, { useState } from 'react';
import {
    Container, Row, Col, Collapse,
    Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink
} from 'reactstrap';
import SideMenu from './SideMenu';


const Home = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    const showSettings = (e) => {
        e.preventDefault();
    }

    return (
        <Container id="outSide">
            <Row>
                <div id="App">
                    <SideMenu pageWrapId={"page-wrap"} outerContainerId={"App"} />
                    <div id="page-wrap">
                        <h1 className="display-1">David O. Oliver</h1>
                        <h4 className="display3">Full Stack Junior Web Developer for hire</h4>
                    </div>
                </div>
            </Row>
            <Row>
                <Col>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;

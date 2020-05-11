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
        <Container>
            <div id="App">
                <header className="text-center">
                    <h1 className='display-3'>David O. Oliver</h1>
                    <h4 className="display-5">In a nutshell this is my story.</h4>
                </header>
                <SideMenu pageWrapId={"page-wrap"} outerContainerId={"App"} />
                <main id="page-wrap">
                    
                </main>
            </div>
        </Container>
    );
}

export default Home;

import React from "react";
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Container, Row, Col
} from 'reactstrap';
import SideMenu from './SideMenu';

const Contact = (props) => {
    return (
        <Container>
            <div id="App">
                <SideMenu pageWrapId={"page-wrap"} outerContainerId={"App"} />
                <div id="page-wrap">
                    <h1 className='display-1'>David O. Oliver</h1>
                    <h4 className="display-3">Let's get in touch</h4>
                </div>

                <div>
                    <Row>
                        <Col lg={{ size: 'auto', offset: 3 }} sm={{ size: 'auto', offset: 1 }} xs={{ size: 'auto' }}>
                            <Card>
                                <Card body id='inCard' className="text-center">
                                    <CardTitle className="card-header bg-primary text-center">David O. Oliver</CardTitle>
                                    <CardSubtitle>Contact Me</CardSubtitle>
                                    <CardImg top width="100%" maxwidth="200px" src="https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_960_720.jpg" alt="MY PICTURE HERE" />
                                    <CardText className="text-left">
                                        <ul>davooliver1964@gmail.com</ul>
                                        <ul><CardLink href="https://www.linkedin.com/in/DavidOOliver1984">My Linked-In Profile</CardLink></ul>
                                        <ul><CardLink href="https://github.com/davo1984">My GitHub Page</CardLink></ul>
                                        <ul>(859) 533-6681</ul>
                                    </CardText>
                                </Card>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    );
};
export default Contact;
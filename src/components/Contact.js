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
                <header className="text-center">
                    <h1 className='display-3'>David O. Oliver</h1>
                    <h4 className="display-5">In a nutshell this is my story.</h4>
                </header>
                <SideMenu pageWrapId={"page-wrap"} outerContainerId={"App"} />
                <main id="page-wrap">
                    <Row>
                        <Col lg={{ size: 'auto', offset: 5 }} sm={{ size: 'auto', offset: 1 }} xs={{ size: 'auto' }}>
                            <Card>
                                <CardBody id='inCard' style={{width: "20rem"}}>
                                    <CardTitle className="card-header bg-primary text-center">David O. Oliver</CardTitle>
                                    <CardSubtitle>Contact Me</CardSubtitle>
                                    <CardImg className="border-rounded" top width="100%" maxwidth="200px" src="https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_960_720.jpg" alt="MY PICTURE HERE" />
                                    <CardText className="text-left text-centered">
                                        davooliver1964@gmail.com<br/>
                                        <CardLink href="https://www.linkedin.com/in/DavidOOliver1984">My Linked-In Profile</CardLink><br/>
                                        <CardLink href="https://github.com/davo1984">My GitHub Projects</CardLink><br/>
                                        (859) 533-6681<br/>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </main>
            </div>
        </Container>
    );
};
export default Contact;
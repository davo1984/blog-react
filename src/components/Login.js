import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import axios from 'axios';
import { Button, Row, Col, Container, Card, Form, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SideMenu from './SideMenu';

/**************************
 * Some code to lookat:
 * responsive + login form
 * <Navbar color="white" light expand="md">
        <NavbarBrand href="/"><h4><FontAwesomeIcon icon={faBookmark} />  Bookmark</h4></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/"></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
          <Login
            store={props.store}
            storeTags={props.storeTags}
            token={props.token}
            user={props.user}
            />
        </Collapse>
      </Navbar>
not sure if this enough for context, 
but I created a Login component containing a form 
to have in the navbar, so I had to pass those 4 props down to it
 */


function Login(props) {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const history = useHistory();

    // modal
    const { className } = props;
    const [modal, setModal] = useState(true);
    const toggle = () => setModal(!modal);
    const home = () => setModal(history.push("/"));
    // modal

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
        const data = { email: email, password: password };

        // axios.post('http://localhost:8000/api/login', data)
        //     .then(response => {
        // console.log(response);

        // console.log('user:' + response.data.user.name);
        // console.log('Z');
        // console.log(JSON.stringify(response));
        // console.log('A');
        // console.log('user:' + response.data.user.email);
        // console.log('B');
        // let userData = {
        //     user: response.data.user,
        //     token: response.data.token,
        //     timestamp: new Date().toString()
        // };
        // console.log(userData);
        // console.log('C');

        //     localStorage.setItem('userData', JSON.stringify(userData));
        //     console.log(JSON.stringify(userData));
        //     history.push("/viewStream");
        // })
        // .catch(error => {
        //     console.log(error);
        // });

    }

    return (
        <Container>
            <div id="App">
                <SideMenu pageWrapId={"page-wrap"} outerContainerId={"App"} />
                <div id="page-wrap">
                    <h1 className='display-1'>David O. Oliver</h1>
                    <h4 className="display-3">If you're not me then you can't log in.</h4>
                </div>
                <Form onSubmit={handleSubmit}>    {/* onSubmit={this.handleSubmit(e)} */}
                    <div className="form-group text-left">
                        <label htmlFor="email">Email address</label>
                        <input type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            name="email"
                            className="form-control"
                            id="email"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="password">Password</label>
                        <input type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            name="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                        />
                    </div>
                    <Button color="primary" type="submit" onClick={toggle}>Login</Button>{' '}
                    {/* <Button color="primary" onClick={toggle}>Do Something</Button>{' '} */}
                    <Button color="secondary" onClick={home}>Home</Button>
                </Form>
            </div>
        </Container>
    )
}
export default Login;
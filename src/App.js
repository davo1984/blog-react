import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import Home from './components/Home';
// import Posts from './components/Projects;
// import Posts from './components/Posts';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import './App.css';

function App() {
    return (
        <main>
            <Container>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                    {/* <Route path="/projects" component={Projects} /> */}
                    <Route path="/contact" component={Contact} />
                    <Route path="/about" component={About} />
                    {/* <Route path="/posts" component={Posts} /> */}
                </Switch>
            </Container>
        </main>
    );
}
export default App;
import React, { useState } from 'react';
import {
    Container, Row, Col, Collapse,
    Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink
} from 'reactstrap';
import SideMenu from './SideMenu';

const About = (props) => {
    const aboutText = ["I have always liked to tinker with my hands, to make things work. Programming feels like the ultimate expression of making things work – creating something that gets a specific job done.",
        "I did that working for a contractor for the Navy. They designed and built the LCAC Hovercraft, and I took care of the nuts and bolts – literally, working with logistics support and programming predictive inventory needs for subsequent missions.",
        "Not every job is as exciting as working for a Navy contractor, but a rather pedestrian project can turn out to have some deeply meaningful applications. I helped develop a software database package designed to help environmental laboratories keep track of testing results, which became the software chosen for the Hanford nuclear site cleanup in Washington state.",
        "If programming is the ultimate expression of making things work, then owning my own business is the ultimate expression of freedom. It is an exhilarating and exhausting experience, and it gave me a crash course in business and personnel management I could not have gotten from any MBA. It also couldn't quite support our family.So, like many small businesses, I sold off most of the company and re - evaluated where to go from there.And where I wanted to go was back to programming, which had given me so much satisfaction for so much of my career.",
        "So, here I am again, going after what I really want. I am upgrading my skills under the guidance of the professionals at Awesome Inc to meet what the internet demands now of a programmer/web developer. JavaScript, React JS, PHP, Laravel, MySQL, GitHub, HTML/CSS, agile development – all taught in a fast-paced, intensive environment. Self-starters and quick learners keep ahead of the amount of information being passed on; and now, socially responsible on-line learning emphasizes those abilities even more, along with problem-solving and teamwork skills.",
        "I am ready for a position that will make use of those skills, backed by my real-world experience and hard-won ability to work with many different people."
    ]
    return (
        <Container>
            <div id="App">
                <SideMenu pageWrapId={"page-wrap"} outerContainerId={"App"} />
                <div id="page-wrap">
                    <h1 className='display-1'>David O. Oliver</h1>
                    <h4 className="display-3">In a nutshell this is my story.</h4>
                </div>

                <div id='inSide'>
                    {aboutText.map((item, key) =>
                        <p>{item} {item.id}</p>
                    )}
                </div>
            </div>
        </Container>
    )
}
export default About;
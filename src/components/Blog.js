import React from "react";
import {
    Card, CardText, CardBody, CardTitle,
    CardSubtitle, Container, Row, Col
} from 'reactstrap';
import SideMenu from './SideMenu';
// import Post from './Post';

const Blog = (props) => {
    let posts = {
        "post": [
            {
                "title": "Main Camp week 13, Offsite",
                "subTitle": "",
                "paragraph": [
                    "What was your experience like overall in the Bootcamp?<br>This has been one massive bit of stress which has left me burnt outteetering on the edge of an episode of Major Depression. I guess in thone is never to mention such things. Well, that is just a part of me. Once I get a job and begin mixing with intelligent people, for the first timyears, I'm sure that I'll bounce right back. I always do.",

                    "When you look back on this blog, where do you see yourself growing the most?<br>I grew the most in rekindling my love of programming. I had gotten away from that and had been hiding from the fact that that is what God has put me on this earth to do for a living. What stresses me out the most is the idea of not being able to find a job developing programs.",

                    "Make sure your final portfolio, blog, homepage, final project, and whatever else are online and linked so future employers can learn about everything you did!<br>I hope these posts are of some interest to someone, employer or not. I had fun blogging and hope to continue."
                ]
            },
            {
                "title": "Main Camp week 5, Onsite",
                "subTitle": "Week 9: Frameworks and who's afraid of the CLI?",
                "paragraph": [
                    "Why are CLIs scary?<br>What have you learned about CLIs?",
                    "A CLI is just another tool to be used. I am enjoying relearning them and the power and convience they give anyone who uses them. GUIs are the scary programs. Who knows what they are doing with my data behind that pretty facade.",

                    "Would you build a CLI? What would it do?",
                    "I have no idea why someone would build a CLI other than for a spacific task, like a remote terminal or remote data entry.",

                    "List a some ideas that without a Framework, would take you a long time to code.<br>"
                ]
            }
        ]
    }
    console.log('posts', posts);

    const displayPost = (props) => {
        console.log('in displayPost', props);

        // setToggle(!toggle);
        // setPostId(props);
    }

    return (
        <Container>
            <div id="App">
                <header className="text-center">
                    <h1 className='display-3'>David O. Oliver</h1>
                    <h4 className="display-5">My Awesome Bootcamp Blog</h4>
                </header>
                <SideMenu pageWrapId={"page-wrap"} outerContainerId={"App"} />
                <main id="page-wrap">
                    {/* <Row>
                        <Col lg={{ size: 'auto', offset: 5 }} sm={{ size: 'auto', offset: 1 }} xs={{ size: 'auto' }}> */}
                    {console.log(posts.post.length, 'posts=', posts)}
                    {posts.post.length > 0 ? posts.post.map((post, key) =>
                        <Card className="my-3" style={{ width: '18rem' }} onClick={() => displayPost(posts.post)}>
                            <CardBody>
                                <CardTitle>{post.title}</CardTitle>
                                <CardSubtitle>{post.subTitle}</CardSubtitle>
                                {/* {post.paragraph.length > 0 ? post.paragraph.map((paragraph, key) =>
                                    <CardText>{paragraph}</CardText>
                                ) : null} */}
                            </CardBody>
                        </Card>
                    ) : null}
                    {/* </Col>
                    </Row> */}
                </main>
            </div>
        </Container>
    );
};
export default Blog
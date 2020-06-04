import React from "react";
import {
    Card, CardText, CardBody, CardTitle,
    CardSubtitle, Container, Row, Col
} from 'reactstrap';
import SideMenu from './SideMenu';
// import postsJSON from './postsJSON';

const BlogPost = (props) => {
    console.log('In BlogPost props', props);

    // const posts = postsJSON();
    // console.log('posts', posts, 'length', posts.posts.post.length);

    // const displayPost = (post) => {
    //     BlogPost(post);
    // setToggle(!toggle);
    // setPostId(props);
    // }

    return (
        // <Container>
        //     <div id="App">
        //         <header className="text-center">
        //             <h1 className='display-3'>David O. Oliver</h1>
        //             <h4 className="display-5">My Awesome Bootcamp Blog</h4>
        //         </header>
        //         <SideMenu pageWrapId={"page-wrap"} outerContainerId={"App"} />
        //         <main id="page-wrap">
        <Row>
            {console.log('post props.paragraph.length', props.paragraph.length)}
            <Col lg={{ size: 9 }} sm={{ size: 'auto' }} xs={{ size: 'auto' }}>

                <H2>My Projects</h2>

                <p>
                    Simple Javascript <a href='https://davo1984.github.io/W3-Stories/' title='Silly story generator'>story
        creator.</a>
                </p>
                <p>
                    <a href='https://davo1984.github.io/W3-splash/' title='Splash Page'>Mozilla splash page.</a>
                </p>

                <p>
                    <a href='https://davo1984.github.io/W3-splash/' title='Splash Page'>Library Project in Laravel</a>
                </p>

            </Col>
        </Row>
        //         </main>
        //     </div>
        // </Container>
    );
};
export default BlogPost
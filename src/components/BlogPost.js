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
        <Container>
            <div id="App">
                <header className="text-center">
                    <h1 className='display-3'>David O. Oliver</h1>
                    <h4 className="display-5">My Awesome Bootcamp Blog</h4>
                </header>
                <SideMenu pageWrapId={"page-wrap"} outerContainerId={"App"} />
                <main id="page-wrap">
                    <Row>
                        {console.log('post props.paragraph.length', props.paragraph.length)}
                        <Col lg={{ size: 9 }} sm={{ size: 'auto' }} xs={{ size: 'auto' }}>
                            <div className="card my-5 style='width: 18rem;'">
                                {/*  onClick={() => displayPost(props.post)}> */}
                                <div className="card-body">
                                    <h5 className="card-title">{props.title}</h5>
                                    <h6 className="card-body mb-2 text-muted">{props.subTitle}</h6>
                                    {props.paragraph.length > 0 ? props.paragraph.map((paragraph, key) =>
                                        <p className="card-text">{props.paragraph}</p>
                                    ) : null}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </main>
            </div>
        </Container>
    );
};
export default BlogPost
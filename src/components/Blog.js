import React from "react";
import {
    Card, CardText, CardBody, CardTitle,
    CardSubtitle, Container, Row, Col
} from 'reactstrap';
import SideMenu from './SideMenu';
import postsJSON from './postsJSON';
import BlogPost from './BlogPost';
// import Post from './Post';

const Blog = (props) => {
    const posts = postsJSON();
    console.log('posts', posts, 'length', posts.posts.post.length);

    const displayPost = (currentPost) => {
        console.log('in displayPost currentPost', currentPost);
        BlogPost(currentPost);
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
                    <Row>
                        {console.log(posts.posts.post.length, 'posts=', posts.posts)}
                        {posts.posts.post.length > 0 ? posts.posts.post.map((post, key) =>
                            <Col lg={{ size: 3 }} sm={{ size: 'auto' }} xs={{ size: 'auto' }}>
                                {/* console.log( 'Within display of Card: posts.post=', post ) */}
                                <div className="card my-3 style='width: 18rem;'" onClick={() => displayPost(post)}>
                                    <div className="card-body">
                                        <h5 className="card-title">{post.title}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">{post.subTitle}</h6>
                                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                    </div>
                                </div>
                            </Col>
                        ) : null}
                    </Row>
                </main>
            </div>
        </Container>
    );
};
export default Blog
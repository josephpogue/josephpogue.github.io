import React from 'react'
import { Image, Container, Col, Row } from 'react-bootstrap';
import './Home.css'
import profileImage from '../resources/profile.JPG';


function Home() {
    return (
        <>
            <Container className="home-container">
                <Row className="row-container">
                    <Col className="body-container" xs={{ span: 12, order: 2 }} sm={{ span: 6, order: 1 }}>
                        <div className="tech-intro">
                            <p className="name-intro">
                                Hi! My name is...
                            </p>
                            <h1 className="name-body">
                                Joseph Pogue
                            </h1>
                            <h3>
                                I love all things tech!
                            </h3>
                        </div>
                        <div className="description-body">
                            <p>
                                I am an Emory alumni double majored in Business and Computer Science.
                                I am currently working as a Cloud Consultant @ VMware
                            </p>
                            <p>
                                My passion is in working with developers to create innovative solutions to help solve current problems and optimize for our future
                            </p>
                            <p>
                                Currently working towards UI/UX Design and Web/App Development
                            </p>
                        </div>
                        <button className="btn reachout-button">
                            Reach Out!
                        </button>
                    </Col>
                    <Col className="image-container" xs={{ span: 12, order: 1 }} sm={{ span: 6, order: 2 }}>
                        <Image className="profile-image" src={profileImage}></Image>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home
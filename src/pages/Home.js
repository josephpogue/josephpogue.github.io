import React from 'react'
import { Image } from 'react-bootstrap';
import './Home.css'
import profileImage from '../resources/profile.JPG';

function Home() {
    return (
        <>
            <div className="page-container">

                <div className="body-container">
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
                            Currentlfy working towards UI/UX Design and Web/App Development
                        </p>
                    </div>
                    <button className="btn reachout-button">
                        Reach Out!
                    </button>
                </div>
                <div className="image-container">
                    <Image className="profile-image" fluid="true" src={profileImage}></Image>
                </div>
            </div>
        </>
    )
}

export default Home
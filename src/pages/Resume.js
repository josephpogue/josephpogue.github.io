import React from 'react'
import './Resume.css'

const education = {
    edu1: {
        company: "Emory University",
        title: "Undergraduate",
        location: "Atlanta, Georgia",
        date: "January 2018 - May 2022",
        description: (
            <>
                Bachelors in Business Administration and Computer Science Double Major
                <br />
                <br />
                GPA: 3.7/4.0
            </>
        )
    },
    edu2: {
        company: "Taipei American School",
        title: "High School",
        location: "Taipei, Taiwan",
        date: "Auguest 2012 - May 2018",
        description: (
            <>
                International Baccalaureate Diploma
                <br />
                <br />
                GPA: 3.76/4.00
            </>
        )
    }

}

const experience = {
    exp1: {
        company: "NFI Industries",
        title: "Data Analyst and Operations Intern",
        location: "Fayeteville, North Carolina",
        date: "June 2021 - August 2021",
        description: (
            <>
                - Developed an Excel VBA program to reconcile inbound and inventory products which increased the outbound order fulfillment rate by 75%
                <br />
                <br />
                - Queried inbound reports using IBM Cognos to efficiently place trailers to dock doors and decreased 50% of the distance traveled by forklift drivers
                <br />
                <br />
                - Reviewed the warehouse inventory floor layout and outlined picking routes to optimize distances traveled by drivers
            </>
        )
    },
    exp2: {
        company: "Orderspot",
        title: "Data Analytics and Software Engineering Intern",
        location: "Remote",
        date: "June 2020 - December 2020",
        description: (
            <>
                <p>
                    - Generated 100+ automated quality assurance (QA) tests for partner-side and client-side product interfaces which optimized testing by 75%
                </p>
                <p>
                    - Utilized various KPI tools such as Tableau, SEMrush, and HubSpot to track social media and email marketing strategies
                </p>
                <p>
                    - Coded an HTML parser using Python and BeautifulSoup to scrape ~10,000 emails on Yelp and TripAdvisor, saving 2+ weeks of manual labor time
                </p>
            </>
        )
    },
    exp3: {
        company: "Fareast Service Company (FESCO)",
        title: "Data Analyst Intern",
        location: "Okinawa, Japan",
        date: "June 2019 - July 2020",
        description: (
            <>
                <p>
                    - Optimized company’s inventory management process using Excel programming, reducing total labor by more than 75%
                </p>
                <p>
                    - Consulted on internet marketing strategies such as search engine optimization, web/graphic design, and keyword search which increased traffic flow to the Ecommerce shops, boosting the company to its highest revenue month in July 2019
                </p>
                <p>
                    - Handled 100+ popcorn products and sets for the eCommerce stores and increased overall traffic to product pages by 30%
                </p>
            </>
        )
    }

}
const leadership = {
    led1: {
        company: "CREATEmory",
        title: "Co-Founder and Project Manager",
        location: "Atlanta, Georgia",
        date: "January 2021 - Present",
        description: (
            <>
                <p>
                    - Collaborated with over 15 Emory CS student developers on 4 projects sourced by Emory clubs and organizations
                </p>
                <p>
                    - Assembled 3 developers to code a mobile application for people to build personalized affirmations and improve their mental health
                </p>
            </>
        )
    },
    led2: {
        company: "Emory University",
        title: "Teaching Assistant - Linear Programming",
        location: "Atlanta, Georgia",
        date: "January 2022 - May 2022",
        description: (
            <>
                <p>
                    - Taught Emory business students the practical applications of Linear Programming and how to use Visual Basics Application (VBA) in Excel
                </p>
                <p>
                    - Graded 3 exams throughout the semester and hosted weekly office hours to accommodate for any questions regarding VBA
                </p>
            </>
        )
    },
    led3: {
        company: "Emory University",
        title: "Teaching Assistant - Introduction to Financial Markets",
        location: "Atlanta, Georgia",
        date: "August 2020 - January 2021",
        description: (
            <>
                <p>
                    - Presented on different investment strategies and derivatives such as treasury bonds and equity securities using Stocktrak
                </p>
                <p>
                    -  Graded all homework, assignments, quizzes, and exams for 70+ students which were handed back in a timely manner
                </p>
            </>
        )
    }
}
function Resume() {
    return (
        <>
            <div className="resume-page-container">
                <div className="section-container">
                    <h1>Education</h1>
                    <div className="content-container">
                        {Object.keys(education).map((key) => (
                            <>
                                <div key={key} className="heading-container">
                                    <h2>{education[key].company}</h2>
                                    <h2>{education[key].location}</h2>
                                </div>
                                <div className="title-container">
                                    <h3><i>{education[key].title}</i></h3>
                                    <h3><i>{education[key].date}</i></h3>
                                </div>
                                <div className="description-container">
                                    <p>
                                        {education[key].description}
                                    </p>
                                </div>
                            </>

                        ))}
                    </div>
                </div>
                <div className="section-container">
                    <h1>Experience</h1>
                    <div className="content-container">
                        {Object.keys(experience).map((key) => (
                            <>
                                <div key={key} className="heading-container">
                                    <h2>{experience[key].company}</h2>
                                    <h2>{experience[key].location}</h2>
                                </div>
                                <div className="title-container">
                                    <h3><i>{experience[key].title}</i></h3>
                                    <h3><i>{experience[key].date}</i></h3>
                                </div>
                                <div className="description-container">
                                    <p>
                                        {experience[key].description}
                                    </p>
                                </div>
                            </>

                        ))}
                    </div>
                </div>

                <div className="section-container">
                    <h1>Leadership & Community Engagement</h1>
                    <div className="content-container">
                        {Object.keys(leadership).map((key) => (
                            <>
                                <div key={key} className="heading-container">
                                    <h2>{leadership[key].company}</h2>
                                    <h2>{leadership[key].location}</h2>
                                </div>
                                <div className="title-container">
                                    <h3><i>{leadership[key].title}</i></h3>
                                    <h3><i>{leadership[key].date}</i></h3>
                                </div>
                                <div className="description-container">
                                    <p>
                                        {leadership[key].description}
                                    </p>
                                </div>
                            </>

                        ))}
                    </div>


                </div>
            </div>
        </>
    )
}

export default Resume
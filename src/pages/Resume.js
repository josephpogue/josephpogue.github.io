import React from 'react'
import './Resume.css'

const education = {
    edu1: {
        company: "Emory University",
        title: "Undergraduate",
        location: "Atlanta, Georgia",
        date: "January 2018 - May 2022",
        description: "Bachelors in Business Administration and Computer Science Double Major"
    },
    edu2: {
        company: "Emory University",
        title: "Undergraduate",
        location: "Atlanta, Georgia",
        date: "January 2018 - May 2022",
        description: "Bachelors in Business Administration and Computer Science Double Major"
    }

}

const experience = {
    edu1: {
        company: "Emory University",
        title: "Undergraduate",
        location: "Atlanta, Georgia",
        date: "January 2018 - May 2022",
        description: "Bachelors in Business Administration and Computer Science Double Major"
    },
    edu2: {
        company: "Emory University",
        title: "Undergraduate",
        location: "Atlanta, Georgia",
        date: "January 2018 - May 2022",
        description: "Bachelors in Business Administration and Computer Science Double Major"
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
                            <div key={key} className="heading-container">
                                <h2>{education[key].company}</h2>
                            </div>
                        ))}
                    </div>
                </div>






                <div className="section-container">
                    <h1>Education</h1>
                    <div className="content-container">

                        <div className="heading-container">
                            <h2>Emory University</h2>
                            <h2>Atlanta, Georgia</h2>
                        </div>
                        <div className="title-container">
                            <h3><i>Undergraduate</i></h3>
                            <h3><i>August 2018 - August 2022</i></h3>
                        </div>
                        <div className="description-container">
                            <p>
                                Bachelors in Business Administration and Computer Science Double Major
                            </p>
                            <p>
                                GPA: 3.7/4.0
                            </p>
                        </div>
                    </div>

                </div>
                <div className="section-container">
                    <h1>Experience</h1>
                    <div className="content-container">

                        <div className="heading-container">
                            <h2>NFI Industries</h2>
                            <h2>Fayeteville, North Carolina</h2>
                        </div>
                        <div className="title-container">
                            <h3><i>Data Analyst and Operations Intern</i></h3>
                            <h3><i>June 2021 - August 2021</i></h3>
                        </div>
                        <div className="description-container">
                            <p>
                                - Developed an Excel VBA program to reconcile inbound and inventory products which increased the outbound order fulfillment rate by 75%
                            </p>
                            <p>
                                - Queried inbound reports using IBM Cognos to efficiently place trailers to dock doors and decreased 50% of the distance traveled by forklift drivers
                            </p>
                            <p>
                                - Reviewed the warehouse inventory floor layout and outlined picking routes to optimize distances traveled by drivers
                            </p>
                        </div>
                    </div>
                    <div className="content-container">
                        <div className="heading-container">
                            <h2>Orderspot</h2>
                            <h2>Remote</h2>
                        </div>
                        <div className="title-container">
                            <h3><i>Data Analytics and Software Engineering Intern</i></h3>
                            <h3><i>June 2020 - December 2020</i></h3>
                        </div>
                        <div className="description-container">
                            <p>
                                - Generated 100+ automated quality assurance (QA) tests for partner-side and client-side product interfaces which optimized testing by 75%
                            </p>
                            <p>
                                - Utilized various KPI tools such as Tableau, SEMrush, and HubSpot to track social media and email marketing strategies
                            </p>
                            <p>
                                - Coded an HTML parser using Python and BeautifulSoup to scrape ~10,000 emails on Yelp and TripAdvisor, saving 2+ weeks of manual labor time
                            </p>
                        </div>
                    </div>
                    <div className="content-container">
                        <div className="heading-container">
                            <h2>Fareast Service Company (FESCO)</h2>
                            <h2>Okinawa, Japan</h2>
                        </div>
                        <div className="title-container">
                            <h3><i>Data Analyst Intern</i></h3>
                            <h3><i>June 2020 - December 2020</i></h3>
                        </div>
                        <div className="description-container">
                            <p>
                                - Optimized company’s inventory management process using Excel programming, reducing total labor by more than 75%
                            </p>
                            <p>
                                - Consulted on internet marketing strategies such as search engine optimization, web/graphic design, and keyword search which increased traffic flow to the Ecommerce shops, boosting the company to its highest revenue month in July 2019
                            </p>
                            <p>
                                - Handled 100+ popcorn products and sets for the eCommerce stores and increased overall traffic to product pages by 30%
                            </p>
                        </div>
                    </div>
                </div>

                <div className="section-container">
                    <h1>Leadership & Community Engagement</h1>
                    <div className="content-container">
                        <div className="heading-container">
                            <h2>CREATEmory</h2>
                            <h2>Atlanta, Georgia</h2>
                        </div>
                        <div className="title-container">
                            <h3><i>Co-Founder and Project Manager</i></h3>
                            <h3><i>January 2021 - Present</i></h3>
                        </div>
                        <div className="description-container">
                            <p>
                                - Collaborated with over 15 Emory CS student developers on 4 projects sourced by Emory clubs and organizations
                            </p>
                            <p>
                                - Assembled 3 developers to code a mobile application for people to build personalized affirmations and improve their mental health
                            </p>
                        </div>
                    </div>
                    <div className="content-container">
                        <div className="heading-container">
                            <h2>Emory University</h2>
                            <h2>Atlanta, Georgia</h2>
                        </div>
                        <div className="title-container">
                            <h3><i>Teaching Assistant - Linear Programming</i></h3>
                            <h3><i>January 2022 - May 2022</i></h3>
                        </div>
                        <div className="description-container">
                            <p>
                                - Taught Emory business students the practical applications of Linear Programming and how to use Visual Basics Application (VBA) in Excel
                            </p>
                            <p>
                                - Graded 3 exams throughout the semester and hosted weekly office hours to accommodate for any questions regarding VBA
                            </p>
                        </div>
                    </div>
                    <div className="content-container">
                        <div className="heading-container">
                            <h2>Emory University</h2>
                            <h2>Atlanta, Georgia</h2>
                        </div>
                        <div className="title-container">
                            <h3><i>Teaching Assistant - Introduction to Financial Markets</i></h3>
                            <h3><i>August 2020 - January 2021</i></h3>
                        </div>
                        <div className="description-container">
                            <p>
                                - Presented on different investment strategies and derivatives such as treasury bonds and equity securities using Stocktrak
                            </p>
                            <p>
                                -  Graded all homework, assignments, quizzes, and exams for 70+ students which were handed back in a timely manner
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Resume
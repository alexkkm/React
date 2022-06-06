import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import RoutePage from "./features/route/routepage";
import JSX from "./features/jsxfile";
import States from "./features/states"
import Container from "./container"
import Game from "./projects/tictac/tictac";
import PropsPage from "./features/props";
import TodoPage from "./projects/todo/todo";
import RealTimePage from "./features/realtime";

//Additional decoration
import newsJSON from "./news.json";
import "./index.css";

class Index extends React.Component{
    render(){
        return(
            <div class="index">

                {/* Header */}
                <section id="header">
                    <div class="header container">
                        <div class="nav-bar">
                        <div class="brand">
                            <a href="#home">
                            <h1><span>A</span>lex <span>K</span>ong</h1>
                            </a>
                        </div>
                        <div class="nav-list">
                            <div class="hamburger">
                            <div class="bar"></div>
                            </div>
                            <ul>
                            <li><a href="#home" data-after="Home">Home</a></li>         {/* Home */}
                            <li><a href="#about" data-after="About">About Me</a></li>       {/* About Me */}
                            <li><a href="#skills" data-after="skill">skills</a></li>        {/* Skills */}
                            <li><a href="#projects" data-after="Projects">Projects</a></li> {/* Working Experience */}
                            <li><a href="#contact" data-after="Contact">Contact</a></li>    {/* Contact */}
                            </ul>
                        </div>
                        </div>
                    </div>
                </section>
                
                {/* Home */}
                <section id="home">
                    <div class="home container">
                        <div>
                        <h1>Hello, <span></span></h1>
                        <h1>My Name is <span></span></h1>
                        <h1>Alex <span></span></h1>
                        <a href="#about" type="button" class="designedButton">About Me</a>
                        </div>
                    </div>
                </section>
                
                {/* About Me */}
                <section id="about">
                    <div class="about container">
                        <div class="col-left">
                        <div class="about-img">
                            <img src="./img/img-2.png" alt="img"></img>
                        </div>
                        </div>
                        <div class="col-right">
                        <h1 class="section-title">About <span>Me</span></h1>
                        <h2>FrontEnd Developer and Business Analyst</h2>
                        <p>A Frontend Developer who is studying in CUHK Computer Science, 
                            with proven problem-solving skills, critical thinking, team spirit and technical delivery work experience in an ambiguous and fast-paced environment. 
                            Seeking a challenging career with a progressive organization that provides an opportunity to capitalize my technical skills and abilities in the field of Information Technology (IT) or Business Analyst.</p>
                        <a href="#" class="designedButton">Download Resume</a>
                        </div>
                    </div>
                </section>

                {/* Skills */}
                <section id="skills">
                    <div class="skills container">
                        <div class="skill-top">
                        <h1 class="section-title">SK<span>I</span>ILS</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum deleniti maiores pariatur assumenda quas
                            magni et, doloribus quod voluptate quasi molestiae magnam officiis dolorum, dolor provident atque molestias
                            voluptatum explicabo!</p>
                        </div>
                        <div class="skill-bottom">
                        <div class="skill-item">
                            <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" /></div>
                            <h2>Web Design</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis rerum, magni voluptatem sed
                            architecto placeat beatae tenetur officia quod</p>
                        </div>
                        <div class="skill-item">
                            <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" /></div>
                            <h2>Web Design</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis rerum, magni voluptatem sed
                            architecto placeat beatae tenetur officia quod</p>
                        </div>
                        <div class="skill-item">
                            <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" /></div>
                            <h2>Web Design</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis rerum, magni voluptatem sed
                            architecto placeat beatae tenetur officia quod</p>
                        </div>
                        <div class="skill-item">
                            <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" /></div>
                            <h2>Web Design</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis rerum, magni voluptatem sed
                            architecto placeat beatae tenetur officia quod</p>
                        </div>
                        </div>
                    </div>
                </section>

                {/* Working Experience Section */}
                <section id="projects">
                    <div class="projects container">

                        <div class="projects-header">
                            <h1 class="section-title">Working <span>Experience</span></h1>
                        </div>


                        <div class="all-projects">

                            <div class="project-item">
                                <div class="project-info">
                                    <h1>Capmi Technology Limited</h1>
                                    <h2>June 2020 - May 2021</h2>
                                    <h2>Software Engineer Intern</h2>
                                    <p>Job duty:</p>
                                    <p>    •	Handled the development of Immediate Chatting Software, Database login and management system</p>
                                    <p>    •	Provided maintenance of the software developed</p>
                                    <p>    •	Monitoring and deployment of IT equipment (For 20+ colleagues' computers)</p>
                                </div>
                            </div>

                            <div class="project-item">
                                <div class="project-info">
                                    <h1>Savvy Technology Limited</h1>
                                    <h2>July 2021 - March 2022</h2>
                                    <h2>Software Engineer Intern</h2>
                                    <p>Job duty:</p>
                                    <p>    •	Develop Mobile Application Product of the company: A diary of programming learners</p>
                                    <p>    •	Provided maintenance of the Mobile Application developed</p>
                                    <p>    •	Updated the programming knowledge and Introduced the new tech to the development team members</p>
                                </div>
                            </div>

                            <div class="project-item">
                                <div class="project-info">
                                    <h1>Dai Cheng Hon Holdings</h1>
                                    <h2>June 2022 - Present</h2>
                                    <h2>Part Time Business Analyst</h2>
                                    <p></p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>

                {/* Contact Section*/}
                <section id="contact">
                    <div class="contact container">
                        <div>
                            <h1 class="section-title">Contact <span>info</span></h1>
                        </div>
                        <div class="contact-items">
                            <div class="contact-item">
                                <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png" /></div>
                                <div class="contact-info">
                                <h1>Phone</h1>
                                <h2>+852 68866248</h2>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png" /></div>
                            <div class="contact-info">
                            <h1>Email</h1>
                            <h2>kwaiman.kong@gmail.com</h2>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" /></div>
                            <div class="contact-info">
                            <h1>Address</h1>
                            <h2>RM 2805, BLOCK C, TAK PO GARDEN, NGAU TAU KOWK RD, KOWLOON BAY, KOWLOON</h2>
                            </div>
                        </div>
                        </div>
                    </div>
            </section>

            </div>
        )
    }
}


class OldIndex extends React.Component{
    render(){
        return(
            <div id="Index" className="page">

                <h1>Index Page</h1>

                <h2>News:</h2>
                <ol>
                    <li>{newsJSON.news1.date}   {newsJSON.news1.content}</li>
                    <li>{newsJSON.news2.date}   {newsJSON.news2.content}</li>
                </ol>

                <h2>Finished Features:</h2>
                <ol>
                    <li><Link to="/RoutePage">Route</Link></li>
                    <li><Link to="/Props">Props</Link></li>
                    <li><Link to="/State">States</Link></li>
                    <li><Link to="/JSX">JSX</Link></li>
                    <li><Link to="/RealTime">Real Time</Link></li>
                </ol>

                <h2>Items that developing:</h2>
                <ol>
                    <li><Link to="/Todo">ToDoList</Link></li>
                    
                </ol>
                
                <h2>Projects:</h2>
                <ol>
                    <li><Link to="/Tictac">TicTac</Link></li>
                </ol>

                <h2>New Chapter on DCH!</h2>
                <ol>
                    To be added afterward.
                </ol>
            </div>
        )
    }
}


// App() function are the main function of the webpage
export default function App() {
  return (
    // React Router
    <div>
        <Container children={
        <Router>   
            <Route exact path="/" component={Index}>
            </Route>
            <Route path="/RoutePage" component={RoutePage}>        
            </Route>
            <Route path="/JSX" component={JSX}>        
            </Route>
            <Route path="/Props" component={PropsPage}>        
            </Route>
            <Route path="/State" component={States}>        
            </Route>
            <Route path="/Tictac" component={Game}>        
            </Route>
            <Route path="/Todo" component={TodoPage}>        
            </Route>
            <Route path="/RealTime" component={RealTimePage}>        
            </Route>
            
        </Router>
        }/>
    </div>
  );
}

// the most outter layer Dom render, render the App() function to index.html
ReactDOM.render(<App />, document.getElementById("root"));
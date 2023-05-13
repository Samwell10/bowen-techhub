import './Dashboard.css';
import {RiShieldUserLine, RiMapPinUserLine} from 'react-icons/ri'
import {BsPeople} from 'react-icons/bs'
import people from '../../images/people.png'
import person from '../../images/person.png'
import eclpise from '../../images/eclipse.png'
import eclpise1 from '../../images/eclipse-1.png'
import eclpise2 from '../../images/eclipse-2.png'
import code from '../../images/code.png'
import Sponsor from '../../Components/Sponsor/Sponsor'
import ExecutivePreview from '../../Components/Executives/ExecutivePreview';
import Contact from '../../Components/Contactus/contact';
import Footer from '../../Components/Footer/Footer';
const Dashboard = () => {
    return ( 
        <div className="dashboard">
            <section className="dashboard-head">
                <div className="dashboard-left">
                    <h1 className="dashboard-header">Start your <span>Tech</span><br></br> Career Journey<br></br> with Bowen Tech Hub</h1>
                    <p className="dashboard-text">In the next few years the world is going full force into technology. Join our community today and acquire the skills to fit right in.</p>
                    <div className="dashboard-button">
                        <button className="get-started">Get Started</button>
                        <button className="learn-more">Learn more</button>
                    </div>
                </div>
                <div className="dashboard-right">
                    <div className="dashboard-right-inner">
                        {/* <div className="eclipse-image">
                            <img src={eclpise}></img>
                        </div> */}
                        <div className="people-image">
                            <img src={people}></img>
                        </div>
                        <div className="person-image">
                            <img src={person}></img>
                        </div>
                    </div>
                </div>
            </section>
            <section className="dashboard-sponsor">
                <Sponsor/>
            </section>
            <section className="what-we-do">
                <div className="what-we-do-inner">
                    <div className="what-left">
                        <div className="what-image">
                            <img src={code}></img>
                            <div className="eclipse-1">
                                <img src={eclpise1}></img>
                            </div>
                            <div className="eclipse-2">
                                <img src={eclpise2}></img>
                            </div>
                        </div>
                    </div>
                    <div className="what-right">
                        <h2 className="what-header">What we do at <br></br><span>Bowen Tech Hub</span></h2>
                        <div className="what-text">Lorem ipsum dolor sit amet consectetur. Sagittis nibh sit massa nunc quis faucibus lectus. Mi ipsum et sit est nec risus eu pretium dolor. Pellentesque quisque sed feugiat ultrices tincidunt tortor convallis. Posuere suspendisse arcu magna interdum. Integer commodo bibendum diam eleifend tortor cras. Fringilla et leo pellentesque mattis est sed elementum pulvinar. Posuere hendrerit vel arcu justo pharetra velit eget scelerisque. Massa habitant mi arcu mauris aenean etiam. Morbi imperdiet massa viverra vel mauris id mauris. Montes tortor lacus sollicitudin turpis ultricies orci. Malesuada egestas laoreet porttitor lectus accumsan viverra fermentum urna. Est sit fringilla id convallis suscipit dolor lectus aliquam eget.</div>
                        <div className="what-button-outer">
                            <button className="what-button">Learn more</button>
                        </div>
                    </div>
                </div>
                <h3 className="meet-executives">Meet Our Executives</h3>
            </section>
            <section className="dashboard-executive">
                <ExecutivePreview/>
            </section>
            <section className="dashboard-achievement">
                <h3 className="meet-executives achievement-head">Let’s get started</h3>
                <div className="achievement-container">
                    <div className="achievement students">
                        <RiShieldUserLine/>
                        <h2 className="achievement-numbers">200+</h2>
                        <p className="achievement-title">Trained Students</p>
                    </div>
                    <div className="achievement communities">
                        <BsPeople/>
                        <h2 className="achievement-numbers">5+</h2>
                        <p className="achievement-title">Communities</p>
                    </div>
                    <div className="achievement internship">
                        <RiMapPinUserLine/>
                        <h2 className="achievement-numbers">50+</h2>
                        <p className="achievement-title">Internship Placements</p>
                    </div>
                </div>
            </section>
            <section className="dashboard-contact">
                <Contact/>
            </section>
            {/* <section>
                <Footer/>
            </section> */}
        </div>
    );
}
 
export default Dashboard;
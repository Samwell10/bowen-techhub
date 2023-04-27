import Card from "../Authentication/Card/Card";
import styles from '../Authentication/RightBlock/RightBlock.module.css'
import Inputfield from "../Inputfield/Inputfield";
import Textfield from "../Inputfield/Textfield";
import './contact.css';
const Contact = () => {
    return ( 
        <div className="contact">
            <div className="leave-message">
                <h2 className="leave-message-head">Leave Us a Message</h2>
                <p className="leave-message-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Sed ut perspiciatis unde omnis iste natus error</p>
            </div>
            <div className='message-form' >
                <h2 className="message-form-head">Leave Us a Message</h2>
                <p className="message-form-body">We would Love to hear from you</p>
                <form className="contact-form">
                    <div className="form-1">
                        <Inputfield
                            label="Your name"
                            type="text"
                        />
                    </div>
                    <div className="form-1">
                        <Inputfield
                            label="Email address"
                            type="email"
                        />
                    </div>
                    <div className="form-1">
                        <Inputfield
                            label="Phone number"
                            type="text"
                        />
                    </div>
                    <div className="form-1">
                        <Textfield
                            label="Your Message"
                            type="text"
                        />
                    </div>
                    <div className="contact-submit">
                        <button>Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;

import UserClass from "./UserClass";
import User from "./User";
import React from 'react';

class About extends React.Component {
    constructor(props) {
        super(props);

        console.log('Parent Constructor');
    }

    componentDidMount() {
        console.log('Parent Component Did Mount');
    }

    render() {
        console.log('Parent Render');
        return (
            <div>
                <h1>About Us</h1>
                <p>This is Namaste React Course</p>
                <div className="about-container">
                    <User name="Suraj Gholap" location="Pune, India" />
                </div>
            </div>
        );
    }
}

export default About;
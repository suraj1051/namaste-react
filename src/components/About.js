import UserClass from "./UserClass";
import User from "./User";
import React from 'react';

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('Parent Component Did Mount');
    }

    render() {
        return (
            <div className="m-4 p-4">
                <h1 className="text-2xl font-bold">About Us</h1>
                <p className="text-lg">This is Namaste React Course</p>
                <div className="about-container">
                    <User name="Suraj Gholap" location="Pune, India" />
                </div>
            </div>
        );
    }
}

export default About;
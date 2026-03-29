import React, { use } from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy Name",
                location: "Dummy Location"
            }
        };
        // console.log(this.props.name + ' Child Constructor');
    }

    async componentDidMount() {
        // console.log(this.props.name + ' Child Component Did Mount');
        const data = await fetch("https://api.github.com/users/suraj1051");
        const json = await data.json();

        this.setState({
            userInfo: json
        });
    }

    componentDidUpdate() {
        console.log(this.props.name + ' Child Component Did Update');
    }

    componentWillUnmount() {
        console.log(this.props.name + ' Child Component Will Unmount');
    }

    render() {
         console.log(this.state.userInfo);

        const { name, location } = this.state.userInfo;
        return (
            <div className='user-card'>
                <img src="https://www.kindpng.com/picc/m/451-4517876_default-profile-hd-png-download.png" alt="user" />
                <p>Name: {name}</p>
                <p>Location: {location}</p>
            </div>
        );
    }
}

export default UserClass;
import { useEffect, useState } from "react";

const User = (props) => {
    const [count, setCount] = useState(10);

    useEffect(() => {
        console.log('useEffect Called');
        const timer = setInterval(() => {
            console.log('Interval Called');
        }, 1000);

        return () => {
            console.log('useEffect Return Function Called');
            clearInterval(timer);
        }

    }, []);

    return (
        <div className='user-card'>
            <img src="https://www.kindpng.com/picc/m/451-4517876_default-profile-hd-png-download.png" alt="user" />
            <h2>{count}</h2>
            <button onClick={() => {
                setCount(count + 1);
            }}>
                Count Increase</button>
            <h2>{props.name}</h2>
            <p>Software Engineer</p>
            <p>{props.location}</p>
        </div>
    );
}

export default User;
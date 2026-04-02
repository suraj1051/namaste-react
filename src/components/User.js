import { useEffect, useState } from "react";

const User = (props) => {
    const [count, setCount] = useState(10);

    useEffect(() => {
        const timer = setInterval(() => {
            console.log('Interval Called');
        }, 1000);

        return () => {
            console.log('useEffect Return Function Called');
            clearInterval(timer);
        }

    }, []);

    return (
        <div className="m-4 p-4 w-52 h-72 rounded-lg hover:bg-gray-200">
            <img src="https://www.kindpng.com/picc/m/451-4517876_default-profile-hd-png-download.png" alt="user" />
            <h2>{count}</h2>
            <button onClick={() => {
                setCount(count + 1);
            }}>
                Count Increase</button>
            <h2 className="text-lg font-bold">{props.name}</h2>
            <p className="text-lg">Software Engineer</p>
            <p className="text-lg">{props.location}</p>
        </div>
    );
}

export default User;
import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();

    console.log(error);
    return (
        <div>
            <h1>Something went wrong!</h1>
            <h1>Oops! 404 Not Found</h1>
            <p>{error.status + " " + error.statusText}</p>
        </div>
    );
}

export default Error;
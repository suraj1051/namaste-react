import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();

    console.log(error);
    return (
        <div className="m-4 p-4">
            <h1 className="text-2xl font-bold">Something went wrong!</h1>
            <h1 className="text-2xl font-bold">Oops! 404 Not Found</h1>
            <p className="text-lg">{error.status + " " + error.statusText}</p>
        </div>
    );
}

export default Error;
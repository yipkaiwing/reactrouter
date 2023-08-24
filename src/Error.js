import { useRouteError } from "react-router-dom";

const Error = () => {

    const error = useRouteError();

    return (
        <>
            <h1 className="font-bold text-4xl mb-5 mt-5">Error Occured!</h1>
            <h2 className=" font-bold text-3xl text-red-700">{error.statusText || error.message}</h2>
        </>
    )
}

export default Error;
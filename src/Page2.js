import { Link } from "react-router-dom";

const Page2 = () => {
    return (
        <>
            <h1 className=" text-7xl font-bold, text-red-400 mb-5">This is Page 2</h1>
            <Link to="/" className="text-5xl text-green-400">Back to Page 1</Link>
        </>
       
    )
}

export default Page2;
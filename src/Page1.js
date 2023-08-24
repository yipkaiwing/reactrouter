import { Link } from "react-router-dom";

const Page1 = () => {
    return (
        <>
            <h1 className="  text-7xl font-bold, text-red-400 mb-5 " >This is Page 1</h1>
            {/* <a href="/page-2" className="text-4xl text-green-400">Link to Page 2</a> */}
            <Link to="/page-2" className="text-4xl text-green-400">Link to Page 2</Link>
        </>
        
    )
}

export default Page1;
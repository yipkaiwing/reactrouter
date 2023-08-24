import { Link, Outlet, NavLink } from "react-router-dom";

// Master layout, it is the template
const Root = () => {
    return (
        <>
            <ul className="flex gap-x-10 text-2xl mb-5 mt-5 bg-pink-400 px-5 py-5 font-bold">
                <li>
                    <NavLink className={({ isActive }) => isActive ? ' text-blue-700 font-bold' : ''} to ="/">Page 1</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? ' text-blue-700 font-bold' : ''}  to ="/page-2">Page 2</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? ' text-blue-700 font-bold' : ''}  to ="/articles">Articles</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? ' text-blue-700 font-bold' : ''}  to ="/article/50">/article/50</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? ' text-blue-700 font-bold' : ''}  to ="/contact">/Contact</NavLink>
                </li>
            </ul>

            <hr/> 
            {/* The <hr> tag defines a thematic break in an HTML page (e.g. a shift of topic).
            The <hr> element is most often displayed as a horizontal rule that is used to separate content (or define a change) in an HTML page. */}

            {/* (Page Content) */}
            {/* It will show the content of the page 1 and 2 */}

            <Outlet /> 
        </>
    )

};

export default Root;
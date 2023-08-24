import { useLoaderData } from "react-router-dom";
// import { useState, useEffect } from "react";

const Article = () => {
    
    const loaderData = useLoaderData();
    // const [article, setArticle] = useState(null);

    // useEffect(() => {

    // There are two writing styles to handle promise, the first one is then and the second one is try-catch  async await 

/*      // load article: then approach 
        fetch(`https://jsonplaceholder.typicode.com/posts/${loaderData.id}`)
        .then((response) => {
            return response.json();
        }) 
        .then((json) => {
            setArticle(json);
        })
        .catch((err) => {
            console.error(err);
        });
    }, []); */

    // load article: async await approach, we cannot add async next to useEffect 
/*   const loadData = async () => {

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${loaderData.id}`)
            const json = await response.json();
            setArticle(json);
        } catch (err) {
            console.error(err)
        };
    };
    
    loadData();

    }, []); */

    // Another simplifed writing style based on the above second one: 括住成個function然後直接執行 IIFE
    // IIFE : 立即呼叫的函式表示式 https://ithelp.ithome.com.tw/articles/10193313
    // (async () => {

    //     try {
    //         const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${loaderData.id}`)
    //         const json = await response.json();
    //         setArticle(json);
    //     } catch (err) {
    //         console.error(err)
    //     };
    // })();
    
    // }, []);

    return (
        <>
            <h1 className="px-5 text-3xl font-bold mb-5">Article Page</h1>
            <h2 className=" px-5 text-3xl font-semibold mb-5">ID: { loaderData.id}</h2>

            {/* {article !==null &&  */}
            {/* React router 入到來，一定有data ，但會有幾秒空白頁，UI 不完美 */}
                <>
                    <h2 className=" px-5 text-3xl font-semibold mb-5">Title: {loaderData.data.title}</h2>
                    <h2 className=" px-5 text-3xl font-semibold mb-5">Body: {loaderData.data.body}</h2>
                </>
            {/* } */}

            {/* {article === null && <h2>Loading Data ... Please wait</h2>} */}
        
        </>
    )
}

export default Article;

// <h3 className=" px-5 text-2xl font-extrabold"> All JASON: {JSON.stringify(loaderData.data.body)}</h3>
// Converts a JavaScript value ( array or object) to a JavaScript Object Notion (JSON) string.
// JSON stands for JavaScript Object Notation
// JSON is a lightweight format for storing and transporting data
// JSON is often used when data is sent from a server to a web page
// JSON is "self-describing" and easy to understand
// This example defines an employees object: an array of 3 employee records (objects):
//   {
//      "employees":[
//          {"firstName":"John", "lastName":"Doe"},
//          {"firstName":"Anna", "lastName":"Smith"},
//          {"firstName":"Peter", "lastName":"Jones"}
//    }
// JSON Syntax Rules
// Data is in name/value pairs
// Data is separated by commas
// Curly braces hold objects
// Square brackets hold arrays
// JavaScript Object Notation
// The JSON format is syntactically identical to the code for creating JavaScript objects.
// Because of this similarity, a JavaScript program can easily convert JSON data into native JavaScript objects.
// The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. 
// Code for reading and generating JSON data can be written in any programming language.




// The useEffect hook is called with a function and an empty dependency array []. 
// This means that the effect will be executed only once, after the initial render of the component.

// Inside the effect, there's an asynchronous operation to fetch an article from a JSON API. 
// The URL includes a dynamic part ${loaderData.id}, which suggests that this code might be a part of a larger component 
// and the loaderData object contains information needed to fetch a specific article.

// The fetch function is used to make an HTTP GET request to the provided URL. It fetches the article data from the specified URL.

// The fetched response is processed using the .then() method. The first .then() callback takes the response
// and converts it to JSON format using the .json() method, returning a Promise that resolves with the parsed JSON data.

// The second .then() callback is executed after the JSON data has been successfully parsed. 
// It sets the fetched article data using the setArticle function. 
// This function is likely a state update function from the React component's state management system. 
// It updates the state with the fetched article data, causing a re-render of the component with the new data.

// If there's an error during the fetch or parsing, the .catch() callback is executed. It logs the error to the console.

// Finally, the code seems to be incomplete as it lacks the closing part of the component's return statement. 
// The code snippet you've provided ends with return ( but doesn't include the JSX elements that should follow.
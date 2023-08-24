import { Link, useLoaderData } from "react-router-dom"

const ArticleList = () => {

    const loaderData = useLoaderData();
    return (

        <ul className="px-10 py-5 mb-5">
            {/* Test the data reterive result OK or not ?  */}
            {/* <li>{JSON.stringify(loaderData)}</li> */} 

            {loaderData.list.map((article) => {
                return (
                    <li key={article.id} className="list-decimal font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        <Link to={`/article/${article.id}`}>
                            {article.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default ArticleList;
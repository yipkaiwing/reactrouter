import { Form, useActionData } from "react-router-dom";

const Contact = () => {
    const actionData = useActionData();

    return (
        <Form className="flex flex-col justify-center items-center" action="/contact" method="post">
            <div className="px-5 font-semibold text-2xl">
                <h1 className=" text-6xl mb-5">Contact</h1>
                <label htmlFor="name">
                    Name:
                </label>
                <input
                    className="mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name here.."
                />

                <br />

                Gender:
                <input 
                    className="ml-4"
                    type="radio"
                    id="male"
                    name='gender'
                    value="male"
                />
                <label
                    className="ml-4"
                    htmlFor="male"
                >
                    Male
                </label>

                <input 
                    className="ml-4"
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                />
                <label 
                    className="ml-4"
                    htmlFor="female"
                >
                    Female
                </label>

                <br />
                <br />


                <label
                    htmlFor="bio"
                >
                    Bio:
                </label>  
                <textarea
                    className="mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="bio"
                    name="bio"
                >
                </textarea> 

                <br />

                <button
                    className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                    type="submit"
                >
                    Submit
                </button>

                <p className=" mt-5 text-cyan-600">
                    {actionData?.message}
                </p>
            </div>
        </Form>
    )
}

export default Contact;
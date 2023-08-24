import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, redirect} from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import Root from './Root';
import Error from './Error';
import Article from './Article';
import ArticleList from './ArticleList';
import Contact from './Contact';

// A config file of the react router which is the portal of the App 入口
const router = createBrowserRouter([
  {
    path: '/',
    element:<Root />, // Master layout 
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Page1 />
      },
      {
        path: '/page-2',
        element: <Page2 />
      },
      {
        path: '/contact',
        element: <Contact />,
        action: async ({ request }) => {
            const formData = await request.formData();
            // console.log(formData.get('name'));
            const name = formData.get('name');
            const gender = formData.get('gender');
            const bio = formData.get('bio');

            // Make API request 
            // For example, save those data into database / send email, ... etc 
            // Fill in the html form --> user submit by post method --> go to the contact component --> index page action request --> 
            // From component --> useActionData to show the data return the data 

            const message = `You have submitted name: ${name}, gender: ${gender}, bio: ${bio}}`;

            return {
              message:  message,
          }
          // The usage of redirect,redirect to the page 1
          // return redirect('/');
        },
      },

      {
        path: '/articles',
        element: <ArticleList />,
        loader: async () => {
          const reponse = await fetch('https://jsonplaceholder.typicode.com/posts')
          const json = await reponse.json();

          return {
            list: json,
          }
        },
      
      },
      {
        path: '/article/:id', // dynamic value
        element: <Article />,
        loader: async ({params}) => {

          const id = params.id; // user input the id in the URL, the system pass the params to the fetch 
          // Then we get the data from the external API and changhe into JSON and then return 
          // The Component get the data via useLoaderData() and then it can display the data easily 

          // load data from external API
          // React router 入到來，一定有data ，但會有幾秒空白頁，UI 不完美
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`) ;
          const json = await response.json();


          // in the Article componemt, we can reterive the below retrun result by useLoaderData
          return {
            id: id,
            data: json  // the name of the json is called data 
          // Finally, the Artcile will load the data by its own fetch promise, so we comment the above fetch coding 
          // just pass the id to the Articke component 
          }
        }
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);


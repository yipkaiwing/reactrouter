fetch('https://jsonplaceholder.typicode.com/posts/50')
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log(json);
    });

// async function loadArticle() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/50') ;
//     const json = await response.json();

//     console.log(json);
// }

// loadArticle();
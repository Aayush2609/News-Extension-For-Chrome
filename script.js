fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(jokeData => {
        const jokeText = jokeData.attachments[0].text;
        const jokeElement = document.getElementById('jokeElement');
        jokeElement.innerHTML = jokeText;
    })


// fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=218c5f76a51049889049227a48a510e7')
//     .then(data => data.json())
//     .then(newsData => {
//         window.onload = function what() {
//             const newsText = newsData.articles[0].content;
//             const newsElement = document.getElementById('newsElement');
//             newsElement.innerHTML = newsText;
//         }
//     })
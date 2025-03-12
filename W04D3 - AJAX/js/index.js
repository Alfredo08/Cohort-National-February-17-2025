
const dogForm = document.querySelector('.dog-image-info');

dogForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const numOfDogs = document.querySelector('#number-of-dogs').value;
    const URL = `https://dog.ceo/api/breeds/image/random/${numOfDogs}`;
    const settings = {
        method: 'GET'
    };

    $.get(URL, settings)
        .done((data) => {
            $('.dog-results').empty();
            data.message.forEach((dogImage) => {
                $('.dog-results').append(`<img class="dog-image" src="${dogImage}" alt="Image of a dog">`);
            })
        })
        .fail((error) => {
            console.log("Something went wrong.", error)
        });
    
    /*
    try {
        const response = await fetch(URL, settings);
        if(!response.ok){
            throw new Error();
        }
        const data = await response.json();
        const dogResults = document.querySelector('.dog-results');
        dogResults.innerHTML = "";
        for(let i = 0; i < data.message.length; i ++){
            dogResults.innerHTML += `
                <img class="dog-image" src="${data.message[i]}" alt="Image of a dog">
            `;
        }
    }
    catch(error){
        console.log("Something went wrong");
    }

    
    fetch(URL, settings)
        .then((response) => {
            if (! response.ok){
                throw new Error();
            }
            return response.json(); 
        })
        .then((data) => {
            const dogResults = document.querySelector('.dog-results');
            dogResults.innerHTML = "";
            for(let i = 0; i < data.message.length; i ++){
                dogResults.innerHTML += `
                    <img class="dog-image" src="${data.message[i]}" alt="Image of a dog">
                `;
            }
        })
        .catch((error) => {
            console.log("Something went wrong");    
        })
    */
});

const newsForm = document.querySelector('.news-info');

newsForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchCriteria = $('#search-criteria').val();
    const numOfNews = $('#number-of-news').val();
    const API_KEY = "place_your_apikey_here";

    $.ajax({
        url: "https://newsapi.org/v2/everything",
        data : {
            q: searchCriteria,
            pageSize: numOfNews
        },
        headers: {
            'X-Api-Key': API_KEY
        },
        method: 'GET',
        success: (data) => {
            $('.news-results').empty();
            for(let i = 0; i < data.articles.length; i ++){
                $('.news-results').append(`
                    <h2> ${data.articles[i].title} </h2>
                    <img src="${data.articles[i].urlToImage}" alt="${data.articles[i].title}" >
                    <p> Author: ${data.articles[i].author} </p>
                    <p> ${data.articles[i].description} </p>
                    <p> <a href="${data.articles[i].url}" target="_blank"> Full article </a> </p>
                `);
            }
        },
        error: (msg) => {
            console.log(msg);
        }
    })
});
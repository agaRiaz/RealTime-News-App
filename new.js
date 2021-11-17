//Hamburger 
burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
navLeft = document.querySelector(".navLeft");
search = document.querySelector(".search");



burger.addEventListener('click',()=>{
    search.classList.toggle('v-class-resp');
    navLeft.classList.toggle('v-class-resp');
    navbar.classList.toggle('navToggle');
});



let apiKey = ''

// Grab the news container
let newsCard = document.getElementById('noteCard');


// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news = `<div class="cardBody" id="cardBody${index}">
            <div class="cardImg"><img src="${element["urlToImage"]}" id="cardImg${index}"alt=""></div>

            <div class="cardTitle" id="cardTitle${index}">${element["title"]}</div>
            <div class="cardText" id="cardText${index}">${element["content"]}</div>
           

            <div><button id="${index}" class="delBtn"><a href="${element['url']}" target="_blank">ReadMore....</a></button></div>
        </div>`;

            newsHtml += news;
        });
        newsCard.innerHTML = newsHtml;
    }
    else {
        newsCard.innerHTML = "<h2>Please Add Your News API Key</h2>";

    }
    
}



xhr.send();



// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const artCards = document.querySelector ('.cards-container');

axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        console.log(response);
        
        response.data.articles.bootstrap.forEach( e => {
            artCards.appendChild(ArtMaker(e));
        })
        response.data.articles.javascript.forEach( e => {
            artCards.appendChild(ArtMaker(e));
        })
        response.data.articles.technology.forEach( e => {
            artCards.appendChild(ArtMaker(e));
        })
        response.data.articles.jquery.forEach( e => {
            artCards.appendChild(ArtMaker(e));
        })
        response.data.articles.node.forEach( e => {
            artCards.appendChild(ArtMaker(e));
        })

    })
    .catch (error => {console.log("The data was not returned", error)})


function ArtMaker (response) {
     const
     card = document.createElement('div');
     headline = document.createElement('div');
     author = document.createElement('div');
     picbox = document.createElement('div');
     pic = document.createElement('img');
     autName = document.createElement('span');

     card.classList.add('card');
     headline.classList.add('headline');
     author.classList.add('author');
     picbox.classList.add('img-container');

     headline.textContent = response.headline;
     author.textContent = response.authorName;
     pic.src = response.authorPhoto;
     
     card.appendChild(headline);
     card.appendChild(author);
     author.appendChild(picbox);
     author.appendChild(autName);
     picbox.appendChild(pic);


     return card
}
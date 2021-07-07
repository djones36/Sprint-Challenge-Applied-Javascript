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
axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
.then((success) => {
    console.log('Article ',success);
    Object.values(success.data.articles).forEach((item) => {
        item.forEach((item) => {
            let cardContainer = document.querySelector(".cards-container");
            cardContainer.appendChild(articleCreator(item));
        })
    }) 
})

.catch(fail => {
    console.log('Article ', fail);
})
//creator function
function articleCreator(axiosData){
    //create elements
    let cardDiv = document.createElement("div");
    let headlineDiv = document.createElement("div");
    let authorDiv = document.createElement("div");
    let imgDiv = document.createElement("div");
    let img = document.createElement("img");
    let span = document.createElement("span");

    //define classes
    cardDiv.classList.add("card");
    headlineDiv.classList.add("headline");
    authorDiv.classList.add("author");
    imgDiv.classList.add("img-container");

    //add content
    headlineDiv.textContent = axiosData.headline;
    img.src = axiosData.authorPhoto;
    span.textContent = axiosData.authorName;

    //append content to div
    imgDiv.appendChild(img);
    authorDiv.appendChild(imgDiv);
    authorDiv.appendChild(span);
    headlineDiv.appendChild(authorDiv);
    cardDiv.appendChild(headlineDiv);

    return cardDiv;
} 
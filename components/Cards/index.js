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
const cardsContainer = document.querySelector('.cards- container')
axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(success => {
    console.log('Article' ,success);
    const articles = success.data.articles
  })
  .catch(fail => {
      console.log('Article ', fail);
  })

  function articleCreator(objData){
      let cardDiv = document.createElement('div');
      let headlineDiv = document.createElement('div');
      let authorDiv = document.createElement('div');
      let imgDiv = document.createElement('div');
      let img = document.createElement('img');
      let span = document.createElement('span');

      //class
      cardDiv.classList.add('card');
      headlineDiv.classList.add('headline');
      authorDiv.classList.add('author');
      imgDiv.classList.add('img-container');

      //Set content
      headlineDiv.textContent = objData.headline;
      img.src = `${objData.authorPhoto}`;
      span.textcontent = `By ${objData.authorName}`;

      //structure of elements
      cardDiv.appendChild(headlineDiv);
      cardDiv.appendChild(authorDiv);
      authorDiv.appendChild(imgDiv);
      imgDiv.appendChild(img);
      authorDiv.appendChild(span);
    
      return cardDiv;
  }

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

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(success => {
    console.log('Article' ,success);
    const articles = success.data.articles
    const cardsContainer = document.querySelector('.cards- container')

    articles.bootstrap.forEach(card => {
        cardsContainer.appendChild(articleCreator(card.headline, card.authorPhoto, card.authorName));
    })

    // articles.javascript.forEach(article => {
    //    cardsContainer.appendChild(articleCreator(card.headline, card.authorPhoto, card.authorName));
    // })

    // articles.jquery.forEach(article => {
    //     cardsContainer.appendChild(articleCreator(card.headline, card.authorPhoto, card.authorName));
    // })

    // articles.technology.forEach(article => {
    //     cardsContainer.appendChild(articleCreator(card.headline, card.authorPhoto, card.authorName));
    // })
  })
  .catch(fail => {
      console.log('Article ', fail);
  })

  function articleCreator(cardheadline, authorImg, author){
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
      headlineDiv.textContent = cardheadline;
      img.src = authorImg;
      span.textcontent = `By ${author}`;

      //structure of elements
      cardDiv.appendChild(headlineDiv);
      cardDiv.appendChild(authorDiv);
      authorDiv.appendChild(imgDiv);
      imgDiv.appendChild(img);
      authorDiv.appendChild(span);
    
      return cardDiv;
  }

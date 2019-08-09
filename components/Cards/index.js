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
  })
  .catch(fail => {
      console.log('Article ', fail);
  })

  function articleCreator(){
      let cardDiv = document.createElement('div');
      let headlineDiv = document.createElement('div');
      let authorDiv = document.createElement('div');
      let imgDiv = document.createElement('div');
      let img = document.createElement('img');
      let span = document.createElement('span');
  }

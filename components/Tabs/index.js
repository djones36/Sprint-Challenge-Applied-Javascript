// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then((success) =>{
    success.data.topics.forEach( (content) => {
      let tabData = document.querySelector(".topics");
      tabData.appendChild(tabCreator(content));
    })
    console.log('Tab' ,success);
  })
function tabCreator(axiosData){
  let tab = document.createElement('div');
  tab.classList.add('tab');
  tab.textContent = axiosData;   

  return tab;
}

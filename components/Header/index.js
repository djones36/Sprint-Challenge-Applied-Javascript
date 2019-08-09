// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header(){
    //query select element
    const headerParent = document.querySelector('.header-container');
    headerParent.appendChild(headerCreator());
    function headerCreator(){
    //Define new elements
    const header = document.createElement('div');
    const spanOne = document.createElement('span');
    const h1 = document.createElement('h1');
    const spanTwo = document.createElement('span');
    //set class names
    header.classList.add('header');
    spanOne.classList.add('date');
    spanTwo.classList.add('temp');
    //set textcontnent
    spanTwo.textContent = "MARCH 28, 2019";
    h1.textContent = "Lambda Time";
    spanTwo.textContent = "98°";
    //setup structure of elements
    headerParent.appendChild(header);
    header.appendChild(spanOne);
    header.appendChild(h1);
    header.appendChild(spanTwo);
    
    return header;
    };
}

// REF: https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/

/**********************************
  CONFIGURE JSON CALL
**********************************/ 
// The API feed
const getStuff = 'https://gist.githubusercontent.com/rhispar/172d292dfd4138f45fa499c34aa010ac/raw/1d9f1d61b689a78dd2a3dc4f31dbceb659cc9420/puppyrecipe.json';

// Do stuff with returned data
let doStuff = function(data) {
  let title,ingredients, href, thumbnail;
  for ( i=0; i < data.results.length; i++ ) {
  
    title = data.results[i].title;
    ingredients = data.results[i].ingredients;
    href = data.results[i].href;
    thumbnail = data.results[i].thumbnail;
   
       const template = `<div id="recipe">
                      <h2 id="recipeTitle">${title}</h2> 
                      <a href="${href}"><img id="thumb" href="${href}" src="${thumbnail}"/></a>
                      <p id="ingreds"><b>Ingredients: </b>${ingredients}</p>
                      </div>`;

    $('#app').append( template ); 

  } 
  
};

/************************************
  GET JSON FROM API
************************************/ 
$.getJSON( getStuff, doStuff);


/************************************
  SHOW (DISPLAY ON PAGE)
************************************/ 

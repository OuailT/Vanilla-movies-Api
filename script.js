//grab the element from the document
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const main = document.getElementById("main");


//create a function to fetch the data
const GetMovie = async () => {
    const response = await fetch(`${URL}`);
    const data = await response.json();
    showMovies(data.results);
}

GetMovie();

//Create a function to fetch the data 
// [] forEach Element i should create a div and add class

function showMovies(movies) {
    //loop through the data and for each movie we create a new div
    movies.forEach((movie)=> {
        //destructure the object
        const {poster_path, title, overview } = movie

        //create a div
        const movieCard = document.createElement("div");
        movieCard.classList.add("card");
        
        movieCard.innerHTML= `
        <img src=${IMGPATH + poster_path } alt=${title} />
        <h1>${title}</h1>
        <p>${overview}</p>
        `;
        //implement movie properties into the inner HTML of movieCard
        main.appendChild(movieCard);
    });
    
}

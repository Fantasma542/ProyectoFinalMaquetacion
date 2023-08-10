
class Movie {
    constructor(title, releaseYear, actors, writer, director, photo) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.actors = actors;
        this.writer = writer;
        this.director = director;
        this.photo = photo;
    }
// showDatesMovie(){
    //   console.log("El titulo es " + this.title)
    //   console.log("El año de creacion es " + this.releaseYear)
    //   console.log("La nacionalidad es " + this.nacionality)
    //   console.log("El genero es " + this.genre)
    //   console.log(this.actors)
    //   console.log(this.director)
    //   console.log(this.writer)
    //   console.log(this.photo)
      
    // }
}  

let pelicula1 = new Movie("Thelma & Louis",1991,"Comedia","USA", "./strass/thelma.jpg")

let pelicula2 = new Movie("Titanic",1997,"Romance","Usa", "./strass/titanic.jpg")

let pelicula3 = new Movie("Mamma Mia",2008,"Comedia romance","Reino Unido", "./strass/mamma.jpg")

let arrayMovies = [pelicula1, pelicula2, pelicula3]

const movies = [];

function addMovie() {
    const title = document.getElementById("title").value;
    const releaseYear = parseInt(document.getElementById("release-year").value);
    const actors = document.getElementById("actors").value.split(",");
    const writer = document.getElementById("writer").value;
    const director = document.getElementById("director").value;
    const photo = document.getElementById("photo").value;

    const movie = new Movie(title, releaseYear, actors, writer, director, photo);
    movies.push(movie);

    displayMovies();
    resetForm();
}

function displayMovies() {
    const movieList = document.getElementById("movie-list");
    movieList.innerHTML = "";

    for (const movie of movies) {
        const movieDiv = document.createElement("div");
        movieDiv.className = "movie-card";
        movieDiv.innerHTML = `
            <h3>${movie.title}</h3>
            AÑO DE LANZAMIENTO: ${movie.releaseYear}<br>
            ACTORES: ${movie.actors.join(", ")}<br>
            GUIONISTA: ${movie.writer}<br>
            DIRECTOR: ${movie.director}<br>
            <img src="${movie.photo}" alt="${movie.title}">
        `;
        movieList.appendChild(movieDiv);
    }
}


function resetForm() {
    document.getElementById("title").value = "";
    document.getElementById("release-year").value = "";
    document.getElementById("actors").value = "";
    document.getElementById("writer").value = "";
    document.getElementById("director").value = "";
    document.getElementById("photo").value = "";
}

document.getElementById("add-movie-btn").addEventListener("click", addMovie);
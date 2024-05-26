const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZGVjZTU3ZGMzNWQ1ODNhOTgyMDI3NmQ1MDYzMWM1MiIsInN1YiI6IjY2MzkyZGQ1NWVkOGU5MDEyNjE1N2UzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cY57u6tBCkChkaOTfAr8r83ao4p4hrGvvn6P_CmD1ho",
  },
};

fetch("https://api.themoviedb.org/3/trending/movie/week", options)
  .then((response) => response.json())
  .then((response) => createMovie(response.results))
  .catch((err) => console.error(err));

export function getDetailsMovie(idMovie) {
  const descriptionMovie = document.querySelector(".description-movie"),
    runtimeMovie = document.querySelector(".runtime-movie"),
    genreMovie = document.querySelector(".genre-movie");

  fetch(`https://api.themoviedb.org/3/movie/${idMovie}`, options)
    .then((response) => response.json())
    .then((response) => {
      descriptionMovie.innerHTML = response.overview;
      runtimeMovie.innerHTML =
        "<strong>Duración: </strong>" + response.runtime + " min";
    })
    .catch((err) => console.error(err));

  genreMovie.innerHTML ="<strong>Genero: </strong>";
  fetch(`https://api.themoviedb.org/3/movie/${idMovie}`, options)
    .then((response) => response.json())
    .then((response) => {
      response.genres.map((genre)=>{
        genreMovie.innerHTML+=genre.name+", ";
      })
    })
    .catch((err) => console.error(err));
}
/*
<div class="container-info">
<section class="movie-select">
    <img src="" alt="Movie Info" class="movie-selectimg">
</section>
<section class="info-movie">
    <h2 class="title-info"></h2>
    <p class="description-movie">Descripcion de la Pelicula****************************</p>
    <p><strong>Duracion:</strong> 92 min</p>
    <p class="genre-movie"><strong>Genero:</strong> Terror</p>
    <p class="runtime-movie"><strong>Director:</strong> Jorge Perez</p>
    <p><strong>Reparto:</strong> Goku, Majin Buu, Obito, Kakashi, El sapo pepe, El Diego.</p>
    <section class="info-timetables">
        <label for="radio-btn"><strong>Horarios: </strong></label>
        <input type="radio" name="horario" id="radio-btn" value="09:00">09:00
        <input type="radio" name="horario" id="radio-btn" value="13:15">13:15
        <input type="radio" name="horario" id="radio-btn" value="19:20">19:20
        <input type="radio" name="horario" id="radio-btn" value="23:00">23:00
    </section>
    <section class="container-buttons">
        <a href="Pagina_agradecimiento.html" class="btn-buy">Comprar Entradas</a>
    </section>
</section>
<box-icon class="btn-close" name='x-circle'></box-icon>
</div>*/

function createMovie(data) {
  let i = 0;
  data.map((element) => {
    const articleMovie = `
            <article class="movie-card" data-id="${element.id}">
                <img src="${
                  "https://image.tmdb.org/t/p/original/" + element.poster_path
                }" alt="Película Imagen" class="movie-image">
                <p class="title-movie">${element.original_title}</p>
            </article>`;
    document.querySelector(".grid-container").innerHTML += articleMovie;
    i++;
  });
}

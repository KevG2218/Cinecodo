const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZGVjZTU3ZGMzNWQ1ODNhOTgyMDI3NmQ1MDYzMWM1MiIsInN1YiI6IjY2MzkyZGQ1NWVkOGU5MDEyNjE1N2UzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cY57u6tBCkChkaOTfAr8r83ao4p4hrGvvn6P_CmD1ho",
  },
};  

  fetch('https://api.themoviedb.org/3/trending/movie/day', options)
    .then(response => response.json())
    .then(response => createMovie(response.results))
    .then(response => {
        
    })
    .catch(err => console.error(err));



function createMovie(data){
    
    data.map((element)=>{
        const articleMovie=`
            <article class="movie-card">
                <img src="${'https://image.tmdb.org/t/p/original/'+element.poster_path}" alt="Película Imagen" class="movie-image" id="${element.id}">
                <p class="title-movie">${element.original_title}</p>
            </article>`
            document.querySelector(".grid-container").innerHTML+=articleMovie;
    })
}



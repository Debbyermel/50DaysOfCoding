const MY_API_URL = API_URL + MY_KEY;
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');


//Getting inicial movies
getMovies(MY_API_URL);

async function getMovies(url) {

  const response = await fetch(url)
  const data = await response.json()
  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = '';
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement ('div')

    movieEl.classList.add('movie')
    movieEl.innerHTML = `
      <img src="${IMG_PATH + poster_path}" alt="${title}">
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        <div class="overview">
          <h3>Overview</h3>
          <p>${overview}</p>
        </div>
      </div>
    `
    main.appendChild(movieEl);
  });
}

//Function for vote average color class
function getClassByRate(vote) {
  if(vote >= 8) {
    return 'green'
  }
  else if(vote >= 5) {
    return 'orange'
  }
  else {
    return 'red'
  }
}


// Search submit to the API
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = search.value;

  if(searchTerm && searchTerm !== '') {

    getMovies(SEARCH_API + searchTerm);
    search.value = '';
  }
  else {

    window.location.reload();
  }
})






const body = document.querySelector("body");

const apiUrl =
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";
fetch(apiUrl)
  .then((Response) => Response.json())
  .then((movies) => {
    console.log(movies);
    movies.forEach((movie) => {
      const tr = document.querySelector("#movieTitle");
      const movieTitle = document.createElement("td");
      movieTitle.innerHTML = movie.title;
      tr.appendChild(movieTitle);
    });
  });

// API/TMDBApi.js

const API_TOKEN = "db7aae8aa2791d75157ab231e0b84931";

export function getFilmsFromApiWithSearchedText (text) {
    
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text;

    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
    
  }


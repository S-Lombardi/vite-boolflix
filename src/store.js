import { reactive } from 'vue';

export const store= reactive({

    //CHIAMATA API 
    baseUrl: 'https://api.themoviedb.org',
    apiKey: '?api_key=f44712b43bd75a7c48c3d470fc1da3ce',
    
    apiSearchMovie: '/3/search/movie',   
    apiSearchMovieSerie: '/3/search/multi',
    
    parameterQuery: '&query=', //ricerca per nome
    
    // l’URL base delle immagini
    baseUrlImage: 'https://image.tmdb.org/t/p/w185/',

    //variabile per salvare il valore che scrive l'utente nella search-bar
    search_title_words: "",

    //array per inserire la lista dei film cercati nella chiamata api
    filmList : [],
})
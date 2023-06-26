import { reactive } from 'vue';

export const store= reactive({

    //CHIAMATA API 
    baseUrl: 'https://api.themoviedb.org',
    apiSearchMovie: '/3/search/movie',   
    apiKey: '?api_key=f44712b43bd75a7c48c3d470fc1da3ce',
    parameterQuery: '&query=',
    //CHIAMATA API

    //variabile per salvare il valore che scrive l'utente nella search-bar
    search_title_words: "",

    //array per inserire la lista dei film cercati nella chiamata api
    filmList : [],
})
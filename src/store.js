import { reactive } from 'vue';

export const store= reactive({
    baseUrl: 'https://api.themoviedb.org',
    apiSearchMovie: '/3/search/movie',   
    apiKey: '?api_key=f44712b43bd75a7c48c3d470fc1da3ce',
    parameterQuery: '&query=',
})
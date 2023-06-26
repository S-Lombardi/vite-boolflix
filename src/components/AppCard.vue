<script>
import {store} from '../store.js'

export default {
    props:{
        searched_film : Object,
    },
    data(){
        return{
            store,
        }
    }
  
}
</script>

<template lang="">
    <img :src=" store.baseUrlImage + searched_film.poster_path " /> 
    <li> Titolo: {{ searched_film.title || searched_film.name }} </li>
    <ul>
        <li>Titolo originale: {{ searched_film.original_title || searched_film.original_name}}</li>
        <li>
            Lingua:
            <img :src="'/flag/' +  searched_film.original_language + '_16.png'" /> 
        </li>
        <li>Voto: {{ searched_film.vote_average }}</li>
        <li>film o serie: {{ searched_film.media_type }} </li>
    </ul>
    
  
</template>

<style lang="">
  
</style>
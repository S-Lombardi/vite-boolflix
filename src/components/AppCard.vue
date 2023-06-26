<script>
export default {

    props:{
        searched_film : Object,
    },
  
}
</script>

<template lang="">
  <ul>
    <li> Titolo: {{ searched_film.title || searched_film.name }} </li>
    <ul>
        <li>Titolo originale: {{ searched_film.original_title || searched_film.original_name}}</li>
        <li>Lingua: <img :src="'/flag/' +  searched_film.original_language + '_16.png'" /> </li>
        <li>Voto: {{ searched_film.vote_average }}</li>
        <li>film o serie: {{ searched_film.media_type }} </li>
    </ul>
    
  </ul>
</template>

<style lang="">
  
</style>
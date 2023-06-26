<script>
export default {

    props:{
        searched_film : Object,
    },
  
}
</script>

<template lang="">
  <ul>
    <li> Titolo: {{ searched_film.title }} </li>
    <ul>
        <li>Titolo originale: {{ searched_film.original_title }}</li>
        <li>Lingua: {{ searched_film.original_language }}</li>
        <li>Voto: {{ searched_film.vote_average }}</li>
    </ul>
    
  </ul>
</template>

<style lang="">
  
</style>
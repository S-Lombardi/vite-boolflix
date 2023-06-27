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
    },

    
    methods:{
        
        

        //Funzione per trasformre il numero del voto in numero intero
        Integer(voto){
            for(let i=0; i<5; i++){
                
                if(!isNaN(voto)){
                    return Math.ceil(voto) / 2;
                }
                else{
                    return 0;
                } 
            } 
            
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

        <li> 
            Voto:
          <i :class="i <=  Integer(searched_film.vote_average)  ? 'fa-solid fa-star' :  'fa-regular fa-star'" v-for="i in 5" :key="i"></i>
        </li>

        <li>film o serie: {{ searched_film.media_type }} </li>
    </ul>
    
  
</template>

<style lang="scss">

</style>
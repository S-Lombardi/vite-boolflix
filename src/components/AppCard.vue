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
    <div class="col-3">
        <!-- CARD -->
        <div class="card mb-4">
            <!-- IMMAGINE DI COPERTINA -->

            <!-- <img :src=" store.baseUrlImage + searched_film.poster_path " />  -->

            <img :src="searched_film.poster_path === null || searched_film.poster_path === undefined  ? 'https://picsum.photos/200/300' : store.baseUrlImage + searched_film.poster_path" >

            <!-- INFO -->
            <ul class="info">
                
                <li>
                    Titolo: {{ searched_film.title || searched_film.name }} 
                </li>
                <li>
                    Titolo originale: {{ searched_film.original_title || searched_film.original_name}}
                </li>
                <li>
                    film o serie: {{ searched_film.media_type }} 
                </li>
                <li>
                    Lingua:
                    <img :src="'/flag/' +  searched_film.original_language + '_16.png'" /> 
                </li>
        
                <li> 
                    Voto:
                    <i :class="i <= Integer(searched_film.vote_average)  ? 'fa-solid fa-star' :  'fa-regular fa-star'" v-for="i in 5" :key="i"></i>
                </li>
                <li>
                    {{ searched_film.overview }}
                </li>
        
                
            </ul>
        </div>
        <!-- FINE CARD -->
    </div>
</template>

<style lang="scss" scoped>

img{
    aspect-ratio: 2/3;
}

.card{
    position: relative;
}

.card:hover .info{
    display:block
}

.info{
    position: absolute;
    top: 0;
    left: 0;
    display:none;
    width: 100%;
    height: 100%;
    background-color: white;
    overflow:auto;
}

</style>
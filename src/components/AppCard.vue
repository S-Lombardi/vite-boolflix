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

            if(!isNaN(voto)){
                return Math.ceil(voto) / 2;
            }
            else{
                return 0;
            }   
        }  
    } 
}
</script>

<template lang="">
    <div class="col-auto">
        <!-- CARD -->
        <div class="card mb-4">
            <!-- IMMAGINE DI COPERTINA -->


            <!-- <img src="../assets/img/bg-film.jpg" alt="">  -->

            <img class="poster" :src="searched_film.poster_path === null || searched_film.poster_path === undefined  ? '/flag/bg-film.jpg' : store.baseUrlImage + searched_film.poster_path" >
            
            <!-- INFO -->
            <ul class="info p-3" >
                <li class="fw-bold f-2 text-center">
                    {{ searched_film.title || searched_film.name }} 
                </li>
                <li>
                    Original title: {{ searched_film.original_title || searched_film.original_name}}
                </li>
                <li>
                    Movie/ Tv: {{ searched_film.media_type }} 
                </li>
                <li>
                    Language:
                    <img :src=" '/flag/' +  searched_film.original_language + '_16.png'" /> 
                </li>
        
                <li> 
                    Rating:
                    <i :class=" i <= Integer(searched_film.vote_average)  ? 'fa-solid fa-star' :  'fa-regular fa-star'" v-for="i in 5" :key="i"></i>
                </li>
                <li text-justify>
                    Overview: {{ searched_film.overview }}
                </li>
                
            </ul>
        </div>
        <!-- FINE CARD -->
    </div>
</template>

<style lang="scss" scoped>

.poster{
    aspect-ratio: 2/3;
    width: 342px
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
    background-color: rgba(0, 0, 0, 0.835);
    overflow:auto;
    color: white;
}

</style>
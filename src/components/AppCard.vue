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
            //se voto è un numero restituisci il numero intero diviso due
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
           
            <img class="poster" :src="searched_film.poster_path === null || searched_film.poster_path === undefined  ? '/flag/bg-film.jpg' : store.baseUrlImage + searched_film.poster_path" >
            
            <!-- INFO -->
            <ul class="info p-4" > 
                <li id='movie-title' >
                    <h4>{{ searched_film.title || searched_film.name }}</h4> 
                </li>
                <li>
                    <h6> Original title:</h6>   
                    {{ searched_film.original_title || searched_film.original_name}}
                </li>
                <li >
                    <h6> Movie / Tv: </h6>
                    <span class="text-capitalize ms-1 ">
                     {{searched_film.media_type }}
                    </span> 
                </li>
                <li>
                    <h6> Language: </h6>
                    <img :src=" '/flag/' +  searched_film.original_language + '_16.png'" class="ms-2" /> 
                </li>
        
                <li> 
                    <h6> Rating: </h6>
                    <i :class=" i <= Integer(searched_film.vote_average)  ? 'fa-solid fa-star' :  'fa-regular fa-star'" v-for="i in 5" :key="i" class="ms-1 text-warning"></i>
                </li>
                <li id="movie-overview">

                    <div class="text-center mt-4 fw-bolder"> Movie's Overview </div> 
                    {{ searched_film.overview }}
                </li>

            </ul>
        </div>
        <!-- FINE CARD -->
    </div>
</template>

<style lang="scss" scoped>
@import '../styles/partials/variables';
.card{
    .poster{
        //definire rapporto tra h e w
        aspect-ratio: 2/3;
        width: 342px
    }
    position: relative;
    .info{
        position: absolute;
        top: 0;
        left: 0;
        display:none;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.835);
        overflow:auto;
        color:white;
        font-family: 'Roboto', sans-serif;
    
        #movie-title{
            text-transform: uppercase;
            text-align: center;
            margin-bottom:20px
        }
    
        #movie-overview{
            text-align: justify;
            margin-bottom: 40px;
        }

        h6{
            display: inline-block;
            color: rgb(176, 176, 176)
        }
    }
}

.card:hover .info{
    display:block
}






</style>
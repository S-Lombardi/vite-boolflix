<script>
import {store} from '../store.js'

export default {

    //Iserire eventi della componente, altimenti da warnin
    emits: ["clickSearch"],
    data(){
        return {
            store,
        }
    }
}
</script>

<template lang="">
    <div class="bg-dark mb-5">
        <div class="container">
            <div class="row">
                <!-- LOGO -->
                <div class="col">
                    <div class="logo text-uppercase fs-1 d-flex align-items-center">
                        Boolflix
                    </div>
                </div>
                <!-- SEARCH BAR e PULSANTE -->
                <div class="col d-flex align-items-center justify-content-end">

                    <input class="form-control size-input" v-model="store.search_title_words"  type="text" placeholder="Cerca un film...">
                
                    <button  @click="$emit('clickSearch')" type="button" class="ms-3">
                        <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.logo{
    font-family: 'Space Grotesk', sans-serif;;
    color: rgb(190, 18, 44);
}

.size-input{
    width: 65%,
}

button{
    padding: 5px 15px;
    border: none;
    background-color:rgb(190, 18, 44);
    i{
        color: white;
    }
}

button:hover i{
    color: black;
}
</style>
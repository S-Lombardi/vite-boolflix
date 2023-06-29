<script>
import AppCard from './AppCard.vue'

import {store} from '../store.js'

export default {
  components:{
    AppCard,
  },

  data(){
  return {
    store,
    }
  }
}
</script>

<template lang="">
  <main>
    <div class="container">
      <div class="row justify-content-center">
        <!-- Ciclo la lista dei film che ritorna della chiamata, uso la prop searched_film
        //per inviare ad AppCard il singolo film (il singolo oggetto dell'array results) -->
        <AppCard v-for="(film, index) in store.filmList" :key="index" :searched_film="film"/> 

      </div>
    </div>

  </main>
</template>

<style lang="">
  
</style>
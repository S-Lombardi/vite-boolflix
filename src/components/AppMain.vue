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

        <AppCard v-for="(film, index) in store.filmList" :key="index" :searched_film="film"/> 

      </div>
    </div>

  </main>
</template>

<style lang="">
  
</style>
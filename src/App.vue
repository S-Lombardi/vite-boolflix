<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

import axios from 'axios'

import { store } from './store.js';

export default {
  components:{
    AppHeader,
    AppMain,
  },
  data(){
    return{
      store,
    }
  },

  mounted() {
    
    //Al caricamento della pagina la chiamata restituisce i film e serie tv in tendenza della settimana 
    let firstApi = store.baseUrl + store.apiGetTrending + store.apiKey 
      axios.get(firstApi).then((result) =>{
      store.filmList = result.data.results;
          
    });
    
  },
  methods:{

    //FUNZIONE CHE RESTITUISCE IL FILM CERCATO
    searchTitleWords(){
      //inserisco in apiUrl le diverse stringhe che compongono la chiamata
      let apiUrl = store.baseUrl +  store.apiSearchMovieSerie +  store.apiKey +  store.parameterQuery;
      if(store.search_title_words !== ''){
        //aggiungo alla fine della chiamata il valore inserito dall'utente
        apiUrl +=  store.search_title_words;

        //Effettuo la chiamata e inserisco in filmList il risultato (la lista dei film cercati)
        axios.get(apiUrl).then((result) =>{
          store.filmList = result.data.results;
          
        });
        
      }

    }

  }
}
</script>

<template >
  
  <AppHeader @clickSearch="searchTitleWords()"/>
  
  <AppMain/>
  
</template>

<style lang="scss">
// !!!!!!
//IMPORTA con @USE IL FILE GENERALS ALTRIMENTI NON FUNZIONA FONTAWESOM E BOOTSTRAP
// !!!!!!
@use './styles/generals.scss' as*;
  
</style>
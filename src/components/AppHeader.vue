<script>
import {store} from '../store.js'

export default {
    emits: ["clickSearch"],
    data(){
        return {
            store,
        }
    }
}
</script>

<template lang="">
    
    <input v-model="store.search_title_words"  type="text" placeholder="cerca un film...">

    <button  @click="$emit('clickSearch')" type="button">
        Clicca per cercare
    </button>

</template>

<style lang="">
</style>
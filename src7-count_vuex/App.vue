<template>
  <div>
    <div>clicked : {{count}} times, count is {{isOdd}}</div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
  import {mapState,mapGetters,mapActions} from "vuex"
  export default {
    /*methods:{
      increment(){
        this.$store.dispatch('increment')
      },
      decrement(){
        this.$store.dispatch('decrement')
      },
      incrementIfOdd(){
        this.$store.dispatch('incrementIfOdd')
      },
      incrementAsync(){
        this.$store.dispatch('incrementAsync')
      },
    },*/
    computed:{
      ...mapState(['count']),
      ...mapGetters(['isOdd']),
    },
    methods:{
      ...mapActions(['increment','decrement','incrementIfOdd','incrementAsync'])
    }
  }
</script>

<style scoped>

</style>

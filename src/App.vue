<template lang="pug">
  #app(class="animated fadeIn")
    router-view
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
    components: {
   
    },
    data () {
    return {
      
    }
  },
  computed: {
    count() {
      return this.$store.state.count
    },
  },
  mounted () {
    

  },
  methods: {
    test(count) {
      this.$store.commit('setCountStaus',count)
    }
  },
  watch: {

  }
}
</script>

<style lang="sass">

@import './assets/styles/var'

#app
  min-width: 100vw
  min-height: 100vh
  background: linear-gradient(150deg, rgba(204, 204, 204, 1)0%, rgba(255, 255, 255, 1)100%)
  background: -moz-linear-gradient(150deg, rgba(204, 204, 204, 1)0%, rgba(255, 255, 255, 1)100%)
  background: -webkit-linear-gradient(150deg, rgba(204, 204, 204, 1)0%, rgba(255, 255, 255, 1)100%)
  background: -o-linear-gradient(150deg, rgba(204, 204, 204, 1)0%, rgba(255, 255, 255, 1)100%)
  color: $font-color

</style>

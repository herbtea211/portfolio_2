<template lang="pug">
  #app
    div aa {{count}}
    img(src="./assets/logo.png" @click="test(20)")
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px
</style>

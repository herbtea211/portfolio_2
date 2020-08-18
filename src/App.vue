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
  background-color: $BG-color
  color: $font-color

</style>

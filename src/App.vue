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
    if(this.$route.name === 'works') {
      let payload = {
        url: `${this.$route.params.fromType}/${this.$route.params.currentBork}`
        }
        this.$store.dispatch('setCurrentWork', payload)
    }
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
  font-weight: lighter

</style>

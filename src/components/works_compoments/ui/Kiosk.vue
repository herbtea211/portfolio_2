<template lang="pug">
  #kiosk
    pageShareTitle(
        spanContent="KIOSK"
        lineColor = "#e39e44"
        )    
</template>

<script>

import pageShareTitle from '../../../components/PageShareTitle'

export default {
  name: 'kiosk',
    components: {
      pageShareTitle
    },
    data () {
    return {

    }
  },
  computed: {
    
  },
  mounted () {
},
  methods: {

  },
  watch: {

  }
}
</script>

<style lang="sass">

@import '../../../assets/styles/var'

#kiosk
  
</style>

<template lang="pug">
    .buttom-layer
      .secand-layer
        .three-layer(ref="node_three_layer")
            slot
</template>

<script>


export default {
  name: 'floatLabel',
    components: {
    },
    props: [
        'paddingWidth'
    ],
    data () {
    return {

    }
  },
  computed: {
    
  },
  mounted () {
    this.$refs.node_three_layer.style.padding = this.paddingWidth
  },
  methods: {

  },
  watch: {

  }
}
</script>

<style lang="sass">

@import '../assets/styles/var'

$shareRadius: 10px

.buttom-layer
    display: inline-block
    border-radius: $shareRadius
    background: linear-gradient(135deg, #000000 41%, #ffffff 99%)
    background: -moz-linear-gradient(135deg, #000000 41%, #ffffff 99%)
    background: -webkit-linear-gradient(135deg, #000000 41%, #ffffff 99%)
    background: -o-linear-gradient(135deg, #000000 41%, #ffffff 99%)
    box-shadow: 13px 14px 23px #e6e6e6
    -webkit-box-shadow: 13px 14px 23px #e6e6e6
    -moz-box-shadow: 13px 14px 23px #e6e6e6
    .secand-layer
        display: inline-block
        border-radius: $shareRadius
        padding: 2px
        background: linear-gradient(135deg, #e0e0e0 0%, #ffffff 44%)
        background: -moz-linear-gradient(135deg, #e0e0e0 0%, #ffffff 44%)
        background: -webkit-linear-gradient(135deg, #e0e0e0 0%, #ffffff 44%)
        background: -o-linear-gradient(135deg, #e0e0e0 0%, #ffffff 44%)
        .three-layer
            background-color: $BG-color
            display: inline-block
            border-radius: $shareRadius
            // padding: 2vw
</style>

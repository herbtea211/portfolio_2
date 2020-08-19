<template lang="pug">
    .outside-layer(
      ref="node_outside_layer"
      )
        .inside-layer(
          ref="node_inside_layer"
          )
            slot
</template>

<script>


export default {
  name: 'floatLabel',
    components: {
    },
    props: [
        'imgSize'
    ],
    data () {
    return {

    }
  },
  computed: {
    
  },
  mounted () {
    this.$refs.node_inside_layer.style.width = `${this.imgSize.w + this.imgSize.p}px`
    this.$refs.node_inside_layer.style.height = `${this.imgSize.h + this.imgSize.p}px`
    this.$refs.node_outside_layer.style.width = `${this.imgSize.w + this.imgSize.p + 2}px`
    this.$refs.node_outside_layer.style.height = `${this.imgSize.h + this.imgSize.p + 2}px`
  },
  methods: {
    
  },
  watch: {

  }
}
</script>

<style lang="sass">

@import '../assets/styles/var'

$shareRadius: 1000px

.outside-layer
    position: absolute
    border-radius: $shareRadius
    display: flex
    justify-content: center
    align-items: center
    background: linear-gradient(135deg, #e0e0e0 0%, #ffffff 44%)
    background: -moz-linear-gradient(135deg, #e0e0e0 0%, #ffffff 44%)
    background: -webkit-linear-gradient(135deg, #e0e0e0 0%, #ffffff 44%)
    background: -o-linear-gradient(135deg, #e0e0e0 0%, #ffffff 44%)
    -moz-transform: scale(1, 1)
    -webkit-transform: scale(1, 1)
    -o-transform: scale(1, 1)
    -ms-transform: scale(1, 1)
    -moz-transition: transform 0.5s
    -webkit-transition: transform 0.5s
    -o-transition: transform 0.5s
    -ms-transition: transform 0.5s
    // transition
    .inside-layer
        border-radius: $shareRadius
        background-color: $BG-color
        display: flex
        justify-content: center
        align-items: center
    &:hover
      box-shadow: 5px 5px 5px 1px #e3e3e3
      -webkit-box-shadow: 5px 5px 5px 1px #e3e3e3
      -moz-box-shadow: 5px 5px 5px 1px #e3e3e3
      -o-box-shadow: 5px 5px 5px 1px #e3e3e3
      -moz-transform: scale(1.2, 1.2)
      -webkit-transform: scale(1.2, 1.2)
      -o-transform: scale(1.2, 1.2)
      -ms-transform: scale(1.2, 1.2)
</style>

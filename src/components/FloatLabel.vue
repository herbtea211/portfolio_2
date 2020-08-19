<template lang="pug">
    .outside-layer
        .inside-layer(ref="node_three_layer")
            slot
</template>

<script>


export default {
  name: 'floatLabel',
    components: {
    },
    props: [
        'paddingWidth',
        'imgSize'
    ],
    data () {
    return {

    }
  },
  computed: {
    
  },
  mounted () {
    this.$refs.node_three_layer.style.paddingTop = this.paddingWidth
    this.$refs.node_three_layer.style.paddingRight = this.paddingWidth
    this.$refs.node_three_layer.style.paddingLeft = this.paddingWidth
    this.$refs.node_three_layer.style.paddingBottom = '12px'
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
    display: inline-block
    border-radius: $shareRadius
    padding: 2px
    background: linear-gradient(135deg, #e0e0e0 0%, #ffffff 44%)
    background: -moz-linear-gradient(135deg, #e0e0e0 0%, #ffffff 44%)
    background: -webkit-linear-gradient(135deg, #e0e0e0 0%, #ffffff 44%)
    background: -o-linear-gradient(135deg, #e0e0e0 0%, #ffffff 44%)
    .inside-layer
        display: inline-block
        border-radius: $shareRadius
        background-color: $BG-color
    &:hover
        box-shadow: 5px 5px 5px 1px #e3e3e3
        -webkit-box-shadow: 5px 5px 5px 1px #e3e3e3
        -moz-box-shadow: 5px 5px 5px 1px #e3e3e3
        -o-box-shadow: 5px 5px 5px 1px #e3e3e3
</style>

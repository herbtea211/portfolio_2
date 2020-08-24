<template lang="pug">
  .page-share-title
    .title(ref="el_title")
        .title-under-line(ref="el_under_line")

</template>

<script>

export default {
  name: 'pageShareTitle',
    components: {
   
    },
    props: [
      'spanContent',
      'lineColor'
    ],
    data () {
    return {
      
    }
  },
  computed: {
    
  },
  mounted () {
    let spanArray = [...this.spanContent]
    spanArray.forEach((text) => {
      let nodeSpan = document.createElement('span')
      nodeSpan.innerHTML = text
      this.$refs.el_title.appendChild(nodeSpan)
    })

    this.$refs.el_under_line.style.backgroundColor = this.lineColor
  },
  methods: {

  },
  watch: {

  }
}
</script>

<style lang="sass">

.page-share-title
  width: 100%
  .title
    margin: 0 auto
    width: 30%
    display: flex
    flex-flow: row nowrap
    justify-content: space-around
    position: relative
    span
      font-size: 36px
      margin-bottom: 20px
    .title-under-line
      position: absolute
      bottom: 0px
      width: 100%
      height: 2px

@media screen and (max-width: 450px)
  @media (orientation: portrait) // 直視 , landscape 橫式
    .page-share-title
      .title
        span
          font-size: 24px

  
</style>

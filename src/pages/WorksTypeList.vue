<template lang="pug">
  #work-type-list
    .title-box 繁忙的城市,每個人都在自己的路上和別人相遇著
    el-row
      el-col(
        :xs="12"
        :sm="12"
        :md="6"
        v-for="(item, index) in list"
        :key="index"
        )
        floatLabel(:imgSize="contentSize")
          img(
            :src="require(`../assets/images/works_list_page_icon/griphic/${item.src}.png`)"
            ref="el_list_img"
            )
        h3 {{item.name}}
    sidebarCompoment
</template>

<script>
import sidebarCompoment from '@/components/SideBarComponent'
import floatLabel from '@/components/FloatLabel'

export default {
  name: 'workTypeListPage',
    components: {
      sidebarCompoment,
      floatLabel
    },
    data () {
    return {
      list: [
        {
          name: '菩藝蘭坊',
          src: '0'
        },
        {
          name: 'MissQ',
          src: '1'
        },
        {
          name: 'Coffee+',
          src: '2'
        },
        {
          name: '濟公會',
          src: '3'
        },
        {
          name: 'CENTER青年旅社',
          src: '4'
        },
        {
          name: '博客',
          src: '5'
        },
        {
          name: 'ZETA捷達珠寶',
          src: '6'
        },
        {
          name: '老盧',
          src: '7'
        },
      ],
      contentSize: {
        w: 90,
        h: 90,
        p: 15
      }
    }
  },
  computed: {
    
  },
  mounted () {
    this.$refs.el_list_img.forEach((el) => {
      el.style.width = `${this.contentSize.w}px`
      el.style.height = `${this.contentSize.h}px`
    })
  },
  methods: {

  },
  watch: {

  }
}
</script>

<style lang="sass">

@import '../assets/styles/var'

$finallyBGColor: hsl(0, 0, 50)

@keyframes testAnimation
  from
    background-color: $BG-colorHSL
  30%
    background-color: $BG-colorHSL
  50%
    background-color: hsl(359, 100, 50)
  to
    background-color: $finallyBGColor

#work-type-list
  .title-box
    width: 50%
    margin: 10vh auto 15vh
    letter-spacing: 5px
    font-weight: lighter
    background-color: $finallyBGColor
    -webkit-background-clip: text
    background-clip: text
    color: transparent
    animation: testAnimation 5s
    text-align: center
    font-size: 18px
  .el-row
    margin: 0 10vw
    .el-col
      margin-bottom: 10vh
      height: 200px
      position: relative
      display: flex
      justify-content: center
      align-items: center
      img
      h3
        position: absolute
        bottom: 0px
        width: 100%
        text-align: center

@media screen and (max-width: 450px)
  @media (orientation: portrait) // 直視 , landscape 橫式
    #work-type-list
      .title-box
        width: 50%
        font-size: 14px
        margin: 10vh auto 10vh
      .el-row
        margin: 0 10vw
        .el-col
          margin-bottom: 0vh
  
</style>

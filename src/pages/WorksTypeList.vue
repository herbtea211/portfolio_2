<template lang="pug">
  #work-type-list
    .title-box {{currentWorksList.title}}
    el-row
      el-col(
        :xs="12"
        :sm="12"
        :md="6"
        v-for="(item, index) in currentWorksList.list"
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
      griphicWorksList: {
        title: '設計是海,只要妳像魚一樣自在',
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
          }
        ],
      },
      uiWorksList: {
        title: 'UI是繁忙的城市,每個人都在自己的路上和別人相遇著',
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
          }
      ],
      },
      currentWorksList: {
        title: '',
        list: []
      },
      contentSize: {
        w: 90,
        h: 90,
        p: 15
      }
    }
  },
  computed: {
    
  },
  async mounted () {
    await this.setPage()
    this.setImgStyle()
  },
  methods: {
    setPage() {
      console.log('--', this.$route.params.from)
      switch(this.$route.params.from) {
        case 'ui':
          console.log('ui')
          this.currentWorksList.title = this.uiWorksList.title
          this.uiWorksList.list.forEach((item) => {
            this.currentWorksList.list.push(item)
          })
        break;
        case 'griphic':
          console.log('griphic')
          this.currentWorksList.title = this.griphicWorksList.title
          this.griphicWorksList.list.forEach((item) => {
            this.currentWorksList.list.push(item)
          })
        break;
      }
    },
    setImgStyle() {
          this.$refs.el_list_img.forEach((el) => {
            el.style.width = `${this.contentSize.w}px`
            el.style.height = `${this.contentSize.h}px`
          })
    }
  },
  watch: {

  }
}
</script>

<style lang="sass">

@import '../assets/styles/var'

$finallyBGColor: hsl(0, 0, 50)

@keyframes imgAnimation
  from
    -moz-transform: rotate(0deg)
    -webkit-transform: rotate(0deg)
    -o-transform: rotate(0deg)
    -ms-transform: rotate(0deg)
  to
    -moz-transform: rotate(360deg)
    -webkit-transform: rotate(360deg)
    -o-transform: rotate(360deg)
    -ms-transform: rotate(360deg)

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
        animation: imgAnimation 5s
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

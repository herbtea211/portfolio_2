<template lang="pug">
  #ui-work-type-list(class="animated fadeIn")
    .title-box {{griphicWorksList.title}}
    el-row
      el-col(
        :xs="12"
        :sm="12"
        :md="6"
        v-for="(item, index) in griphicWorksList.list"
        :key="index"
        )
        floatLabel(
          :imgSize="contentSize"
          )
          img(
            :src="require(`@/assets/images/works_list_page_icon/ui/${item.src}.png`)"
            ref="el_list_img"
            @click="toUIWork(item.toPath)"
            )
        h3 {{item.name}}
    sidebarCompoment
</template>

<script>
import sidebarCompoment from '@/components/SideBarComponent'
import floatLabel from '@/components/FloatLabel'


export default {
  name: 'uiListPage',
    components: {
      sidebarCompoment,
      floatLabel
    },
    data () {
    return {
      griphicWorksList: {
        title: 'UI是繁忙的城市,每個人都在自己的路上和別人相遇著',
        list: [
          {
            name: 'BUSNESS',
            src: '0',
            toPath: 'ui/busness'
          },
          {
            name: 'MOVIE-STORE',
            src: '1',
            toPath: 'ui/movie_store'
          },
        ],
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
  mounted () {
    this.setImgStyle()
  },
  methods: {

    setImgStyle() {
          this.$refs.el_list_img.forEach((el) => {
            el.style.width = `${this.contentSize.w}px`
            el.style.height = `${this.contentSize.h}px`
          })
    },
    async toUIWork(toPath) {
      let payload = {
        url: toPath
        }
      await this.$store.dispatch('setCurrentWork', payload)
      let url = `/works/${toPath}`
      this.$router.push(url)
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

@keyframes titleBGAnimation
  from
    background-color: $BG-colorHSL
  50%
    background-color: hsl(359, 100, 50)
  to
    background-color: $finallyBGColor

#ui-work-type-list
  .title-box
    margin: 10vh auto 15vh
    letter-spacing: 5px
    font-weight: lighter
    background-color: $finallyBGColor
    -webkit-background-clip: text
    background-clip: text
    color: transparent
    animation: titleBGAnimation 5s
    text-align: center
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
    #ui-work-type-list
      .title-box
        width: 50%
        font-size: 14px
        margin: 10vh auto 10vh
      .el-row
        margin: 0 10vw
        .el-col
          margin-bottom: 0vh
  
</style>

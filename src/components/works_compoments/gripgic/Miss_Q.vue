<template lang="pug">
  #miss-q
    .img-box
      img(
        :src="require('@/assets/images/works_img/griphic/miss_Q/0.png')"
        )
    .start(ref="el_start")
      .bg-top
      .bg-bottom
      .text-box
        h2 簡介
        h4 品書比國起遊起一係麼沒心文有主兩馬給運我性始金？石查其地的高成……足同找些的……朋作國麼年全園無母清來長、麼特這女銷洲告，也對優子上，也所第種岸老每不可育上眼了明父果車。感我一車關法顧目國以快日當的斷是產一。有童而幾金山舉視就老單，自三天小紀的子克國理臉時！呢器
    .main
      el-row.one-el-row(
        type="flex"
        justify="space-between"
      )
        el-col.m-el-col(
          :xs="24"
          :sm="8"
          )
          img(
            :src="require('@/assets/images/works_img/griphic/miss_Q/2.png')"
            )
        el-col(
          :xs="24"
          :sm="16"
          )
          img(
            :src="require('@/assets/images/works_img/griphic/miss_Q/1.png')"
            )
          h4 品書比國起遊起一係麼沒心文有主兩馬給運我性始金？石查其地的高成……足同找些的……朋作國麼年全園無母清來長、麼特這女銷洲告，也對優子上，也所第種岸老每不可育上眼了明父果車。感我一車關法顧目國以快日當的斷是產一。有童而幾金山舉視就老單，自三天小紀的子克國理臉時！呢器
      el-row.two-el-row
        el-col(:sm="12")
          h4 品書比國起遊起一係麼沒心文有主兩馬給運我性始金？石查其地的高成……足同找些的……朋作國麼年全園無母清來長、麼特這女銷洲告，也對優子上，也所第種岸老每不可育上眼了明父果車。感我一車關法顧目國以快日當的斷是產一。有童而幾金山舉視就老單，自三天小紀的子克國理臉時！呢器
      el-row
        el-col(:sm="12")
          img(
            :src="require('@/assets/images/works_img/griphic/miss_Q/4.png')"
            )
          h4 品書比國起遊起一係麼沒心文有主兩馬給運我性始金？石查其地的高成……足同找些的……朋作國麼年全園無母清來長、麼特這女銷洲告，也對優子上，也所第種岸老每不可育上眼了明父果車。感我一車關法顧目國以快日當的斷是產一。有童而幾金山舉視就老單，自三天小紀的子克國理臉時！呢器
        el-col(:sm="12")
          img(
            :src="require('@/assets/images/works_img/griphic/miss_Q/3.png')"
            )
          h4 品書比國起遊起一係麼沒心文有主兩馬給運我性始金？石查其地的高成……足同找些的……朋作國麼年全園無母清來長、麼特這女銷洲告，也對優子上，也所第種岸老每不可育上眼了明父果車。感我一車關法顧目國以快日當的斷是產一。有童而幾金山舉視就老單，自三天小紀的子克國理臉時！呢器
        el-row            
          el-col
            img(
              :src="require('@/assets/images/works_img/griphic/miss_Q/5.png')"
              )
            img(
              :src="require('@/assets/images/works_img/griphic/miss_Q/6.png')"
              )
          el-col
            h4 品書比國起遊起一係麼沒心文有主兩馬給運我性始金？石查其地的高成……足同找些的……朋作國麼年全園無母清來長、麼特這女銷洲告，也對優子上，也所第種岸老每不可育上眼了明父果車。感我一車關法顧目國以快日當的斷是產一。有童而幾金山舉視就老單，自三天小紀的子克國理臉時！呢器


</template>

<script>

export default {
  name: 'missQ',
    components: {
   
    },
    data () {
    return {
      
    }
  },
  computed: {
    
  },
  mounted () {
    this.setELStartLayout()
    window.onresize = () => {
      this.setELStartLayout()
    }
  },
  methods: {
    setELStartLayout() {
      let elTextBoxH = null
      let elStartChildren = [...this.$refs.el_start.children]
      let elTextBox = elStartChildren.find((el) => {
        return el.className === 'text-box'
      })
      if(elTextBox) {
        elTextBoxH = elTextBox.clientHeight

      }
      if(elTextBoxH) {
        this.$refs.el_start.style.height = `${elTextBoxH * 3}px `
        for(let i = 0;i < 2;i++) {
          elStartChildren[i].style.height = `${elTextBoxH * 1.8}px`
        }
      }

    }
  },
  watch: {

  }
}
</script>

<style lang="sass">

$shareSkew: 3deg
$m-el-col-top: 20px

@mixin skew($deg)
  -moz-transform: skewY($deg)
  -webkit-transform: skewY($deg)
  -o-transform: skewY($deg)
  -ms-transform: skewY($deg)

#miss-q
  .img-box
    padding: 100px 0px
    text-align: center
    img
      width: 250px
  .start
    position: relative
    display: flex
    align-items: center
    justify-content: center
    color: #ffffff
    div
      position: absolute
    .bg-top
      background-color: #a97517
      width: 100%
      @include skew($shareSkew)
    .bg-bottom
      background-color: #B19263
      opacity: 0.7
      width: 100%
      @include skew(-$shareSkew)
    .text-box
      display: flex
      flex-flow: column nowrap
      align-items: center
      width: 45%
      h2
        width: 100%
      h4
        width: 100%
  .main
    width: 80%
    margin: 50px auto
    img
      width: 150px
    h4
      margin-top: 20px
    .m-el-col
      display: flex
      align-items: flex-end
      img
        position: relative
        top: $m-el-col-top
    .two-el-row
      margin-top: $m-el-col-top

@media screen and (max-width: 1400px)
  #miss-q
    .img-box
      padding: 100px 0px 50px
      text-align: center
      img
    .start
      .text-box
        width: 60%

@media screen and (max-width: 450px)
  @media (orientation: portrait) // 直視 , landscape 橫式
    #miss-q
      .img-box
        padding: 80px 0px
        img
          width: 180px
      .start
        margin-top: -80px
        div
        .bg-top
          @include skew(10deg)
        .bg-bottom
          @include skew(-10deg)
        .text-box
          width: 90%
      .main
        .el-row.one-el-row.el-row--flex
          display: flex
          flex-direction: column-reverse

  
</style>

<template lang="pug">
  #w_m
    .left-side-box
      img.logo(
        :src="require('@/assets/images/works_img/griphic/w_m/0.png')"
      )
      h4 這是一間由 Webber 跟 Mark 兩個人組成的攝影工作室,主要業務是婚禮動靜態的拍攝,這兩位業主是公司同事,利用下班時間兼職攝影,其實兩個人的生活很緊密的連結在一起,剛好名字字首一個'M'一個‘W’很直覺的就是要利用這兩個字來發想,logo的字體實際上就是同一個字上下顛倒而且連在一起,我想應該也不用太多解釋,而且這個概念延伸到其他視覺也很好發揮,只要維持簡單的對比概念就可以了！！
    .right-side-box
      img(
      :src="require('@/assets/images/works_img/griphic/w_m/1.png')"
    )
</template>

<script>

export default {
  name: 'WM',
    components: {
   
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

$right-side-box-width: 30vw
$right-side-box-img-height: 200px
$right-side-box-img-position-left: 10vw

#w_m
  .left-side-box
    position: fixed
    top: 0
    left: 0
    bottom: 0
    right: $right-side-box-width + $right-side-box-img-position-left
    display: flex
    align-items: center
    .logo
      width: 150px
      position: absolute
      top: 20px
      left: 50px
    h4
      letter-spacing: 3px
      margin-left: 50px
      text-align: justify
  .right-side-box
    width: $right-side-box-width
    background-color: #222320
    position: fixed
    top: 0
    bottom: 0
    right: 0
    display: flex
    align-items: center
    img
      height: $right-side-box-img-height
      position: absolute
      left: -$right-side-box-img-position-left

@media screen and (max-width: 820px)
  #w_m
    .right-side-box
      img
        height: 150px

  @media (orientation: landscape) // 直視 , landscape 橫式
    #w_m
      .left-side-box
        padding: 20px
        position: unset
        display: block
        width: 100vw - $right-side-box-width - $right-side-box-img-position-left - 5vw
        .logo
          position: unset
          margin-bottom: 20px
        h4
          margin-left: 0px
      .right-side-box
        img
          height: 20vw

@media screen and (max-width: 430px)
  @media (orientation: portrait) // 直視 , landscape 橫式
    #w_m
      .left-side-box
        position: unset
        display: block
        width: unset
        width: 80%
        margin: 10vh auto
        .logo
          position: unset
          margin-bottom: 20px
        h4
          margin-left: 0px
      .right-side-box
        position: unset
        display: block
        width: unset
        background-color: unset
        margin-bottom: 10vh
        img
          height: unset
          display: block
          width: 80vw
          position: unset
          margin: 0 auto
  
</style>

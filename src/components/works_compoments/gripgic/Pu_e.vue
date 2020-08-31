<template lang="pug">
  #pu-e
    .logo-box
      img.logo(
          :src="require('@/assets/images/works_img/griphic/pu_e/0.png')"
        )
      h4 業主是蝴蝶蘭園的主人,代工已經超過20年,第二代接手後想開始嘗試建立自有品牌,推廣蝴蝶蘭之美,需要一個LOGO,想呈現出清新典雅的感覺,女性的柔美與力量<br><br>我參考蝴蝶蘭特有的花蕊形狀繪製線條,同時這個形狀也有點像女性的子宮,這兩個部分都象徵著女性孕育下一代的生命力,再做一個水平鏡像增加穩定感,核心精神大致上就完成了
    el-row
      el-col(:sm="6")
        img(
        :src="require('@/assets/images/works_img/griphic/pu_e/1.png')"
      )
      el-col(:sm="6")
        img(
          :src="require('@/assets/images/works_img/griphic/pu_e/2.png')"
        )
      el-col(:sm="12")
        h4 配色方面直接參考蝴蝶蘭的顏色,把飽和度降低再搭配白色就會感覺很清新,只要紅色跟綠色的不要用大色塊呈現,適度調整後就不會有俗艷感,反而是感覺會很協調
    
</template>

<script>

export default {
  name: 'puE',
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

@mixin imgStyle
  box-shadow: 5px 5px 6px 0px #C4C2C2
  -webkit-box-shadow: 5px 5px 6px 0px #C4C2C2
  -moz-box-shadow: 5px 5px 6px 0px #C4C2C2
  -o-box-shadow: 5px 5px 6px 0px #C4C2C2


#pu-e
  letter-spacing: 3px
  padding: 50px
  .logo-box
    margin-bottom: 50px
    .logo 
      width: 250px
      margin-bottom: 20px
    h4
      width: 70%
  .el-row
    display: flex
    align-items: flex-end
    img
      width: 80%
      @include imgStyle
    h4
      text-align: left

@media screen and (max-width: 767px)
  #pu-e
    .logo-box
      .logo
        width: 180px
      h4
        width: 100%
    .el-row
      display: unset
      text-align: center
      .el-col
        padding-bottom: 20px 
      img

  
</style>

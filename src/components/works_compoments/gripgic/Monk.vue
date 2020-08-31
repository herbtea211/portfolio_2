<template lang="pug">
  #monk
    img(
        :src="require('@/assets/images/works_img/griphic/monk/0.png')"
      )
    el-row
      el-col.left(:sm="12")
        h4 做宮廟的案子感覺蠻新鮮的,這是一個宮廟所屬的分會,是由比較年輕的一輩組成的,因此會希望logo一方面要保留傳統元素,一方面要跟其他宮廟很不一樣,除此之外,還要把slogan 8個字全部放進來
        h4 根據我搜集資料的結果,大部分的濟公師父形象上都是灑脫隨性,百無禁忌,不外乎用葵扇,酒壺這兩樣法器來發想,這方面業主希望可以保留,其他部分再來自由發揮
      el-col.right(:sm="12")
        h4 濟公師父的故事大家都很熟悉,相傳濟公師父是'降龍尊者'的化身,但這個形象其實很少出現在其他宮廟的logo裡,以這個概念發想,希望logo可以呈現比較威嚴,具有力量的感覺,保留葵扇的部分,去掉酒壺,用師父的帽子做標誌效果也是很好
        h4 slogen部分還是不免俗使用毛筆字體,因為字數實在太多,用很緊湊的方式排在一起,宮廟常常會做一些周邊包括帽子,衣服,如果太長或太寬的話都不適合
</template>

<script>

export default {
  name: 'monk',
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

#monk
  text-align: center
  img
    width: 20vw
    margin-top: 50px
    margin-bottom: 50px
  .el-row
    text-align: left
    width: 60%
    margin: 0 auto
    letter-spacing: 3px
    .left
      padding-right: 10px
    .right
      padding-left: 10px
    h4
      margin-bottom: 20px

@media screen and (max-width: 767px)
  #monk
    .el-row
      .left
        padding-right: 0px
      .right
        padding-left: 0px

@media screen and (max-width: 430px)
  @media (orientation: portrait) // 直視 , landscape 橫式
    #monk
      img
        width: 50vw
      .el-row
        width: 80%

</style>

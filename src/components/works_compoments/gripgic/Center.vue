<template lang="pug">
  #center
    img(
      :src="require('@/assets/images/works_img/griphic/center/0.png')"
    )
    h4 這是幾年前開背包旅店用的LOGO,當然是我自己來做,整體的房子造型比較會讓人聯想到飯店,旅店這些行業,一開始就想用擬人化的設計增加親和力,背包客棧這一行重點就是可以跟每個旅客交心
    h4 比較特別的點在中間的''T',特別把空間做出來加了兩個點,有趣的是每個人解讀出來的感覺不樣,有些人認為他是兩個眼睛,正在看著什麼,有些人覺得他像兩扇門,等著被開啟,不管是什麼我都覺得很好,同一個LOGO被解讀成不同意像跟我們開店的理念頗能呼應
    h4 此時此刻所有人都在同一片土地上,但是每個人都能有不一樣的體驗

</template>

<script>

export default {
  name: 'center',
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

#center
  text-align: center
  img
    margin-top: 50px
    width: 500px
  h4
    width: 80%
    margin: 10px auto 10px
    letter-spacing: 3px
    text-align: left

@media screen and (max-width: 450px)
  @media (orientation: portrait) // 直視 , landscape 橫式
    #center
      img
        width: 250px
</style>

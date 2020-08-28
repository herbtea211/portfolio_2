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
        h4 業主是兩個女生一起經營鬆餅跟飲品,地點在墾丁南灣,店面是很純粹的工業風,這種風格表示會有很多原木色&水泥灰&鑄鐵色,logo用單純的黑色線條配合工業風,再加上一點俏皮可愛的感覺,另外業主還有要求表達出兩個人同心協力一起努力的感,整體來說都是圓潤的線條比較柔和,具有女性特質,事實上線條的邊都是不規則的,可以增加一點粗獷感
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
          h4 Q字的尾巴翹起來我是覺得挺可愛的~~勾勒出一個飲料杯的形狀可以明確表達主要商品就是飲,鬆餅的話只有在下午茶時段提供,所以強調店家商品定位這件事非常重要
      el-row.two-el-row
        el-col(
          :xs="24"
          :sm="12"
          )
          h4 這裡很明顯就是要強調另一個重點:<br><br>同心協力的感覺,把 M 這個字變成兩個連再一起的“人”,看起來就想兩個人手牽手走在一起,方法簡單,但意象清楚也很好理解,又不會破壞 M 的辨識度
          el-row.row-in-row
            el-col
              img(
                :src="require('@/assets/images/works_img/griphic/miss_Q/4.png')"
                )
            el-col
              h4 這個是後來追加的招牌,晚上營業時間加長的話就需要一個招牌了～～這種圓形招牌比較小巧,安裝容易,成本低,圖片用卡典成形之後貼上去就好,比較需要注意是貼的過程對位置要很小心！！
        el-col.padding-left(
          :xs="24"
          :sm="12"
          )
          img(
            :src="require('@/assets/images/works_img/griphic/miss_Q/3.png')"
            )
          h4 字體其實有被變形過,故意做一些轉化之後線條沒那麼銳利,有一種笨拙感
      el-row.card-el-row
        el-col
          img(
            :src="require('@/assets/images/works_img/griphic/miss_Q/5.png')"
            )
          img(
            :src="require('@/assets/images/works_img/griphic/miss_Q/6.png')"
            )
        el-col
          h4 經過測試之後發現地址的定位不準,因為店家的位置就在海灘前的大路上,就直接用圖示的方式敘述位置,經過測試之後效果不錯喔～～大部分客人們都可以輕鬆找到！！
    el-row.bottom-el-row
      el-col
        img(
          :src="require('@/assets/images/works_img/griphic/miss_Q/7.png')"
          )

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
  letter-spacing: 3px
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
      display: flex
      align-items: center
      h4
        width: 80%
      .padding-left
        padding-left: 20px
      .row-in-row
        margin-top: 20px
    .card-el-row
      text-align: center
      margin-top: 50px
      img
        width: 25%
      h4
        text-align: left
  .bottom-el-row
    margin: 100px 0px
    img
      width: 100%

@media screen and (max-width: 1400px)
  #miss-q
    .img-box
      padding: 100px 0px 50px
      text-align: center
      img
    .start
      .text-box
        width: 60%
    .main
      .card-el-row
        img
          width: 35%

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
        .two-el-row
          display: block
          h4
            width: 100%
          .padding-left
            padding-left: unset
            padding-top: 20px
        .card-el-row
          img
            width: 50%
  
</style>

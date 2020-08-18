<template lang="pug">
  #experience
    floatLabel(paddingWidth="2vw")
      span aaaaaa
    sidebarCompoment
</template>

<script>

import sidebarCompoment from '../components/SideBarComponent'
import floatLabel from '../components/FloatLabel'

export default {
  name: 'experiencePage',
    components: {
      sidebarCompoment,
      floatLabel
    },
    data () {
    return {
      experience: [
        {
          year: '19/04',
          company: '宣揚電腦',
          jobTitle: 'UI設計師⁄產品規劃',
          content: '產品規劃->UI設計->圖稿->切版->前端',
          learn: [
            '一直跟自己說簡單,事情就變簡單了'
          ]
        },
        {
          year: '17/08',
          company: '尚青雲端整合行銷',
          jobTitle: 'UI設計師⁄設計組長⁄專案負責人⁄電商諮詢師',
          content: '線上開店 & 購物商城Web & APP-UI,管理方面是平面設計師組長跟專案負責人, 有時接受電子商務的諮詢',
          learn: [
            'UI設計跟平面設計是兩回事',
            '訓練一個人最快的方式,就是把他丟進地獄裡'
          ]
        },
        {
          year: '15/05',
          company: 'CENTER國際青年旅舍',
          jobTitle: '負責人',
          content: 'everything',
          learn: [
            '創業不難,難的是賺錢',
            '補足弱項不如發揮強項'
          ]
        },
        {
          year: '13/50',
          company: '高雄市議員服務處',
          jobTitle: '助理',
          content: '行車,案件處理',
          learn: [
            '好好說話,就是一種強大的技能',
            '法律只會保護懂法律的人',
            '這個世界只有強弱,沒有好壞'
          ]
        },
        {
          year: '12/02',
          company: '捷達珠寶',
          jobTitle: '平面設計師',
          content: '視覺設計&設計實務操作,logo,DM,平面廣告,名片,印刷品,大圖,貼紙,招牌,陳列,包裝設計,行銷活動',
          learn: [
            '不把瓶子打破,怎麼知道水的可能性',
            '壓力可以把潛力變成實力'
          ]
        }
      ]
      
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

@import '../assets/styles/var'

$shareRadius: 10px
$shareSize: 10vw

#experience
  margin: 10vh 10vw
  // .buttom-layer
  //   display: inline-block
  //   border-radius: 10px
  //   background: linear-gradient(135deg, rgba(255, 255, 255, 0)41%, rgba(255, 255, 255, 1)99%)
  //   background: -moz-linear-gradient(135deg, rgba(255, 255, 255, 0)41%, rgba(255, 255, 255, 1)99%)
  //   background: -webkit-linear-gradient(135deg, rgba(255, 255, 255, 0)41%, rgba(255, 255, 255, 1)99%)
  //   background: -o-linear-gradient(135deg, rgba(255, 255, 255, 0)41%, rgba(255, 255, 255, 1)99%)
  //   box-shadow: 13px 14px 23px #e6e6e6
  //   -webkit-box-shadow: 13px 14px 23px #e6e6e6
  //   -moz-box-shadow: 13px 14px 23px #e6e6e6
  //   .secand-layer
  //     display: inline-block
  //     border-radius: 10px
  //     padding: 2px
  //     background: linear-gradient(135deg, #e0e0e0 0%, #ffffff 44%)
  //     background: -moz-linear-gradient(135deg, #e0e0e0 0%, #ffffff 44%)
  //     background: -webkit-linear-gradient(135deg, #e0e0e0 0%, #ffffff 44%)
  //     background: -o-linear-gradient(135deg, #e0e0e0 0%, #ffffff 44%)
  //     .three-layer
  //       background-color: $BG-color
  //       display: inline-block
  //       border-radius: 10px
  //       padding: 3vw
</style>

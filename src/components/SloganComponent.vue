<template lang="pug">
    #sloganComponent(class="animated fadeIn" v-if="sidebarIsActive")
      h5 {{slogan.content}}
      h5 {{slogan.contentTW}}
      h6 {{slogan.author}}-
</template>
<script>

export default {
  name: 'sloganComponent',
  props: [
    'sidebarIsActive'
  ],
    data () {
    return {
      slogan: {
          content: '',
          contentTW: '',
          author: ''
        },
        sloganConfig: [
          {
            content: 'They always say time changes things, but you actually have to change them yourself',
            contentTW: '人們常說某些事會隨時間改變，但事實上你必須自己改變它們',
            author: '安迪.沃荷'
          },
          {
            content: 'Choosing what we use,choosing how to live',
            contentTW: '選擇所用之物，就是選擇生活方式',
            author: '大衛‧梅洛'
          },
          {
            content: 'To create ,one must first question everying',
            contentTW: '若要創作，必須先對一切產生質疑',
            author: '艾琳‧格瑞'
          },
          {
            content: 'It is very easy to be different,but very difficult to be better',
            contentTW: '做得不同很容易,但做到完美卻很困難',
            author: '強納生‧艾夫'
          }
        ]
    }
  },
  computed: {
  
  },
  mounted () {
    this.setSlogan(this.sloganConfig)
    },
  methods: {
    setSlogan(sloganConfig) {
      let currentNum = this.getRandom(0, sloganConfig.length-1)
      this.slogan = {
        content: sloganConfig[currentNum].content,
        contentTW: sloganConfig[currentNum].contentTW,
        author: sloganConfig[currentNum].author,
      }
    },
    getRandom(min,max) {
      return Math.floor(Math.random()*(max-min+1))+min
    }
  },
  watch: {
    sidebarIsActive() {
      this.setSlogan(this.sloganConfig)
    }
  }
}
</script>
<style lang="sass">

@import '../assets/styles/share.sass'

#sloganComponent
  width: 70%
  letter-spacing: 5px
  padding-left: 4vw
  margin-top: 20px
  h5
    margin-bottom: 1vh

</style>

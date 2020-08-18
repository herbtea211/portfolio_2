<template lang="pug">
  #sidebar-component(class="animated fadeIn")
    .sideBar-content(ref="el_sideBar_content")
      sloganComponent(:sidebarIsActive="isActive")
      .btn-box
        .type-btn(
          v-for="(item, index) in btnGroup"
          :key="index"
          ) {{item}}
    .sideBar-icon(@click="clickSideBarIcon")
      .line-top(ref="el_line_top")
      .line-bottom(ref="el_line_bottom")
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import sloganComponent from '../components/SloganComponent'


export default {
  name: 'sidebarCompoment',
  components: {
    sloganComponent
  },
  data () {
    return {
      isActive: false,
      itemsFadeIn: false,
      sideBarItems: [
        {
          name: 'HOME',
          src: '/'
        },
        {
          name: 'UI-DESIGN',
          src: '/meunItems/ui'
        },
        {
          name: 'GRAPHIC',
          src: '/meunItems/graphic'
        },
        {
          name: 'WEB-DESIGN',
          src: '/meunItems/web'
        },
        {
          name: 'EXPERIENCE',
          src: '/experience'
        }
      ],
      btnGroup: [
        'griphic',
        'UI',
        'experience'
      ]
    }
  },
  mounted() {
    this.openSideBar(true)

  },
  computed: {
  },
  methods: {
    clickSideBarIcon() {
      this.isActive = !this.isActive
      this.openSideBar(this.isActive)
    },
    openSideBar(isActive) {
      if(isActive) {
        this.$refs.el_line_bottom.classList.remove('notActive')
        this.$refs.el_line_bottom.classList.add('active')

        this.$refs.el_line_top.classList.remove('notActive')
        this.$refs.el_line_top.classList.add('active')

        this.$refs.el_sideBar_content.classList.remove('notActive')
        this.$refs.el_sideBar_content.classList.add('active')

        setTimeout(() => {
          this.itemsFadeIn = true
        }, 150)

      } else {
        this.$refs.el_line_bottom.classList.remove('active')
        this.$refs.el_line_bottom.classList.add('notActive')

        this.$refs.el_line_top.classList.remove('active')
        this.$refs.el_line_top.classList.add('notActive')

        this.$refs.el_sideBar_content.classList.remove('active')
        this.$refs.el_sideBar_content.classList.add('notActive')

        this.itemsFadeIn = false
       
      }

    },
    goPage(pathName) {
        let payload = {
        path: pathName,
        isShowMenuIcon: true
      }
    }

  },
   watch: {

    }
}
</script>
<style lang="sass" scoped>

$direction: 0.5s
$initTop: 0px
$initBottom: 15px
$rotate_0: rotate(0deg)
$rotate_40: rotate(40deg)
$rotate_-40: rotate(-40deg)

@mixin noActiveStyle($top)
  width: 100%
  height: 3px
  background-color: #435873
  border-radius: 100px
  position: absolute
  top: $top
  right: 0

@keyframes bottomIsActive
  from
    transform: $rotate_0
  to
    transform: $rotate_40

@keyframes topIsActive
  from
    top: $initTop
    transform: $rotate_0
  to
    top: $initBottom
    transform: $rotate_-40

@keyframes bottomNotActive
  from
    transform: $rotate_40
  to
    transform: $rotate_0

@keyframes topNotActive
  from
    top: $initBottom
    transform: $rotate_-40
  to
    top: $initTop
    transform: $rotate_0

@keyframes sideBarContentActive
  from
    bottom: 100vh
    left: 100vw
  to
    bottom: 0
    left: 0

@keyframes sideBarContentNotActive
  from
    bottom: 0
    left: 0
  to
    bottom: 100vh
    left: 100vw

#sidebar-component
  position: fixed
  top: 0px
  right: 0px
  width: 0px
  height: 0px
  .sideBar-icon
    position: fixed
    top: 20px
    right: 20px
    width: 40px
    height: 40px
    cursor: pointer
    .line-top
      @include noActiveStyle(0px)
    .line-bottom
      @include noActiveStyle($initBottom)
    .line-top.active
      animation: topIsActive $direction
      top: $initBottom
      transform: $rotate_-40
    .line-bottom.active
      animation: bottomIsActive $direction
      transform: $rotate_40
    .line-top.notActive
      animation: topNotActive $direction
      top: $initTop
      transform: $rotate_0
    .line-bottom.notActive
      animation: bottomNotActive $direction
      transform: $rotate_0
  .sideBar-content
    position: fixed
    top: 0px
    right: 0px
    bottom: 100vh
    left: 100vw
    background-color: #fdfdfd
    overflow: hidden
    height: 100vh
    .btn-box
      margin-top: 15vh
      .type-btn
        margin: 0 auto 5vh
        height: 100px
        width: 50%
        background-color: #ffffff
        border-radius: 1000px
        border: 3px #000 solid
      // display: flex
      // align-items: center
      // justify-content: center
      // box-shadow: inset 2px -8px 50px -48px #000000
      // -webkit-box-shadow: inset 2px -8px 50px -48px #000000
      // -moz-box-shadow: inset 2px -8px 50px -48px #000000
      // -o-box-shadow: inset 2px -8px 50px -48px #000000
      // background: radial-gradient(center, ellipse cover, rgba(255, 255, 255, 1)30%, rgba(197, 202, 205, 1)100%)
      // background: -moz-radial-gradient(center, ellipse cover, rgba(255, 255, 255, 1)30%, rgba(197, 202, 205, 1)100%)
      // background: -webkit-radial-gradient(center, ellipse cover, rgba(255, 255, 255, 1)30%, rgba(197, 202, 205, 1)100%)
      // background: -o-radial-gradient(center, ellipse cover, rgba(255, 255, 255, 1)30%, rgba(197, 202, 205, 1)100%)
  .sideBar-content.active
    animation: sideBarContentActive $direction
    bottom: 0
    left: 0
  .sideBar-content.notActive
    animation: sideBarContentNotActive $direction
    bottom: 100vh
    left: 100vw

// @media screen and (max-width: 992px)
// @media (orientation: landscape)
</style>
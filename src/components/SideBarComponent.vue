<template lang="pug">
  #sidebar-component(class="animated fadeIn")
    .sideBar-content(:class="[ isActive ? 'active' : 'notActive' ]")
      sloganComponent(:sidebarIsActive="isActive")
      .btn-box(v-if="isActive")
        .type-btn.first(
            v-for="(item, index) in btnGroup"
            :key="index"
            class="animated fadeInRight"
            )
          .type-btn.second {{item}}
    .sideBar-icon(
      @click="clickSideBarIcon"
      v-show="showMenuIcon"
      )
      .line-top(:class="[ isActive ? 'active' : 'notActive' ]")
      .line-bottom(:class="[ isActive ? 'active' : 'notActive' ]")
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
      showMenuIcon: false,
      btnGroup: [
        'griphic',
        'UI',
        'experience'
      ]
    }
  },
  mounted() {
    this.showMenuIcon = !(this.$route.path === '/')
    this.isActive = this.$route.path === '/'
  },
  computed: {
  },
  methods: {
    clickSideBarIcon() {
      this.isActive = !this.isActive
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
<style lang="sass">

@import '../assets/styles/var.sass'

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
    overflow: scroll
    position: fixed
    top: 0px
    right: 0px
    bottom: 100vh
    left: 100vw
    background-color: $BG-color
    height: 100vh
    .btn-box
      margin-top: 15vh
      .type-btn
        margin: 0 auto
        height: 100px
        width: 50%
        border-radius: 1000px
      .first
        margin-bottom: 5vh
        box-sizing: border-box
        border: 1px #ffffff solid
        box-shadow: inset 12px 20px 7px -18px #e0e0e0
        -webkit-box-shadow: inset 12px 20px 7px -18px #e0e0e0
        -moz-box-shadow: inset 12px 20px 7px -18px #e0e0e0
        -o-box-shadow: inset 12px 20px 7px -18px #e0e0e0
        .second
          box-shadow: inset -10px -15px 7px -11px #FFFFFF
          -webkit-box-shadow: inset -10px -15px 7px -11px #FFFFFF
          -moz-box-shadow: inset -10px -15px 7px -11px #FFFFFF
          -o-box-shadow: inset -10px -15px 7px -11px #FFFFFF
      .type-btn
        .second
          width: 100%
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
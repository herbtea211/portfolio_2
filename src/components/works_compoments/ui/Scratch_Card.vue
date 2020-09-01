<template lang="pug">
  #scratch-card
    .layout(ref="el_layout")
      img.imgBox(src="@/assets/images/works_img/ui/scratch_card/new_bg_470x846.png", ref="el_img")
      .main
        scratchCardBody(
          :winIsOnresize="winOnresize"
          :setOnStartStatus="setOnStart"
          :bodyCanvasSizeStatus="bodyCanvasSize"
          :isOnStart="onStart"
          :setAlertStatus="setAlert"
          )
        .footer
          el-button(
            type="danger"
            @click="start"
          ) 點我開始刮刮卡遊戲
        .alert(v-show="alert.show")
          .alert-box
            img.alert-bg(src="@/assets/images/works_img/ui/scratch_card/alert_win.png")
            span.message {{alert.message}}
            img.confirm-btn(src="@/assets/images/works_img/ui/scratch_card/btn_confirm.png", @click="setAlert(false)")

</template>

<script>

import scratchCardBody from '../../Scratch_Card_body'

export default {
  name: 'scratchCard',
    components: {
      scratchCardBody
    },
    data () {
    return {
      bgImgSize: {
				w: 470,
				h: 846,
				scale: 1.8
			},
      winSize: {
				w: 0,
				h: 0,
				scale: 0
      },
      bodyCanvasSize: {
        w: null,
        h: null
      },
      winOnresize: false,
      onStart: false,
      alert: {
        show: false,
        message: '恭喜獲得,超級大獎250元',
      }
    }
  },
  computed: {
    
  },
  mounted () {
    this.setLayout()

    window.onresize = () => {
			this.setOnStart(false)
			this.setLayout()
			this.winOnresize = !this.winOnresize
		}

		// window.onorientationchange = () => {
		// 	this.setOnStart(false)
		// 	this.setLayout()
		// 	this.winOnresize = !this.winOnresize
		// }
    
},
  methods: {
    setAlert(isShow) {
      this.alert.show = isShow
    },
    start() {
			this.onStart = true
		},
    setOnStart(isOnStart) {
      this.onStart = isOnStart
    },
    setLayout() {
			this.winSize.w = window.innerWidth
			this.winSize.h = window.innerHeight

			this.winSize.scale = this.winSize.h / this.winSize.w

			if(this.winSize.scale <= 1) {
				// 橫式
				this.$refs.el_layout.style.width = (this.winSize.h / this.bgImgSize.scale).toString() + 'px'
				this.$refs.el_layout.style.height = `${this.winSize.h}px`
				this.$refs.el_img.style.height = `${this.winSize.h}px`

			} else {
				// 直式
				if(this.winSize.scale > this.bgImgSize.scale) {
					// 比圖片長, 寬100%
					this.$refs.el_layout.style.width = `${this.winSize.w}px`
					this.$refs.el_layout.style.height = `${this.$refs.el_layout.clientWidth * this.bgImgSize.scale}px`
					this.$refs.el_img.style.width = `${this.winSize.w}px`

				} else {
					// 比圖片短
					this.$refs.el_layout.style.width = (this.winSize.h / this.bgImgSize.scale).toString() + 'px'
					this.$refs.el_layout.style.height = `${this.winSize.h}px`
					this.$refs.el_img.style.height = `${this.winSize.h}px`

				}
      }
      
      this.bodyCanvasSize.w = this.$refs.el_layout.clientWidth
			this.bodyCanvasSize.h = this.$refs.el_layout.clientHeight
		}

  },
  watch: {

  }
}
</script>

<style lang="sass">

  #scratch-card
    .layout
      overflow: hidden
      margin: 0 auto
      position: relative
      .main
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: 0
        .footer
          text-align: center
          .el-button--danger
            background-color: #d61e0d
            margin-top: 50px
        .alert
          // background-color: #464646bf
          position: absolute
          left: 0
          right: 0
          bottom: 0
          top: 0
          display: flex
          flex-direction: column
          flex-wrap: nowrap
          justify-content: center
          align-items: center
          .alert-box
            width: 100%
            display: flex
            flex-direction: column
            flex-wrap: nowrap
            justify-content: center
            align-items: center
            position: relative
            .alert-bg
              width: 100%
              box-shadow: 0px 10px 18px rgba(0, 0, 0, 69%)
            .message
              position: absolute
              width: 70%
              text-align: center
              background: -webkit-linear-gradient(#f7f6e2, #c1a413)
              -webkit-background-clip: text
              -webkit-text-fill-color: transparent
              font-size: 20px
              font-weight: bolder
            .confirm-btn
              position: absolute
              bottom: -10%
              width: 36%

</style>

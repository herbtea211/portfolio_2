<template lang="pug">
  #scratch-card
    .layout(ref="el_layout")
      img.imgBox(src="@/assets/images/works_img/ui/scratch_card/new_bg_470x846.png", ref="el_img")
      .main
        .header
          img.img-logo(src="@/assets/images/works_img/ui/scratch_card/logo.png")
          img.img-title(src="@/assets/images/works_img/ui/scratch_card/title.png")
        scratchCardBody(
          :winIsOnresize="winOnresize"
          :setOnStartStatus="setOnStart"
          :bodyCanvasSizeStatus="bodyCanvasSize"
          :isOnStart="onStart"
          :setAlertStatus="setAlert"
          )
        .footer
          .right-box(@click="start")
            img.btn-bg(src="@/assets/images/works_img/ui/scratch_card/btn_start.png")
            img.btn-text(src="@/assets/images/works_img/ui/scratch_card/font_start.png")
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
        .header
          .img-logo
            width: 15%
            position: absolute
            left: 10px
            top: 10px
          .img-title
            position: absolute
            left: 0px
            right: 0px
            top: 0px
            width: 100%
        .footer
          display: flex
          flex-direction: row
          flex-wrap: nowrap
          position: absolute
          bottom: 0
          left: 0
          right: 0
          color: #ffffff
          margin: 10px
          .left-box
            flex: 1 1 10px
            .coupon-box
              position: relative
              margin-bottom: 10px
              display: flex
              flex-direction: row
              flex-wrap: nowrap
              align-items: center
              font-size: 16px
              img
                width: 100%
              .coupon
                position: absolute
                left: 5%
                color: #000000
            .count-box
              position: relative
              display: flex
              flex-direction: row
              flex-wrap: nowrap
              align-items: center
              img
                width: 100%
              .count
                position: absolute
                right: 5%
                text-align: center
                font-weight: bolder
                font-size: 40px
                width: 25%
          .right-box
            flex: 1 1 10px
            position: relative
            display: flex
            flex-direction: row
            flex-wrap: nowrap
            justify-content: center
            align-items: center
            .btn-bg
              position: absolute
              width: 67%
            .btn-text
              position: absolute
              width: 40%
          // @media(max-width:812px)
          //   @media(orientation:landscape)
          //     margin: 3px
          //     .left-box
          //       flex: 1.6 1 10px
          //       .coupon-box
          //         .coupon
          //           font-size: 10px
          // @media(max-width:1200px)
          //   @media(orientation:landscape)
          //     .left-box
          //       .count-box
          //         .count
          //           font-size: 18px
          // @media(max-width:576px)
          //   .left-box
          //       .count-box
          //         .count
          //           font-size: 20px
          //   @media(orientation:landscape)
          //     .left-box
          //       .count-box
          //         .count
          //           font-size: 10px
        .alert
          background-color: #464646bf
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
              font-size: 36px
              font-weight: bolder
            .confirm-btn
              position: absolute
              bottom: -10%
              width: 36%
        // @media(max-width:1400px)
        //   .alert
        //     .alert-box
        //       .message
        //         font-size: 36px
        //   @media(orientation:portrait)
        //     .alert
        //       .alert-box
        //         .message
        //           font-size: 40px
        // @media(max-width:900px)
        //   @media(orientation:portrait)
        //     .alert
        //       .alert-box
        //         .message
        //           font-size: 32px
        //   @media(orientation:landscape)
        //     .alert
        //       .alert-box
        //         .message
        //           font-size: 12px

            

</style>

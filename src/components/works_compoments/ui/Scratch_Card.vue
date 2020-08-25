<template lang="pug">
  #scratch-card
    .layout(ref="el_layout")
      img.imgBox(src="@/assets/images/works_img/ui/scratch_card/new_bg_470x846.png", ref="el_img")
      .main
        .header
          img.img-logo(src="@/assets/images/works_img/ui/scratch_card/logo.png")
          img.img-title(src="@/assets/images/works_img/ui/scratch_card/title.png")
      //-   Body(:winIsOnresize = "winOnresize")
      //-   Footer
      //-   Alert

</template>

<script>

export default {
  name: 'scratchCard',
    components: {
      
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

    }
  },
  computed: {
    
  },
  mounted () {
    this.setLayout()
    
},
  methods: {
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

</style>

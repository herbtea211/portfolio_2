<template lang="pug">
  #scratch-card-body(ref="el_body")
    img.mask-img(src="../assets/images/works_img/ui/scratch_card/mask.png")
    img.bg-img(src="../assets/images/works_img/ui/scratch_card/logo.png")
</template>

<script>

import img from '../assets/images/works_img/ui/scratch_card/logo.png'
import bgImg from '../assets/images/works_img/ui/scratch_card/mask.png'

export default {
  name: 'scratchCardBody',
    components: {
   
    },
    props: [
      'winIsOnresize',
      'setOnStartStatus',
      'bodyCanvasSizeStatus',
      'isOnStart',
      'setAlertStatus'
    ],
    data () {
    return {
      isEraser:false,
			canvasSize: {
				w: 0,
				h: 0
			},
			initMaskPixelProportion: 0,
			bgCtx: null,
			maskCtx: null
    }
  },
  computed: {
    
  },
  mounted () {
    setTimeout(() => {
			this.createCanvas()
		}, 5)
  },
  methods: {
    closeStartBtn() {
      this.setOnStartStatus(false)
    },
    eraserImg(maskCtx, e, moveType) {
			maskCtx.beginPath()
			maskCtx.fillStyle = '#FFFFFF'
			maskCtx.globalCompositeOperation = "destination-out"

			let eraserSize = this.bodyCanvasSizeStatus.w / 10

			if(moveType === 'mousemove') {
				
				maskCtx.arc(e.offsetX, e.offsetY, eraserSize, 0, 2 * Math.PI)
			} else {
				e.preventDefault()
				
				let mask = document.getElementById('mask-canvas')
				
				let nodeApp = document.getElementById('app')
				
				let a = (nodeApp.clientWidth - mask.clientWidth) / 2

				let offsetX = e.targetTouches[0].clientX - a
				let offsetY = e.targetTouches[0].clientY - this.$vnode.elm.offsetTop

				maskCtx.arc(offsetX, offsetY, eraserSize, 0, 2 * Math.PI)
			}
			
			maskCtx.fill()

    },
    async resetCanvas() {

			let nodeArray = this.$refs.el_body.getElementsByTagName('canvas')

			await this.$refs.el_body.removeChild(nodeArray[0])
			await this.$refs.el_body.removeChild(nodeArray[0])

			this.createCanvas()
    },
    maskProportion(maskCtx) {

			let isMaskPixel = []
			let notMaskPixel = []
			let allPixel = maskCtx.getImageData(0, 0, this.canvasSize.w, this.canvasSize.h).data

			allPixel.forEach((pixel) => {
				if(pixel === 0) {
					isMaskPixel.push(pixel)
				} else {
					notMaskPixel.push(pixel)
				}
			})

			let maskPixelProportion = isMaskPixel.length / notMaskPixel.length

			return maskPixelProportion

    },
    createCanvas() {
			let bodyMargin = 5

			this.canvasSize.w = this.bodyCanvasSizeStatus.w - (bodyMargin * 2)
			this.canvasSize.h = this.bodyCanvasSizeStatus.h / 2

			this.$refs.el_body.style.marginLeft = `${bodyMargin}px`
			let bg_canvas = document.createElement('canvas')

			bg_canvas.setAttribute('width', this.canvasSize.w)
			bg_canvas.setAttribute('height', this.canvasSize.h)
			bg_canvas.setAttribute('class', 'bg-canvas')

			let mask_canvas = document.createElement('canvas')
			mask_canvas.setAttribute('width', this.canvasSize.w)
			mask_canvas.setAttribute('height', this.canvasSize.h)
			mask_canvas.setAttribute('class', 'mask-canvas')
			mask_canvas.setAttribute('id', 'mask-canvas')
			mask_canvas.style.position = 'absolute'
			mask_canvas.style.top = '0'
			mask_canvas.style.left = '0'

			this.$refs.el_body.appendChild(bg_canvas)
			this.$refs.el_body.appendChild(mask_canvas)

			if(bg_canvas.getContext && mask_canvas.getContext) {
				this.bgCtx = bg_canvas.getContext('2d')
				this.maskCtx = mask_canvas.getContext('2d')

				let iconW = this.canvasSize.w / 4 - 10

				let logoPos = this.setLogoPos(iconW)

				let bgImgObj = new Image()
				bgImgObj.src = bgImg
				bgImgObj.onload = () => {
					logoPos.forEach((pos) => {
						this.bgCtx.drawImage(bgImgObj, pos.x, pos.y, iconW, iconW)
						
					})
				}
				bgImgObj.onerror = () => {
				}
				
				let maskimgObj = new Image()
				maskimgObj.src = img
				maskimgObj.onload = () => {
					logoPos.forEach((pos) => {
						this.maskCtx.drawImage(maskimgObj, pos.x, pos.y, iconW, iconW)
						
					})
				}
				maskimgObj.onerror = () => {
					
				}
				
			} else {
				return
			}

    },
    maskAddListener() {
			let mask_canvas = document.getElementById('mask-canvas')

			mask_canvas.addEventListener('mousedown', (e) => {
				this.isEraser = true
			})

			mask_canvas.addEventListener('mousemove', (e) => {
				if(this.isEraser) {
					this.eraserImg(this.maskCtx, e, 'mousemove')
				}
			})

			mask_canvas.addEventListener('mouseout', (e) => {
				this.isEraser = false
			})


			mask_canvas.addEventListener('mouseup', (e) => {
        this.isEraser = false
        if(this.maskProportion(this.maskCtx) >= 10.5) {
					this.openAlert()
				}
			
			}, false)

			mask_canvas.addEventListener('touchstart', (e) => {
				this.isEraser = true
			}, false)

			mask_canvas.addEventListener('touchend', () => {
        this.isEraser = false
        if(this.maskProportion(this.maskCtx) >= 10.5) {
					this.openAlert()
				}
			}, false)

			mask_canvas.addEventListener('touchmove', (e) => {
				if(this.isEraser) {
					this.eraserImg(this.maskCtx, e, 'touchmove')
				}
			}, false)

			// 可以不用
			mask_canvas.addEventListener('touchcancel', (e) => {
				this.isEraser = false
			}, false)

		},
		maskRemoveListener() {
			let mask_canvas = document.getElementById('mask-canvas')

			mask_canvas.removeEventListener('mousedown', (e) => {
			},false)

			mask_canvas.removeEventListener('mousemove', (e) => {
			}, false)

			mask_canvas.removeEventListener('mouseout', (e) => {
			}, false)

			mask_canvas.removeEventListener('mouseup', (e) => {
			}, false)

			mask_canvas.removeEventListener('touchstart', (e) => {
			}, false)

			mask_canvas.removeEventListener('touchend', () => {
			}, false)

			mask_canvas.removeEventListener('touchmove', (e) => {
			}, false)

			// 可以不用
			mask_canvas.removeEventListener('touchcancel', (e) => {	
			}, false)

		},
		setLogoPos(iconW) {

			let gridW = this.canvasSize.w / 3
			let gridH = this.canvasSize.h / 3

			let logoPos = [
				{x: (gridW - iconW) / 2, y: (gridH - iconW) / 2},
				{x: (this.canvasSize.w - iconW) / 2, y: (gridH - iconW) / 2},
				{x: (gridW * 2) + ((gridW - iconW) / 2), y: (gridH - iconW) / 2},

				{x: (gridW - iconW) / 2, y: gridH + ((gridH - iconW) / 2)},
				{x: (this.canvasSize.w - iconW) / 2, y: gridH + ((gridH - iconW) / 2)},
				{x: (gridW * 2) + ((gridW - iconW) / 2), y: gridH + ((gridH - iconW) / 2)},
				
				{x: gridH - (iconW / 2), y: (gridH * 2) + ((gridH - iconW) / 2)},
				{x: (gridW * 2) - (iconW / 2), y: (gridH * 2) + ((gridH - iconW) / 2)},
			]

			return logoPos

    },
    openAlert() {

      this.closeStartBtn()
      this.resetCanvas()
      this.setAlertStatus(true)

		},
  },
  watch: {
    isOnStart(current, old) {
      if(current) {
				this.maskAddListener()
			} else {
				this.maskRemoveListener()
			}
    },
    winIsOnresize(current, old) {
      this.resetCanvas()
    }

  }
}
</script>

<style lang="sass">

  #scratch-card-body
    color: #EEE
    margin-top: 50%
    position: relative
    .mask-img
      display: none
    .bg-img
      display: none

  
</style>

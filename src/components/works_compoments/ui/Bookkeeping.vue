<template lang="pug">
  #bookkeeping
    h2 work-bookkeeping
    .real-BK-layout
        .content
            .control-box
                .btn-box(
                    ref="btn_box"
                    )
                    .control-btn(
                        v-for="(item, index) in controlBoxConfig.btnConfig"
                        @click="clickControlBtn(index)"
                        :key="item.key"
                        )
                        h2 {{item.title}}
                        h1 {{item.balance}}
                    .moveAdd-box(
                        ref="move_add_box"
                        @click="openAddItem('moveBtn')"
                        )
                        i(class="el-icon-plus")
                .income
                    h1 {{controlBoxConfig.incomeConfig.balance}}
                    h4 {{controlBoxConfig.incomeConfig.title}}
            .items-box
                .scroll-view
                    ul.profit-list(v-if="currentDisplayIsTop")
                        li(
                            v-for="(item, index) in profitList"
                            :key="index"
                            )
                            .profit-item-box
                                span.item-name {{item.name}}
                                span {{item.balance}}
                            i(
                                @click="openAddItem('editBtn', {list: profitList, index: index})"
                                class="el-icon-edit"
                                )
                    ul.profit-list(v-else)
                        li(
                            v-for="(item, index) in expendituretList"
                            :key="index"
                            )
                            .profit-item-box
                                span.item-name {{item.name}}
                                span {{item.balance}}
                            i(
                                @click="openAddItem('editBtn', {list: expendituretList, index: index})"
                                class="el-icon-edit"
                                )
                .list-bottom-box(
                    v-show="openAddItemGroup"
                    ref="list_bottom_box"
                    )
                    .list-mask
                    .list-item-edit-box
                        .input-box
                            el-input(
                                v-model="addNewItem.name"
                            )
                            el-input(
                                v-model="addNewItem.balance"
                            )
                        .check-box
                            el-button.cancel(
                                @click="openAddItem('cancel')"
                            ) 取消
                            el-button.delete(
                                v-show="displayDeleteBtn"
                                @click="deleteItem()"
                            ) 刪除
                            el-button.check(
                                @click="checkAddListData()"
                            ) 確定
        footer(
            ref="footer"
        )
            .footerMask
            .text-box
                span 銀行存款
            .edit-box(
                @keyup.enter="verificationNumber(bankSavings)"
            )
                el-input(
                    ref="bankSavingsInput"
                    v-model="bankSavings"
                    @blur="verificationNumber(bankSavings)"
                    @focus="moveElement()"
                )
        .insole
    .description-box(
        v-if="displayDescription"
    )
        h4 這個應用軟體是給存不到錢的<b>理財白痴使用的!!</b><br>最適合只有一份收入,永遠<b>不知道錢花去哪的人</b>使用<br>沒有複雜的功能,分期付款功能,一堆預設標籤,也沒有惱人的會計概念,只要確實的輸入“收入”與“支出”的項目,就可以好好檢視“為何你存不到錢?!?!”<br>針對自己的問題作改善,漸漸的就可以養成儲蓄的習慣<br>使用原則:<b>只要是從口袋裡拿出去的！！都是支出！！</b><br>使用建議:
        ul
            li 第一個月 > 確實記錄每筆支出與收入
            li 第二個月 > 規劃每個月的存款,並計為"支出"(只要是從口袋裡拿出去的！！都是支出！！
            li 第三個月 > 詳細規劃每個月的支出分配
            li 第四個月 > 感受儲蓄的重要！！！
        .btn-box
            el-button(
                @click="displayDescription = false"
            ) 開始試用

</template>

<script>


export default {
  name: 'bookkeeping',
    components: {

    },
    data () {
    return {
        displayDescription: true,
        choseItem: {
            index: null,
            list: null
        },
        displayDeleteBtn: false,
        isOnMobile:false,
        openAddItemGroup: false,
        openFrom: '',
        currentDisplayIsTop: false,
        addNewItem: {
            name: '新增項目',
            balance: '新增金額',
            index: null,
            list: null
        },
        bankSavings: '0',
        controlBoxConfig:{
            incomeConfig: {
                title: '可用餘額',
                balance: 0
            },
            btnConfig: [
                {
                    key: 'top',
                    title: '收入',
                    balance: 0
                },
                {
                    key: 'bottom',
                    title: '支出',
                    balance: 0
                }
            ]
        },
        profitList: [
            {
                name: '薪資',
                balance: 35000
            }
        ],
        expendituretList: [
            {
                name: '房租',
                balance: 8000
            }
        ]
    }
  },
  computed: {
    
  },
  mounted () {
    this.currentDisplayIsTop = true

    this.computedAllBalance()

    this.isOnMobile = this.isMobile()

    window.onresize = () => {
        this.currentDisplayIsTop = false
        setTimeout(() => {
            this.currentDisplayIsTop = true
        }, 10)
    }
},
  methods: {
      verificationNumber(inputCon) {

        let reg = /^(0|[1-9][0-9]*)$/

        if(reg.test(inputCon)) {
            this.$refs.bankSavingsInput.blur()
            if(this.isOnMobile) {
                this.$refs.footer.classList.remove('open-keyboard-on-mobile')
            }
        } else {
            this.$message({
                message: '存款金額錯誤',
                center: true,
            })
        }
      },
      clickControlBtn(index) {
        if(index === 0) {
            this.currentDisplayIsTop = true
        } else if(index === 1) {
            this.currentDisplayIsTop = false
        }
     },
     openAddItem(from, data) {
         this.openAddItemGroup = !this.openAddItemGroup
         this.$refs.move_add_box.style.transform = this.openAddItemGroup ? 'rotate(45deg)' : 'rotate(0deg)'

        if(this.isOnMobile) {
            this.$refs.list_bottom_box.classList.add('open-keyboard-on-mobile')
        }

         switch(from) {
            case 'moveBtn':
                this.openFrom = 'moveBtn'
                break;
            case 'editBtn':
                if(data) {
                    this.displayDeleteBtn = true
                    let currentIndex = data.index
                    let currentList = data.list
                    this.addNewItem = {
                        name: currentList[currentIndex].name,
                        balance: currentList[currentIndex].balance,
                        index: currentIndex,
                        list: currentList
                    }

                    this.choseItem = {
                        index: currentIndex,
                        list: currentList
                    }
                }
                this.openFrom = 'editBtn'
                break;
            case 'cancel':
                this.addNewItem = {
                        name: '新增項目',
                        balance: '新增金額',
                        index: null,
                        list: null
                    }
                this.openFrom = ''
                if(this.isOnMobile) {
                    this.$refs.list_bottom_box.classList.remove('open-keyboard-on-mobile')
                }
                break;
            default:
                break;
         }
     },
     async checkAddListData() {
         // 先驗證資料
        let regNumber = /^(0|[1-9][0-9]*)$/
       
         if(regNumber.test(this.addNewItem.balance) && (parseInt(this.addNewItem.balance, 10) >= 0) && (this.addNewItem.name !== '')) {
           
        switch(this.openFrom) {
            case 'moveBtn':
                await this.addItem()
                break;
            case 'editBtn':
                await this.editItem()
                break;
            default:
                break;
         }

         this.openFrom = ''

         this.addNewItem = {
            name: '新增項目',
            balance: '新增金額',
            index: null,
            list: null
        }

        this.openAddItemGroup = false
        this.$refs.move_add_box.style.transform = this.openAddItemGroup ? 'rotate(45deg)' : 'rotate(0deg)'

        if(this.isOnMobile) {
            this.$refs.list_bottom_box.classList.remove('open-keyboard-on-mobile')
        }

        this.computedAllBalance()
             // 送出
         } else {
             this.$message({
                message: '輸入錯誤',
                center: true,
            })
         }
     },
     addItem() {
         let addList = null

         addList = this.currentDisplayIsTop ? this.profitList : this.expendituretList

         if(addList) {
             let realItem = {
                 name: this.addNewItem.name,
                 balance: parseInt(this.addNewItem.balance, 10)
             }
             addList.push(realItem)
         }
     },
     editItem() {
         let realItem = this.addNewItem
         this.addNewItem.list[realItem.index] = {
             name: realItem.name,
             balance: parseInt(realItem.balance, 10)
         }
     },
     deleteItem() {

        this.choseItem.list.forEach((item, index, array) => {
            if(index === this.choseItem.index) {
                array.splice(index,1)
            }
        })

         this.choseItem = {
            index: null,
            list: null
        }

        this.addNewItem = {
                name: '新增項目',
                balance: '新增金額',
                index: null,
                list: null
            }

        this.displayDeleteBtn = false

        this.openFrom = ''

        this.openAddItemGroup = false
        this.$refs.move_add_box.style.transform = this.openAddItemGroup ? 'rotate(45deg)' : 'rotate(0deg)'

        if(this.isOnMobile) {
            this.$refs.list_bottom_box.classList.remove('open-keyboard-on-mobile')
        }

        this.computedAllBalance()
     },
     computedAllBalance() {

         let allProfit = this.profitList.reduce((acc, currentValue) => {
             return acc + currentValue.balance
         }, 0)

         let allexpendituret = this.expendituretList.reduce((acc, currentValue) => {
             return acc + currentValue.balance
         }, 0)

         this.controlBoxConfig.btnConfig.forEach((item) => {
             if(item.key === 'top') {
                 item.balance = parseInt(allProfit, 10)
             } else if (item.key === 'bottom') {
                 item.balance = parseInt(allexpendituret, 10)
             }
         })

         this.controlBoxConfig.incomeConfig.balance = allProfit - allexpendituret

     },
     isMobile() {

        try{
            document.createEvent("TouchEvent")
            return true
        }
        catch(e){
            return false
        }
    },
    moveElement() {
        if(this.isOnMobile) {
            this.$refs.footer.classList.add('open-keyboard-on-mobile')
        }
    },
    start() {
        this.displayDescription = false
    }
  },
  watch: {
      currentDisplayIsTop(current, old) {
            let btnH = this.$refs.btn_box.children[0].offsetHeight
            let moveBtnH = this.$refs.move_add_box.offsetHeight

          if(current) {
              this.$refs.move_add_box.style.top = `${(btnH - moveBtnH) / 2}px`
          } else {
              this.$refs.move_add_box.style.top = `${((btnH - moveBtnH) / 2) + btnH}px`
          }
      }
  }
}
</script>

<style lang="sass">

$mainColor: #48d7de
$BGColor: #171d24
$mainBGColor: #0f131f
$textColor: #989898
$headerH: 8vh
$footerH: 80px
$btn-BoxH-In-Por: 100px
$btnBalanceMarginLeft: 10px
$moveAddBtnSize: 50px


@import '../../../assets/styles/var'

#works
    .workCon
        background-color: $BGColor

#bookkeeping
    color: $textColor
    width: 100vw
    .el-button
        background: $BGColor
        border: 1px solid $BGColor
        border-radius: 0px
        height: 70px
        color: #b3b3b3
        &:hover
            color: #ffffff
    >h2
        // padding-top: 10px
    .el-input
        height: 100%
        width: 100%
        .el-input__inner
            border-radius: 0px
            background-color: $BGColor
            border: 1px solid $BGColor
            height: 100%
            width: 100%
            line-height: unset
            font-size: 36px
            letter-spacing: 3px
    // overflow: hidden
    h2
        height: $headerH
        margin-left: 10px
    .real-BK-layout
        height: 100vh - $headerH
        display: flex
        flex-flow: column nowrap
        justify-content: space-between
        .content
            flex: 1 1 10px
            display: flex
            flex-flow: row nowrap
            .control-box
                cursor: pointer
                flex: 1 1 100px
                display: flex
                flex-flow: column nowrap
                .btn-box
                    flex: 100 1 10px
                    display: flex
                    flex-flow: column nowrap
                    position: relative
                    .control-btn
                        box-sizing: border-box
                        border: 2px solid $mainBGColor
                        display: flex
                        align-items: center
                        justify-content: center
                        flex: 1 1 10px
                        position: relative
                        h2
                            margin-left: 0px
                            text-align: center
                            font-size: 50px
                            letter-spacing: 10px
                        h1
                            position: absolute
                            left: $btnBalanceMarginLeft
                            bottom: 0
                            letter-spacing: 3px
                            color: $mainColor
                            font-weight: bold
                    .moveAdd-box
                        z-index: 9999
                        width: $moveAddBtnSize
                        height: $moveAddBtnSize
                        background-color: $mainColor
                        border-radius: 1000px
                        position: absolute
                        right: -($moveAddBtnSize / 2)
                        top: 0px
                        -moz-transition: top 0.5s
                        -webkit-transition: top 0.5s
                        -o-transition: top 0.5s
                        -ms-transition: top 0.5s
                        display: flex
                        justify-content: center
                        align-items: center
                        color: $BGColor
                        font-size: $moveAddBtnSize / 2
                        transform: rotate(0deg)
                        transition: transform 0.5s
                .income
                    flex: 1 1 80px
                    display: flex
                    align-items: center
                    justify-content: space-between
                    padding: 0px $btnBalanceMarginLeft
                    box-sizing: border-box
                    border: 2px solid $mainBGColor
                    h1
                        letter-spacing: 3px
                        color: $mainColor
                        font-weight: bold
                    h4
                        color: #ffffff
            .items-box
                background-color: $mainBGColor
                flex: 4 1 100px
                position: relative
                .scroll-view
                    overflow-y: auto
                    position: absolute
                    top: 0
                    right: 0
                    left: 0
                    bottom: 0
                    .profit-list
                        list-style: none
                        padding-left: 80px
                        padding-right: 20px
                        position: absolute
                        top: 0
                        right: 0
                        left: 0
                        li
                            padding: 10px 0px
                            display: flex
                            justify-content: space-between
                            .profit-item-box
                                flex: 7 1 10px
                                display: flex
                                justify-content: space-between
                                .item-name
                                    // margin-left: 50%
                            i
                                flex: 1 1 10px
                                text-align: end
                            &:hover
                                color: #ffffff
                .list-bottom-box
                    background-color: #ffa50036
                    position: absolute
                    top: 0
                    right: 0
                    left: 0
                    bottom: 0
                    .list-mask
                        position: absolute
                        top: 0
                        right: 0
                        left: 0
                        bottom: 0
                        background-color: $mainBGColor
                        opacity: 0.85
                    .list-item-edit-box
                        position: absolute
                        right: 0
                        left: 0
                        bottom: 0
                        margin: 2px
                        .input-box
                            display: flex
                            .el-input
                                margin: 0px 2px 2px 2px
                                .el-input__inner
                                    height: 60px
                                    font-size: 18px
                                    background-color: #1c2833
                                    color: #ffffff
                                    font-weight: lighter
                                    letter-spacing: 5px
                        .check-box
                            padding: 2px
                            display: flex
                            .el-button+.el-button
                                margin-left: 0px
                            .el-button
                                background: $BGColor
                                border: 1px solid $BGColor
                                border-radius: 0px
                                height: 70px
                                color: #b3b3b3
                                // margin: 2px
                                // box-sizing: border-box
                                &:hover
                                    color: #ffffff
                            .cancel
                                flex: 1 1 20px
                            .delete
                                flex: 1 1 20px
                                background-color: #212c3a
                            .check
                                flex: 2 1 50px
                                background-color: $mainColor
                                color: $BGColor
                .list-bottom-box.open-keyboard-on-mobile
                    position: fixed
                    top: 100px
                    right: 0
                    left: 0
                    z-index: 100000
                    .list-mask
                        position: fixed
                        top: 0
                        right: 0
                        left: 0
                        bottom: 0
                        background-color: #000000
                        opacity: 0.85
                    .list-item-edit-box
                        position: fixed
                        top: 100px
                        right: 0
                        left: 0
        footer
            flex: 0 1 $footerH
            display: flex
            font-size: 20px
            .footerMask
            .text-box
                display: flex
                align-items: center
                flex: 0 1 100px
                background-color: $BGColor
                span
                    margin-left: 10px
            .edit-box
                display: flex
                align-items: center
                justify-content: space-between
                flex: 1 1 10px
                padding: 0px 20px
                .el-input__inner
                    color: $mainColor
        footer.open-keyboard-on-mobile
            position: fixed
            top: 100px
            left: 0
            right: 0
            z-index: 10001
            .footerMask
                position: fixed
                top: 0
                right: 0
                left: 0
                bottom: 0
                background-color: #000000
                opacity: 0.9
            .text-box
                z-index: 1002
    .description-box
        position: fixed
        top: 0
        right: 0
        left: 0
        bottom: 0
        background-color: #000000
        z-index: 10000
        padding: 50px 55px
        letter-spacing: 3px
        overflow-y: auto
        h4
            margin: 10px auto 10px
            height: unset
            b
                color: $mainColor
        ul
            list-style: none
            padding-left: 0px
            li
                margin-bottom: 5px
        .btn-box
            width: 50%
            margin: 50px auto 0px
            .el-button
                width: 100%


@media screen and (max-width: 1400px)
    #bookkeeping
        h2
        .real-BK-layout
            .content
                div
                .control-box
                    flex: 2 1 100px
                .items-box
                    flex: 4 1 100px
            footer

@media screen and (max-width: 820px)
    @media (orientation: landscape) //  portrait 直視 , landscape 橫式
        #bookkeeping
            h2
                height: 15vh
            .real-BK-layout
                height: 85vh
                .content
                    div
                    .control-box
                        .btn-box
                            .control-btn
                                h2
                                    font-size: 24px
                                    line-height: 15vh
                footer
                    flex: 0 1 50px
            
@media screen and (max-width: 420px)
    @media (orientation: portrait) // 直視 , landscape 橫式
        #bookkeeping
            h2
            .real-BK-layout
                .content
                    flex-flow: column nowrap
                    .control-box
                        flex: 1 1 $btn-BoxH-In-Por
                        .btn-box
                            .control-btn
                                h2
                                    font-size: 24px
                                    line-height: 8vh
                                h1
                                    bottom: unset
                            .moveAdd-box
                                width: 30px
                                height: 30px
                                font-size: 15px
                                right: 10px
                    .items-box
                        flex: 100 1 10px
                        .scroll-view
                            .profit-list
                                padding-left: 20px
                footer
                    flex: 0 1 100px
                    .text-box
                    .edit-box
                        flex: 1 1 10px
                        padding: unset
                .insole
                    height: 50px
            .description-box
                .btn-box
                    width: 50%
                    margin: 20px auto 0px

</style>

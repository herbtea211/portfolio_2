<template lang="pug">
  #bookkeeping
    h2 bookkeeping
    .real-BK-layout
        .content
            .control-box
                .btn-box
                    .control-btn(v-for="(item, index) in controlBoxConfig.btnConfig" :key="index")
                        h2 {{item.title}}
                        h1 {{item.balance}}
                    .moveAdd-box
                .income
                    span {{controlBoxConfig.incomeConfig.balance}}
                    span {{controlBoxConfig.incomeConfig.title}}
            .items-box
                .scroll-view
                    ul.profit-list
                        li(v-for="(item, index) in profitList" :key="index")
                            i(class="el-icon-edit")
                            .profit-item-box
                                span.item-name {{item.name}}
                                span {{item.balance}}
                //- .list-bottom-box
                //-     .list-mask
                //-     .list-item-edit-box
                //-         .input-box
                //-             el-input(
                //-                 v-model="addNewItem.name"
                //-                 placeholder=""
                //-             )
                //-             el-input(
                //-                 v-model="addNewItem.balance"
                //-                 placeholder=""
                //-             )
                //-         .check-box
                //-             el-button.cancel 取消
                //-             el-button.check 確定
        footer
            .text-box
                span 銀行存款
            .edit-box(
                @keyup.enter="verificationNumber(bankSavings)"
            )
                el-input(
                    ref="bankSavingsInput"
                    v-model="bankSavings"
                    @blur="verificationNumber(bankSavings)"
                )
</template>

<script>


export default {
  name: 'bookkeeping',
    components: {

    },
    data () {
    return {
        addNewItem: {
            name: '',
            balance: 0
        },
        bankSavings: '0',
        controlBoxConfig:{
            incomeConfig: {
                title: '可用餘額',
                balance: 0
            },
            btnConfig: [
                {
                    title: '收入',
                    balance: 1200
                },
                {
                    title: '支出',
                    balance: 2100
                }
            ]
        },
        profitList: [
            {
                name: '薪資',
                balance: 2100
            },
            {
                name: '投資',
                balance: 200
            },
            {
                name: '薪資',
                balance: 2100
            },
            {
                name: '投資',
                balance: 200
            },
            {
                name: '薪資',
                balance: 2100
            },
            {
                name: '投資',
                balance: 200
            },
            {
                name: '薪資',
                balance: 2100
            },
            {
                name: '投資',
                balance: 200
            },
            {
                name: '薪資',
                balance: 2100
            },
            {
                name: '投資',
                balance: 200
            },
            {
                name: '薪資',
                balance: 2100
            },
            {
                name: '投資',
                balance: 200
            },
            {
                name: '薪資',
                balance: 2100
            },
            {
                name: '投資',
                balance: 200
            },
            {
                name: '薪資',
                balance: 2100
            },
            {
                name: '投資',
                balance: 200
            },
            {
                name: '薪資',
                balance: 2100
            },
            {
                name: '投資',
                balance: 200
            },
            {
                name: '薪資',
                balance: 2100
            },
            {
                name: '投資',
                balance: 200
            },
            {
                name: '薪資',
                balance: 2100
            },
            {
                name: '投資',
                balance: 200
            },
            {
                name: '薪資',
                balance: 2100
            },
            {
                name: '投資',
                balance: 200
            },
            {
                name: '薪資',
                balance: 2100
            },
            {
                name: '投資',
                balance: 200
            },
            {
                name: '薪資',
                balance: 2100
            },
            {
                name: '投資',
                balance: 200
            },

            {
                name: '薪資',
                balance: 2100
            },
            {
                name: '投資',
                balance: 200
            },

        ],
        expendituretList: [
            {
                name: '停車',
                balance: 2100
            },
            {
                name: '房租',
                balance: 200
            },
        ]
    }
  },
  computed: {
    
  },
  mounted () {
      
},
  methods: {
      verificationNumber(inputCon) {

        let reg = /^(0|[1-9][0-9]*)$/

        if(reg.test(inputCon)) {
            this.$refs.bankSavingsInput.blur()
        } else {
            this.$message({
                message: '存款金額錯誤',
                center: true,
            })
        }
      }
  },
  watch: {

  }
}
</script>

<style lang="sass">

$mainColor: #48d7de
$BGColor: #171d24
$mainBGColor: #121a2d
$textColor: #989898
$headerH: 8vh
$footerH: 80px
$btn-BoxH-In-Por: 100px
$btnBalanceMarginLeft: 10px
$moveAddSize: 80px


@import '../../../assets/styles/var'

#works
    .workCon
        background-color: $BGColor

#bookkeeping
    color: $textColor
    width: 100vw
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
            background-color: orange
            flex: 1 1 10px
            display: flex
            flex-flow: row nowrap
            .control-box
                background-color: #202931
                flex: 1 1 100px
                display: flex
                flex-flow: column nowrap
                .btn-box
                    flex: 100 1 10px
                    display: flex
                    flex-flow: column nowrap
                    position: relative
                    .control-btn
                        display: flex
                        align-items: center
                        justify-content: center
                        flex: 1 1 10px
                        position: relative
                        h2
                            margin-left: 0px
                            text-align: center
                        h1
                            position: absolute
                            left: $btnBalanceMarginLeft
                            bottom: 0
                    .moveAdd-box
                        z-index: 9999
                        width: $moveAddSize
                        height: $moveAddSize
                        background-color: $mainColor
                        border-radius: 1000px
                        position: absolute
                        right: -($moveAddSize / 2)
                .income
                    flex: 1 1 80px
                    display: flex
                    align-items: center
                    justify-content: space-between
                    padding: 0px $btnBalanceMarginLeft
                    span
                        font-size: 24px
            .items-box
                background-color: #2b323a
                flex: 4 1 100px
                position: relative
                .scroll-view
                    overflow: scroll
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
                                flex: 1 1 10px
                                display: flex
                                justify-content: space-between
                                .item-name
                                    margin-left: 50%
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
                        background-color: #000000cf
                    .list-item-edit-box
                        position: absolute
                        right: 0
                        left: 0
                        bottom: 0
                        .check-box
                            .el-button+.el-button
                                margin-left: 0px
                            .el-button
                                background: $BGColor
                                border: 1px solid $BGColor
                                border-radius: 0px
                            .cancel
                                width: 30%
                            .check
                                width: 70%
        footer
            flex: 0 1 $footerH
            display: flex
            font-size: 20px
            .text-box
                display: flex
                align-items: center
                flex: 0 1 100px
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
                footer
                    flex: 0 1 50px
            
@media screen and (max-width: 420px)
    @media (orientation: portrait) // 直視 , landscape 橫式
        #bookkeeping
            h2
            .real-BK-layout
                .content
                    flex-flow: column nowrap
                    div
                    .control-box
                        flex: 1 1 $btn-BoxH-In-Por
                    .items-box
                        flex: 100 1 10px
                footer
                    flex-flow: column nowrap
                    flex: 0 1 100px
                    .text-box
                        flex: 1 1 10px
                    .edit-box
                        flex: 1 1 10px
                        padding: unset

</style>

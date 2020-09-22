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
                ul.profit-list
                    li(v-for="(item, index) in profitList" :key="index")
                        i(class="el-icon-edit")
                        .profit-item-box
                            span.item-name {{item.name}}
                            span {{item.balance}}
                //- ul.expendituret-list
                //-     li(v-for="(item, index) in expendituretList" :key="index")
                .list-mask-box
                    .list-mask
                    .addList-box
                        .input-box
                            el-input(
                                v-model="addNewItem.name"
                                placeholder=""
                            )
                            el-input(
                                v-model="addNewItem.balance"
                                placeholder=""
                            )
                        .check-box
                            el-button.cancel 取消
                            el-button.check 確定
        footer
            .text-box
                span 銀行存款
            .edit-box
                el-input(
                    v-model="bankSavings"
                    placeholder="0"
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
        bankSavings: '',
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

  },
  watch: {

  }
}
</script>

<style lang="sass">

$mainColor: #48d7de
$BGColor: #171d24
$mainBGColor: #121a2d
$headerH: 8vh
$footerH: 20vh
$btn-BoxH-In-Por: 100px
$btnBalanceMarginLeft: 10px
$moveAddSize: 80px

@import '../../../assets/styles/var'

#works
    .workCon
        background-color: $BGColor

#bookkeeping
    width: 100vw
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
            // flex: 100 1 10px
            height: 100vh - $footerH
            display: flex
            flex-flow: row nowrap
            // div
            //     height: 100%
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
                // padding-left: $btnBalanceMarginLeft + 10px
                height: 100vh - $footerH
                background-color: #2b323a
                flex: 4 1 100px
                overflow: scroll
                position: relative
                .profit-list
                    list-style: none
                    padding-left: 80px
                    padding-right: 20px
                    li
                        display: flex
                        justify-content: space-between
                        padding: 20px 0px
                        .profit-item-box
                            flex: 1 1 10px
                            display: flex
                            justify-content: space-between
                            .item-name
                                margin-left: 50%
                .list-mask-box
                    position: sticky
                    left: 0
                    right: 0
                    bottom: 0
                    top: 0
                    .list-mask
                        width: 100%
                        height: 100vh - $footerH
                        background-color: #1b1b1bc2
                    .addList-box
                        position: absolute
                        left: 0
                        right: 0
                        bottom: 0
                        .input-box
                            display: flex
                            .el-input
                                height: 60px
                                .el-input__inner
                                    background-color: $BGColor
                                    border: 1px solid $BGColor
                                    height: 100%
                                    width: 100%
                                    line-height: unset
                                    font-size: 24px
                        .check-box
                            display: flex
                            button
                                background: #171e25
                                border: 1px solid #171e25
                                &:hover
                                    color: #fff
                                &:active
                                    color: #fff
                            .cancel
                                width: 20%
                            .check
                                width: 80%
        footer
            // flex: 1 1 $footerH
            height: $footerH
            display: flex
            font-size: 20px
            .text-box
                display: flex
                justify-content: flex-end
                align-items: center
                flex: 1 1 10px
                span
            .edit-box
                display: flex
                align-items: center
                justify-content: space-between
                flex: 3 1 10px
                padding: 0px 20px
                .el-input
                    height: 100%
                    width: 70%
                    .el-input__inner
                        background-color: $BGColor
                        border: 1px solid $BGColor
                        height: 100%
                        width: 100%
                        line-height: unset
                        font-size: 36px

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

</style>

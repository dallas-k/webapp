<template>
    <div id="stockView" >
        <commonTitle :sTitle="title" />
        <stockList />
    </div>
</template>

<script>
import commonTitle from '../components/common-title.vue'
import stockList from '../components/stock-list.vue'

export default {
    name: 'StockView',
    data() {
        return {
            title: '보유 주식 관리',
        }
    },
    components: {
        commonTitle,
        stockList
    },
}
</script>

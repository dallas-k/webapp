<template>
    <div class="about">
        <commonTitle :sTitle="title" />
        <div class='indicator' id="exchange">
            <h2>환율</h2>
            <div class="economy-list">
                <p><span class="title">미국 USD</span><span class="price">1,271.50원</span> <span class="change"><i class="fa fa-caret-up" aria-hidden="true"></i> 8.50</span></p>
                <p><span class="title">일본 JPY(100엔)</span><span class="price">970.87원</span> <span class="change"><i class="fa fa-caret-down" aria-hidden="true"></i> 1.1</span></p>
                <p><span class="title">유럽 EUR</span><span class="price">1,360.87원</span> <span class="change"><i class="fa fa-caret-down" aria-hidden="true"></i> 5.1</span></p>
                <p><span class="title">중국 CNY</span><span class="price">183.87원</span> <span class="change"><i class="fa fa-caret-down" aria-hidden="true"></i> 2.1</span></p>
            </div>
        </div>
        <div class='indicator' id="realty">
            <h2>유가, 금시세</h2>

        </div>
        <div class='indicator' id="stock">
            <h2>주요 지수</h2>
        </div>
    </div>
</template>

<script>
import commonTitle from '../components/common-title.vue'

export default {
    name: 'EconomyView',
    data() {
        return {
            title: '주요 경제 지표'
        }
    },
    components: {
        commonTitle
    }
}
</script>

<style scoped>
h2 {
    padding-left:24px;
    font-size:24px;
}
.indicator {
    margin-top:24px;
}
.indicator .economy-list {
    color:var(--color-dark);
}
.indicator .economy-list p {
    background-color: var(--color-white);
    margin:auto;
    width:80%;
    font-size:16px;
    padding:8px;
    border-top : 1px solid var(--color-dark);
}
.indicator .economy-list p:first-of-type{
    margin-top:12px;
}
.indicator .economy-list p .title {
    display:inline-block;
    width:30%;
    padding-left:12px;
}
.indicator .economy-list p .price {
    display:inline-block;
    width:30%;
    padding-left:12px;
}
.indicator .economy-list p .change {
    display:inline-block;
    width:30%;
    padding-left:12px;
}

@media screen and (max-width:573px){
    .indicator .economy-list p {
        font-size:12px;
    }
    .indicator .economy-list p:first-of-type{
        margin-top:8px;
    }
    .indicator .economy-list p .title {width:40%;}
    .indicator .economy-list p .price {width:25%;}
    .indicator .economy-list p .change {width:25%;}
}

</style>
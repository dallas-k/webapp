<template>
    <div class="about">
        <commonTitle :sTitle="title" />
        <div class='refresh'>
            <p>마지막 새로고침 : {{now}} <span class='refresh-icon'><i class="fa fa-refresh" aria-hidden="true"></i></span></p>
        </div>
        <div class='indicator' id="exchange">
            <h2>환율</h2>
            <div class="economy-list" v-for='ex in exchange' :key='ex.title'>
                <p><span class="title">{{ex.title}}</span><span class="price">{{ex.value}}원</span> <span class="change"> {{ex.change}}</span> <span class='direction'>{{ex.direction}}</span></p>
            </div>
        </div>
        <div class='indicator' id="realty">
            <h2>유가, 금시세</h2>
            <div class="economy-list" v-for='ex in oilGold' :key='ex.title'>
                <p><span class="title">{{ex.title}}</span><span class="price">{{ex.value}}원</span> <span class="change"> {{ex.change}}</span> <span class='direction'>{{ex.direction}}</span></p>
            </div>
        </div>
        <div class='indicator' id="stock">
            <h2>주요 지수</h2>
            <div class="economy-list" v-for='ex in Interest' :key='ex.title'>
                <p><span class="title">{{ex.title}}</span><span class="price">{{ex.value}}원</span> <span class="change"> {{ex.change}}</span> <span class='direction'>{{ex.direction}}</span></p>
            </div>
        </div>
    </div>
</template>

<script>
import commonTitle from '../components/common-title.vue'

export default {
    name: 'EconomyView',
    created() {
        this.$http.get('/api/exchange')
            .then( (response) => {
                this.exchange = response.data
            }) .catch(err => {
                alert(err);
                console.log(err);
            })
        this.$http.get('/api/oilGold')
        .then( (response) => {
            this.oilGold = response.data
        }) .catch(err => {
            alert(err);
            console.log(err);
        })
        this.$http.get('/api/Interest')
        .then( (response) => {
            this.Interest = response.data
        }) .catch(err => {
            alert(err);
            console.log(err);
        })
    },
    data() {
        return {
            title: '주요 경제 지표',
            exchange : [],
            oilGold : [],
            Interest : [],
            now : this.getDay()
        }
    },
    components: {
        commonTitle
    },
    methods : {
        getDay() {
            let today = new Date();
            let day = `${today.getFullYear()}/${today.getMonth()+1}/${today.getDate()}`;
            let time =  `${today.getHours()}:${today.getMinutes()}:${today.getMinutes()}`;
            return `${day} ${time}`;
        },
    }
}
</script>

<style scoped>
h2 {
    padding-left:24px;
    font-size:24px;
}
.refresh p {
    width:80%;
    text-align:right;
    font-size:12px;
}
.refresh-icon {
    margin-left:2px;
    font-size:inherit;
    cursor:pointer;
}
.refresh-icon:hover {
    color:var(--color-tomato);
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
    margin-top:8px;
}
.indicator .economy-list p .title {
    display:inline-block;
    width:30%;
    padding-left:12px;
}
.indicator .economy-list p .price {
    display:inline-block;
    width:25%;
    padding-left:12px;
}
.indicator .economy-list p .change {
    display:inline-block;
    width:20%;
    padding-left:12px;
}
.indicator .economy-list p .direction {
    display:inline-block;
    width:20%;
    padding-left:12px;
}

@media screen and (max-width:573px){
    .refresh p {
        width:90%;
        font-size:11px;
    }
    .indicator .economy-list p {
        font-size:12px;
    }
    .indicator .economy-list p:first-of-type{
        margin-top:4px;
    }
    .indicator .economy-list p .title {width:30%;}
    .indicator .economy-list p .price {width:30%;}
    .indicator .economy-list p .change {width:20%;}
    .indicator .economy-list p .direction {width:20%;}
}

</style>
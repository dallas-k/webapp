<template>
    <div class="about">
        <commonTitle :sTitle="title" />
        <div class='refresh'>
            <p>마지막 새로고침 : {{now}} <span class='refresh-icon'><i class="fa fa-refresh" aria-hidden="true"></i></span></p>
        </div>
        <div class='crawl-container container1'>
            <div class='indicator' id="exchange">
                <h2>환율</h2>
                <div class="economy-list" id='exchange-list' v-for='ex in exchange' :key='ex.title'>
                    <p><span class="title">{{ex.title}}</span><span class="price">{{ex.value}}원</span> <span class="change"> {{ex.change}}</span> <span class='direction'>{{ex.direction}}</span></p>
                </div>
            </div>
            <div class='container2'>
                <div class='indicator' id="realty">
                    <h2>유가, 금시세</h2>
                    <div class="economy-list" id='oilGold-list' v-for='ex in oilGold' :key='ex.title'>
                        <p><span class="title">{{ex.title}}</span><span class="price">{{ex.value}}원</span> <span class="change"> {{ex.change}}</span> <span class='direction'>{{ex.direction}}</span></p>
                    </div>
                </div>
                <div class='indicator' id="interest">
                    <h2>주요 지수</h2>
                    <div class="economy-list" id='interest-list' v-for='ex in Interest' :key='ex.title'>
                        <p><span class="title">{{ex.title}}</span><span class="price">{{ex.value}}</span></p>
                    </div>
                </div>
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
.container2 {
    margin-top:12px;
    display:flex;
}
.container2 #realty {
    width:60%;
}
.container2 #interest {
    width:30%;
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
#exchange {
    display:block;
    width:100%;
}
.indicator .economy-list {
    color:var(--color-dark);
}
.indicator .economy-list p {
    background-color: var(--color-white);
    margin:auto;
    width:80%;
    font-size:16px;
    padding:4px;
    border-top : 1px solid var(--color-dark);
}
.indicator .economy-list p:first-of-type{
    margin-top:8px;
}
.indicator .economy-list p .title {
    display:inline-block;
    width:40%;
    padding-left:12px;
}
.indicator .economy-list p .price {
    display:inline-block;
    width:25%;
    padding-left:12px;
}
.indicator .economy-list p .change {
    display:inline-block;
    width:15%;
    padding-left:12px;
}
.indicator .economy-list p .direction {
    display:inline-block;
    width:15%;
    padding-left:12px;
}
.indicator #interest-list p .title {
    display:inline-block;
    width:60%;
}
.indicator #interest-list p .price {
    display:inline-block;
    width:35%;
}

@media screen and (max-width:573px){
    .container2 {
        display: block;
    }
    .container2 #realty {
        width:100%;
    }
    .container2 #interest {
        width:80%;
    }
    .crawl-container {
        display:block;
    }
    .refresh p {
        width:90%;
        font-size:11px;
    }
    .indicator .economy-list p {
        font-size:12px;
    }
    .indicator .economy-list span {
        display: inline-block;
    }
    .indicator .economy-list p:first-of-type{
        margin-top:4px;
    }
    .indicator .economy-list p .title {width:40%;}
    .indicator .economy-list p .price {width:25%;}
    .indicator .economy-list p .change {width:15%;}
    .indicator .economy-list p .direction {width:15%;}

    .indicator #oilGold-list p .title {width:30%;}
    .indicator #oilGold-list p .price {width:30%;}

    .indicator #interest-list p span {
        text-align:center;
    }
}

@media screen and (min-width:1023px){

}

</style>
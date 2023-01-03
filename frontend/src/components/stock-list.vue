<template>
    <div class="stock">
        <div class="stock-sort">
            <button @click="stockSort('')">전체</button>
            <button @click="stockSort('국내주식')">국내</button>
            <button @click="stockSort('해외주식')">해외</button>
            <button @click="stockSort('실물ETF')">실물</button>
            <button @click="stockSort('채권ETF')">채권</button>
            <button @click="stockSort('외화')">외화</button>
            <i class="fa fa-plus-circle" aria-hidden="true" @click="formToggle"></i>
        </div>

        <div class="stock-list stock-header">
            <span class="list1">분류</span>
            <span class="list2">종목명</span>
            <span class="list3">매입금액</span>
            <span class="list4">수량</span>
            <span class="list5">계</span>
            <span class="list6">정리</span>
        </div>
        <div class="stock-main">
            <div class="stock-list" v-for='(data,idx) in temp' :key="idx">
                <div class="stock-list-meta list1">
                    <span>{{data.date}}</span>
                    <span>{{data.category}}</span>
                </div>
                <span class="list2">{{data.name}}</span>
                <span class="list3">{{(data.price).toLocaleString('ko-KR')}}</span>
                <span class="list4">{{data.count}}주</span>
                <span class="list5">{{intOrFloat(data.price, data.count)}}</span>
                <span class="list6"><button @click="editStock(idx)">수정</button></span>
            </div>
        </div>

        <stockForm v-if="addForm" @formClose="formToggle" />
    </div>
</template>

<script>
import stockForm from './stock-addform.vue'

export default {
    created() {
        this.$http.get('/api/stock')
            .then( (response) => {
                this.stockList = response.data;
                this.temp = response.data;
            }) .catch(err => {
                alert(err);
                console.log(err);
            })
    },
    data(){
        return {
            stockList : [],
            addForm : false,
            temp : '',
        }
    },
    components : {
        stockForm
    },
    methods : {
        intOrFloat(price, count){
            var nPrice = Number(price);
            var nCount = Number(count);
            var sum = nPrice * nCount;
            return sum.toLocaleString('ko-KR')
        },
        editStock(idx){
            alert(idx);
        },
        stockSort(cat){
            this.temp = [];
            if(cat === ''){
                this.temp = this.stockList;
                console.log(this.temp)
            } else {
                for(let each in this.stockList){
                    let correct = this.stockList[each];
                    if(cat === correct.category){
                        this.temp.push(correct);
                    }
                }
            }
        },
        formToggle() {
            this.addForm = !this.addForm;
        },
    }
}
</script>

<style scoped>
.stock {
    margin-top:10px;
}
.stock-sort {
    text-align:center;
    position:relative;
}
.stock-sort button {
    border:none;
    width:auto;
    cursor:pointer;
    padding:6px;
    border-radius:50%;
    font-size:var(--font-large);
    margin:0 4px 12px;
}
.stock-sort button:hover {
    color : var(--color-white);
    background-color:var(--color-tomato);
}
.stock-sort i {
    font-size:36px;
    float: right;
    position:absolute;
    right:30px;
}
.stock-sort i:hover{
    color:var(--color-tomato);
    cursor:pointer;
    border:1px solid var(--color-tomato)
}

.stock-header .list1{
    font-size:var(--font-medium)
}

.stock-list {
    display:flex;
    align-items: center;
    border:1px solid var(--color-grey);
}
.stock-list span {
    text-align:center;
    padding:4px;
}
.stock-list-meta span{
    display:block;
}
.list1 {width:15%; font-size:var(--font-small);}
.list2 {width:25%; font-size:var(--font-medium);}
.list3 {width:15%; font-size:var(--font-medium);}
.list4 {width:15%; font-size:var(--font-medium);}
.list5 {width:20%; font-size:var(--font-medium);}
.list6 {width:10%; font-size:var(--font-medium);}
.list6 button {display:block; width: 90%; font-size:var(--font-medium)}

@media screen and (max-width:573px) {
    .stock-sort button {
        border:none;
        width:auto;
        cursor:pointer;
        padding:4px;
        border-radius:50%;
        font-size:var(--font-medium);
        margin:0 4px 12px;
    }
    .stock-sort button:hover {
        color : var(--color-white);
        background-color:var(--color-tomato);
    }
    .stock-sort i {
        font-size:24px;
        float: right;
        position:absolute;
        right:20px;
        
    }
    .list1 {font-size:var(--font-xsmall)}
    .list2 {font-size:var(--font-small)}
    .list3 {font-size:var(--font-small)}
    .list4 {font-size:var(--font-small)}
    .list5 {width:15%; font-size:var(--font-small)}
    .list6 {width: 15%;}
    .list6 button{display:block; width:90%; font-size:6px}
  }

@media screen and (min-width:1024px) {
    .stock {width:80%;}
}
  
</style>
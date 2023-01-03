<template>
    <div id="balanceView">
        <commonTitle :sTitle="title" />
        <div class="balance-container">
            <div class="list-left">
                <div id="asset" class="balance-list">
                    <h2>자산영역<i class="fa fa-plus-circle" aria-hidden="true"></i></h2>
                    <div v-for="(name, value, idx) in assetList" :key="idx">
                        <span>{{ value }}</span>
                        <input type="text" disabled :value=name.toLocaleString() />
                        <button type='buttoon' @click="editBtn(value, name, idx)">수정</button>
                    </div>
                    <span class="total">자산 계 : {{ sumThings(this.assetList).toLocaleString() }}</span>
                </div>
            </div>
            <div class="list-right">
                <div id="debt" class="balance-list">
                    <h2>부채영역<i class="fa fa-plus-circle" aria-hidden="true"></i></h2>
                    <div v-for="(name, value, idx) in debtList" :key="idx">
                        <span>{{ value }}</span>
                        <input type="text" disabled :value=name.toLocaleString() />
                        <button @click="editBtn(value, name, idx)">수정</button>
                    </div>
                    <span class="total">부채 계 : {{ sumThings(this.debtList).toLocaleString() }}</span>
                </div>
                <div id="capital" class="balance-list">
                    <h2>자본영역<i class="fa fa-plus-circle" aria-hidden="true"></i></h2>
                    <span class="total">자본 계 : {{ (sumThings(this.assetList) - sumThings(this.debtList)).toLocaleString() }}</span>
                </div>
            </div>
        </div>
        <div class="modal" id='modalbg' v-if="edit">
            <div class="modal-body">
              <div class="modal-body-title">
                <h2>재무제표 수정</h2>
                <i id='modalClose' class="fa fa-times" aria-hidden="true" @click="modalClose"></i>
              </div>
              <div class="modal-body-main">
                <div class="modal-editform">
                    <span>{{ editing[0] }}</span>
                    <input id="editInput" type="text" :value=editing[1] />
                    <button>수정</button>
                    <button>삭제</button>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import commonTitle from '../components/common-title.vue';

export default {
    name: 'BalanceView',
    data() {
        return {
            assetSum : 0,
            debtSum : 0,
            assetList : {
                '현금 및 현금성자산' : 150000,
                '투자자산' : 12000, 
                '부동산' : 48000,
                '투자부동산' : 10000
            },
            debtList : {
                '신용대출' : 120000,
                '담보대출' : 40000
            },
            title: '재무제표 관리',
            edit : false,
            editing : []
        }
    },
    components: {
        commonTitle,
    },
    methods : {
        sumThings(list) {
            let temp = 0;
            for (let data in list){
                temp += list[data];
            } return temp;
        },
        editBtn(call, val, idx) {
            this.edit = !this.edit;
            this.editing = [call, val, idx];
            document.getElementById('editInput').focus();
        },
        modalClose() {
            this.edit = !this.edit;
        },
        submitData() {
            return false;
        }
    },
}
</script>

<style scoped>
.balance-list {
    text-align:center;
    margin-bottom:20px;
    color:var(--color-white);
}
.balance-list div {
    width:100%;
    margin:4px 0;
}
#asset {margin-top:20px;}
.balance-list h2 {
    width:80%;
    font-size:24px;
    margin:0 auto 8px;
    text-align:left;
    font-weight: bold;
    font-style: italic;
    color:var(--color-white);
}
.balance-list h2 i {
    margin-left:8px;
}
.balance-list span {
    display:inline-block;
    width:35%;
    text-align:left;
    font-size:18px;
}
.balance-list input {
    width:35%;
    display:inline-block;
    background-color:var(--color-white);
    border:none;
    font-size:18px;
    padding:2px;
    padding-left:8px;
}
.balance-list .total {
    width:70%;
    text-align:right;
    font-size:16px;
    margin-top:4px;
}
.balance-list button {
    margin-left:8px;
    background-color:var(--color-tomato);
    color : var(--color-white);
    border-radius:20px;
    width:54px;
    height:22px;
    padding:2px;
    cursor:pointer;
}

.modal {
    position:fixed;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    background-color:rgba(0, 0, 0, 0.4);
    z-index:1;
    overflow: hidden;
}
.modal-body {
    width:60%;
    position:absolute;
    left:20%;
    top:20vh;
    z-index:2;
}
.modal-body-title {
    height:5vh;
    background-color:var(--color-tomato);
    position:relative;
}
.modal-body-title h2 {
    font-size:20px;
    padding:12px;
    text-align:center;
    vertical-align:middle;
    font-style: normal;
}
.modal-body-title i {
    position:absolute;
    top:10px;
    right:10px;
    font-size:20px;
    cursor:pointer;
}

.modal-body-main {
    height:15vh;
    background-color: var(--color-white);
    text-align:center;
}
.modal-body-main {
    width:100%;
    margin:auto;
}
.modal-body-main .modal-editform {
    padding-top:16px;
}
.modal-body-main .modal-editform span {
    display:block;
    color:var(--color-dark);
    font-size:20px;
    margin-bottom:8px;
}
.modal-body-main .modal-editform input {
    font-size:20px;
    margin:auto;
    display:block;
    margin-bottom:8px;
}
.modal-body-main .modal-editform button {
    width:25%;
    background-color:var(--color-tomato);
    color:var(--color-white);
    margin:8px 2px;
    font-size:18px;
}

@media screen and (min-width:1024px){
    .balance-container {display:flex;}
    .list-left, .list-right {margin-top:40px; width:50%;}
    #asset {margin-top:0px;}
    .balance-list h2 {font-size:24px; margin-bottom:16px;}
    .balance-list span {font-size:18px; width:40%}
    .balance-list input {font-size:18px; width:40%;}
    .balance-list .total {font-size:16px;}
    .balance-list button {
        width:40px;
        height:25px;
        padding:2px;
    }
}

@media screen and (max-width:573px){
    .modal-body-title h2 {
        font-size:14px;
        padding-top:8px;
    }
    .modal-body-title i {
        top:5px;
    }
    .modal-body-main .modal-editform span {
        font-size:12px;
    }
    .modal-body-main .modal-editform input {
        font-size:12px;
    }
    .modal-body-main .modal-editform button {
        font-size:11px;
    }

    .balance-list h2 {
        font-size:20px;
    }
    .balance-list span{
        font-size: 14px;
    }
    .balance-list input {
        font-size:14px;
    }
    .balance-list .total {
        font-size:12px;
    }
    .modal-body-main {
        height:20vh;
    }
    .modal-body-main .modal-editform button {
         margin:8px 2px;
    }
}
</style>
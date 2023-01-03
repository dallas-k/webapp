<template>
    <div class="modal" id='modalbg'>
        <div class="modal-body">
            <form @submit.prevent="submitForm">
                <div class="modal-body-title">
                    <legend>주식 추가</legend>
                    <i id='modalClose' class="fa fa-times" aria-hidden="true" @click="formClose"></i>
                </div>
                <div class="modal-body-main">
                    <div class="box1"><label for="name">종목명</label><input type="text" id="name" v-model="name"></div>
                    <div class="box2"><label for="price">매입금액</label><input type="text" id="price" v-model="price"></div>
                    <div class="box3"><label for="count">수량</label><input type="text" id="count" v-model="count"></div>
                    <div class="box4"><label for="category">카테고리</label>
                        <select name="category" id="category" v-model="category">
                            <option>국내주식</option>
                            <option>해외주식</option>
                            <option>실물ETF</option>
                            <option>채권</option>
                            <option>외화</option>
                        </select></div>
                    <button>등록하기</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name : '',
            price : '',
            count : '',
            category : '',
            sum : '',
            date : this.getDate()
        }
    },
    methods: {
        formClose() {
            this.$emit('formClose', false)
        },
        submitForm() {
            console.log()
        },
        getDate() {
            let today = new Date();
            let year = today.getFullYear();
            let month = today.getMonth() + 1;
            let date = today.getDate();
            return `${year}-${month}-${date}`;
        }
    },
}
</script>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
    overflow: hidden;
}

.modal-body {
    width: 60%;
    position: absolute;
    left: 20%;
    top: 20vh;
    z-index: 2;
}

.modal-body-title {
    height:5vh;
    background-color:var(--color-tomato);
    position:relative;
}
.modal-body-title legend {
    font-size:1.5rem;
    padding:12px;
    font-weight: bold;
    text-align:center;
    vertical-align:middle;
}
.modal-body-title i {
    position:absolute;
    top:5px;
    right:10px;
    font-size:20px;
    cursor:pointer;
}

.modal-body-main {
    position:relative;
    height:15vh;
    background-color: var(--color-white);
    display:flex;
}
.modal-body-main div {
    margin:20px auto 0;
}
.modal-body-main div.box1 {
    width:25%;
}
.modal-body-main div.box2 {
    width:20%;
}
.modal-body-main div.box3 {
    width:15%;
}
.modal-body-main div.box4 {
    width:20%;
}

.modal-body-main div label {
    text-align:center;
    display:block;
    color:var(--color-dark);
    margin-bottom:8px;
    font-size:var(--font-medium)
}
.modal-body-main div input, .modal-body-main div select {
    width:100%;
    font-size:var(--font-large);
}
.modal-body-main button {
    padding:8px;
    border-radius:10%;
    background: var(--color-tomato);
    color:var(--color-white);
    position:absolute;
    right:10px;
    bottom:10px;
}

@media screen and (max-width:573px) {
    .modal-body {
        width: 80%;
        left: 10%;
    }
    .modal-body-main {
        height:20vh;
        background-color: var(--color-white);
        display:flex;
    }
    .modal-body-main div input, .modal-body-main div select {
        font-size : var(--font-medium)
    }
}

</style>
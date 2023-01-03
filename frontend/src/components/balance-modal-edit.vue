<template>
    <div class="modal" id='modalbg'>
        <div class="modal-body">
          <div class="modal-body-title">
            <h2>재무제표 수정</h2>
            <i id='modalClose' class="fa fa-times" aria-hidden="true" @click="modalClose"></i>
          </div>
          <div class="modal-body-main">
            <div class="modal-sns">
                <span>{{editing[0]}}</span>
                <span>{{editing[1]}}</span>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    props : ['editing'],
    methods : {
        modalClose() {
            this.$emit('modalClose', false)
        }
    }
}
</script>

<style scoped>
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
    width:50%;
    position:absolute;
    left:25%;
    top:20vh;
    z-index:2;
}
.modal-body-title {
    height:5vh;
    background-color:var(--color-tomato);
    position:relative;
}
.modal-body-title h2 {
    font-size:1.2rem;
    padding:12px;
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
    height:15vh;
    background-color: var(--color-white);
    text-align:center;
}
.modal-body-main .modal-sns {
    width:100%;
    margin:auto;
}
.modal-body-main .modal-sns i {
    margin:16px 0;
    font-size:12px;
    color:var(--color-dark);
    width:15%;
    font-size:24px;
}
.modal-body-main p {
    color:var(--color-dark);
    margin-bottom:5%;
}
</style>
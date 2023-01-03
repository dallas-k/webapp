<template>
    <div class="modal" id='modalbg'>
        <div class="modal-body">
          <div class="modal-body-title">
            <h2>부자아빠</h2>
            <i id='modalClose' class="fa fa-times" aria-hidden="true" @click="modalClose"></i>
          </div>
          <div class="modal-body-main">
            <div class="modal-sns">
              <i class="fa fa-facebook-official" aria-hidden="true"></i>
              <i class="fa fa-instagram" aria-hidden="true"></i>
              <i class="fa fa-github" aria-hidden="true"></i>
              <i class="fa fa-linkedin-square" aria-hidden="true"></i>
            </div>
            <p>대표 연락처 : dallas.wty@gmail.com</p>
            <p><i class="fa fa-copyright" aria-hidden="true"></i>2022 All rights reserved</p>
          </div>
        </div>
    </div>
</template>

<script>
export default {
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
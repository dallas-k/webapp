<!-- 분기점
  1.  < 572px : nav바 화살표 이동 / 홈 화면 설정 모드
  2.  < 1023x : 현재 작업 중인 모습
  3.  > 1024px : PC 버전 : vs code처럼 측면에 nav 두고 활용
-->
<template>
    <div id="app">
        <header>
            <div>
                <h1>
                    부자아빠<i class="fa fa-question-circle" aria-hidden="true" @click="modalToggle"></i>
                </h1>
            </div>
        </header>
        <div class='main-container'>
            <main>
                <router-view class="router-contentView" />
            </main>
            <nav>
                <mobileNav v-if="mobile" />
                <tabletNav v-if="tablet" />
                <desktopNav v-if="desktop" class="desktopNav" />
            </nav>
        </div>

        <footer>
            <commonModal v-if="modal" @modalClose="modalToggle" />
        </footer>
    </div>
</template>

<script>
import commonModal from "./components/common-modal.vue";

import mobileNav from "./components/mobile-nav.vue";

import tabletNav from "./components/tablet-nav.vue";

import desktopNav from './components/desktop-nav.vue';

export default {
    data() {
        return {
            width: '',
            mobile: false,
            tablet: false,
            desktop: false,
            modal: false,
        };
    },
    components: {
        commonModal,
        mobileNav,
        tabletNav,
        desktopNav
    },
    created() {
        this.width = window.innerWidth;
        window.addEventListener("load", this.media);
    },
    mounted() {
        window.addEventListener("resize", this.handleResize);
        window.addEventListener("resize", this.media);
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.handleResize);
        window.removeEventListener("resize", this.media);
    },
    methods: {
        handleResize() {
            this.width = window.innerWidth;
        },
        media() {
            if (this.width < 574) {
                this.mobile = true;
                this.tablet = false;
                this.desktop = false;
            } else {
                this.mobile = false;
                if (this.width < 1024) {
                    this.tablet = true;
                    this.desktop = false;
                } else {
                    this.tablet = false;
                    this.desktop = true;
                }
            }
        },
        modalToggle() {
            this.modal = !this.modal;
        },
    },
};
</script>

<style>
header {
    width:100%;
}
header div {
    width: 100%;
    position: relative;
}

header div h1 {
    display: block;
    text-align: center;
    padding: 8px;
    font-size: 1.8rem;
    background-color: var(--color-tomato);
}

header div i {
    position: relative;
    margin-left: 1%;
    font-size: 110%;
}

header div i:hover {
    font-size: 130%;
    cursor: pointer;
}
.main-container {
    overflow: auto;
}
.router-contentView {
    height : calc(100vh - 41px - 87px)
}
nav {
    width: 100%;
    position: fixed;
    bottom: 0;
    border-top: 1px solid var(--color-white);
}

@media screen and (max-width:573px){
    .router-contentView {
        height : calc(100vh - 41px - 58px)
    }
}

@media screen and (min-width:1024px) {
    .main-container {
        height : calc(100vh - 41px);
        display:flex;
        width:100%;
        height:100%;
    }
    .main-container main {
        height : calc(100vh - 41px);
        width:80%;
        order:1;
    }
    .main-container nav {
        width:20%;
        order:0;
        height:100%;
        bottom:auto;
        position:sticky;
        border-top:1px solid var(--color-tomato);
        background-color:var(--color-white)
    }

    .main-container .desktopNav {
        height: calc(100vh - 41px);
    }
    .main-container main #stockView .stock{
        margin:auto;
    }
    
    
}
</style>
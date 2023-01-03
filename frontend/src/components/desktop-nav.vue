<template>
    <div id="desktopNav" class="desktopNav">
        <router-link class="nav-link" to="/stock"><i class="nav_icon fa fa-bar-chart" aria-hidden="true"></i> 주식관리</router-link>
        <router-link class="nav-link" to="/balance"><i class="nav_icon fa fa-calculator" aria-hidden="true"></i> 재무제표</router-link>
        <router-link class="nav-link" to="/portfolio"><i class="nav_icon fa fa-pie-chart" aria-hidden="true"></i> 포트폴리오</router-link>
        <router-link class="nav-link" to="/economy"><i class="nav_icon fa fa-university" aria-hidden="true"></i> 경제지표</router-link>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.desktopNav {
    order:0;
    width:100%;
    max-width:240px;
    height : calc(100vh - 41px);
    background-color:var(--color-white);
}
.desktopNav .nav-link:first-child {
    margin-top:92px;
}
.desktopNav .nav-link {
    display: block;
    color:var(--color-tomato);
    text-align:center;
    padding:4px;
    font-size:28px;
    margin:24px 0;
}
</style>
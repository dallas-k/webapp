<template>
    <div id="tabletNav">
        <button>
          <router-link to="/stock" class='nav-link'><i class="nav_icon fa fa-bar-chart" aria-hidden="true"></i>주식관리</router-link>
        </button>
        <button>
          <router-link to="/balance" class='nav-link'><i class="nav_icon fa fa-calculator" aria-hidden="true"></i>
          재무제표</router-link>
        </button>
        <button>
          <router-link to="/portfolio" class='nav-link'><i class="nav_icon fa fa-pie-chart" aria-hidden="true"></i>포트폴리오</router-link>
        </button>
        <button>
          <router-link to="/economy" class='nav-link'><i class="nav_icon fa fa-university" aria-hidden="true"></i>경제지표</router-link>
        </button>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#tabletNav button {
    width:25%;
    padding:10px;
    font-size:20px;
    background-color: var(--color-dark);
}

#tabletNav button .nav-link {
font-weight: bold;
color: var(--color-white);
}

#tabletNav button .nav-link:hover{
color:var(--color-tomato);
}

#tabletNav a.router-link-exact-active {
color: var(--color-tomato);
}

#tabletNav button .nav_icon {
display: block;
font-size:32px;
margin-bottom:8px;
}
</style>
<template>
    <div id="mobileNav">
        <button><router-link class="nav-link" @click.native="movePrev" to=""><i id='nav_icon'
                    class="fa fa-arrow-left" aria-hidden="true"></i></router-link></button>
        <button><router-link class="nav-link" @click.native="moveHome" :to="menus[home]" ><i id='nav_icon' class="fa fa-home"
                    aria-hidden="true"></i></router-link></button>
        <button><router-link class="nav-link" @click.native="moveNext" to=""><i id='nav_icon'
                    class="fa fa-arrow-right" aria-hidden="true"></i></router-link></button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            home: 0,
            menus: ['/stock', '/portfolio', '/balance', '/economy']
        }
    },
    methods: {
        moveNext() {
            if (this.home < 3) {
                this.home += 1;
            } else {
                this.home = 0;
            }
            this.$router.push(this.menus[this.home])
        },
        movePrev() {
            if (this.home < 1) {
                this.home = 3;
            } else {
                this.home -= 1;
            }
            this.$router.push(this.menus[this.home])
        },
        moveHome() {
            this.home = 0;
            this.$router.push(this.menus[this.home])
        }
    }
}
</script>

<style scoped>
#mobileNav {
    border:2px solid var(--color-grey);
    background: var(--color-dark);
}
#mobileNav button {
    width: 33%;
    padding: 8px;
    background-color: var(--color-dark);
}

#mobileNav button .nav-link {
    display: block;
    font-weight: bold;
    color: var(--color-white);
    font-size: 32px;
}

#mobileNav button .nav-link:hover {
    color: var(--color-tomato);
}

#mobileNav button .nav_icon {
    display: block;
    font-size: 32px;
    margin-bottom: 8px;
}
</style>
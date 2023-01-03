<template>
    <div id='common-title' class="title">
        <h2>{{ sTitle }} </h2>
    </div>
</template>

<script>
export default {
    name : 'content-title',
    props : {
        sTitle : String
    }
}
</script>

<style scoped>
    .title h2 {
        text-align:center;
        padding:10px;
        font-size:24px;
    }
</style>
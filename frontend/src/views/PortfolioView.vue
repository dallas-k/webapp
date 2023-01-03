<template>
  <div class="about">
    <commonTitle :sTitle="title" />
  </div>
</template>

<script>
import commonTitle from '../components/common-title.vue'

export default {
  name: 'PortfolioView',
  data() {
    return {
      title : '포트폴리오 관리'
    }
  },
  components : {
    commonTitle
  }
}
</script>
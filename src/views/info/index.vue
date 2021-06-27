
<template src="./template.html"></template>
<style src="./style.scss" lang="scss" scoped></style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import InsInfoTitle from './components/Title/index.vue'
@Component({
  name: 'ins-details',
  components: {
    [InsInfoTitle.name]: InsInfoTitle
  }
})
export default class InsDetails extends Vue {
  // 微信appid
  private wx_appid = ''
}
</script>

<template>
  <div class="layout-com-title-head">
    <div class="title">机构学员数</div>
    <div class="icon"></div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'ins-info-title'
})
export default class InsInfoTitle extends Vue {
  // 微信appid
  private wx_appid = ''
}
</script>

<style lang="scss" scoped>
.layout-com-title-head {
  padding: 16px 16px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .title {
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #303858;
  }
  .icon {
    width: 15px;
    height: 15px;
    border: 1px solid red;
  }
}
</style>

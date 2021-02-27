<template>
  <div v-show="syncshowLoading" class="loading">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, PropSync } from 'vue-property-decorator'

@Component({
  name: 'Loading'
})
export default class Loading extends Vue {
  @PropSync('isShow', { type: Boolean, default: false }) public syncshowLoading!: boolean
}
</script>

<style lang="scss" scoped>
@import '~@/styles/modules/mixin.scss';
.loading {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: url("~@/assets/images/common/loading.gif") no-repeat center;
  background-size: double(160px) double(106px);
  z-index: 100000;
}
</style>

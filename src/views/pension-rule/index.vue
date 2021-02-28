<template src="./template.html"></template>
<style src="./style.scss" lang="scss" scoped></style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Button, Icon, Picker } from 'vant'
import VPicker from '@/components/Picker/index.vue'
@Component({
  name: 'PensionRule',
  components: {
    [Button.name]: Button,
    [Icon.name]: Icon,
    [Picker.name]: Picker,
    VPicker
  }
})
export default class PensionRule extends Vue {
  // 提示弹框
  public isPicker = false
  public pickerColnums = ['2', '12', '6']

  public queryData = this.$route.query
  public picktext = '2'

  // 首笔投资开启弹窗
  public hanldeOpenPicker () {
    this.isPicker = true
  }

  // 首笔投资确认弹窗
  public hanldePickerConfirm (val: any) {
    const { values, isShow } = val
    this.picktext = values[0]
    this.isPicker = isShow
  }

  // 首笔投资关闭弹窗
  public hanldePickerCancel (val: boolean) {
    this.isPicker = val
  }
}
</script>
<style lang="scss">
.pension-calculator-page {
  .van-cell {
    padding: 0;
  }
}
</style>

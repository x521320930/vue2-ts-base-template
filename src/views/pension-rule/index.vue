<template src="./template.html"></template>
<style src="./style.scss" lang="scss" scoped></style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Button, Icon, Slider } from 'vant'
import { SCALE_VALUE } from '@/const/index'
import VPicker from '@/components/Picker/index.vue'
@Component({
  name: 'PensionRule',
  components: {
    [Button.name]: Button,
    [Icon.name]: Icon,
    [Slider.name]: Slider,
    VPicker
  }
})
export default class PensionRule extends Vue {
  // 提示弹框
  public isPicker = false
  public pickerColnums = ['2', '12', '6']
  // 刻度数据
  public sliderItems = SCALE_VALUE
  public queryData = this.$route.query
  public picktext = '2'
  public sliderValue = 10

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

  // 提交
  public handleSubmit () {
    this.$toast('功能还未开放')
  }

  mounted () {
    console.log(1)
  }
}
</script>
<style lang="scss">
.pension-rule-page {
  .h {
    .van-slider__bar {
      background: transparent;
    }
  }
}
</style>

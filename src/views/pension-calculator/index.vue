<template src="./template.html"></template>
<style src="./style.scss" lang="scss" scoped></style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Button, Field, Icon, Picker } from 'vant'
import { YEAR_WORK } from '@/const/index'
import VDialog from '@/components/Dialog/index.vue'
import VPicker from '@/components/Picker/index.vue'
@Component({
  name: 'PensionCalculator',
  components: {
    [Button.name]: Button,
    [Field.name]: Field,
    [Icon.name]: Icon,
    [Picker.name]: Picker,
    VDialog,
    VPicker
  }
})
export default class PensionCalculator extends Vue {
  // 提示弹框
  public isShow = false
  // 弹框标题与文本
  public dialogTitle = ''
  public dialogText = ''
  public isCityPicker = false
  public columns = [
    {
      values: [
        {
          cityCode: '010',
          cityName: '北京'
        },
        {
          cityCode: '0101',
          cityName: '北京1'
        },
        {
          cityCode: '01011',
          cityName: '北京11'
        }
      ]
    }
  ]

  // 打开弹窗
  public hanldeOpenDialog (type: number): void {
    // 工作年限
    if (type === 0) {
      this.dialogTitle = YEAR_WORK.title
      this.dialogText = YEAR_WORK.text
    }

    // 规则详情
    if (type === 0) {
      this.dialogTitle = YEAR_WORK.title
      this.dialogText = YEAR_WORK.text
    }

    this.isShow = true
  }

  // 关闭弹窗
  public hanldeDialogCancel (val: boolean) {
    this.isShow = val
  }

  // 城市开启弹窗
  public hanldeOpenCityPicker () {
    this.isCityPicker = true
  }

  // 城市确认弹窗
  public hanldeCityPickerConfirm (val: any) {
    console.log(val)
    this.isCityPicker = val.isShow
  }

  // 城市关闭弹窗
  public hanldeCityPickerCancel (val: boolean) {
    this.isCityPicker = val
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

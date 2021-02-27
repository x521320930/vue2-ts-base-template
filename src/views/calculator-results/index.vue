<template src="./template.html"></template>
<style src="./style.scss" lang="scss" scoped></style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Button, Field, Icon, Picker } from 'vant'
@Component({
  name: 'CalculatorResults',
  components: {
    [Button.name]: Button,
    [Field.name]: Field,
    [Icon.name]: Icon,
    [Picker.name]: Picker
  }
})
export default class CalculatorResults extends Vue {
  // 提示弹框
  public isShow = false
  // 弹框标题与文本
  public dialogTitle = ''
  public dialogText = ''
  public isCityPicker = false
}
</script>
<style lang="scss">
.pension-calculator-page {
  .van-cell {
    padding: 0;
  }
}
</style>

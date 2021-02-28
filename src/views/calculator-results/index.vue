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

  public queryData = this.$route.query
  // 提交表单
  public hanldeSubmit () {
    this.$api.pensionStartPlan(this.queryData).then((res: any) => {
      const { code, data, msg } = res
      if (code === '200') {
        this.$router.push({
          path: 'pension-rule',
          query: { ...data }
        })
      } else {
        this.$toast(msg)
      }
    }).catch((r: any) => console.log(r))
  }

  mounted () {
    console.log(this.queryData)
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

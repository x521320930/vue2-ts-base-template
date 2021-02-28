<template src="./template.html"></template>
<style src="./style.scss" lang="scss" scoped></style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Button, Field, Icon, Picker } from 'vant'
import VChart from '@/components/Chart/index.vue'
import { CALCULATOR_RESULT_CHART } from '@/const/index'
@Component({
  name: 'CalculatorResults',
  components: {
    [Button.name]: Button,
    [Field.name]: Field,
    [Icon.name]: Icon,
    [Picker.name]: Picker,
    VChart
  }
})
export default class CalculatorResults extends Vue {
  public isCityPicker = false

  // 取结果数据
  public queryData = this.$route.query

  public chartOptions = CALCULATOR_RESULT_CHART([1000, 5000]).bar
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

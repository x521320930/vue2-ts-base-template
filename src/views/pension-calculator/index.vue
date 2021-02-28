<template src="./template.html"></template>
<style src="./style.scss" lang="scss" scoped></style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Button, Field, Icon, Picker } from 'vant'
import { YEAR_WORK, YEAR_BIRTH } from '@/const/index'
import VDialog from '@/components/Dialog/index.vue'
import VPicker from '@/components/Picker/index.vue'
import { isEmpty } from '@/utils/tools'
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
  public tabs = [
    {
      id: 0,
      name: '男',
      icon: require('@/assets/images/pension-calculator/man-00.png'),
      activeIcon: require('@/assets/images/pension-calculator/man-01.png')
    },
    {
      id: 1,
      name: '女',
      icon: require('@/assets/images/pension-calculator/female-00.png'),
      activeIcon: require('@/assets/images/pension-calculator/female-01.png')
    }
  ]

  public tabActive = 0
  // 弹框标题与文本
  public dialogTitle = ''
  public dialogText = ''
  // 出生
  public isYearBirth = false
  public yearBirthColumns = YEAR_BIRTH

  // 工作年份
  public isWordYear = false
  public wordYearColumns = []
  // 城市
  public isCityPicker = false
  public cityPickerColumns = []

  // 请求参数
  public transmitValue = {
    birthYear: '',
    workYear: '',
    monthSalary: '',
    province: '',
    hex: ''
  }

  // tabs切换
  public hanldeTabsClick (item: any) {
    this.tabActive = item.id
    this.transmitValue.hex = item.name
  }

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

  // 出生月份开启弹窗
  public hanldeOpenYearBirth () {
    this.isYearBirth = true
  }

  // 出生月份确认弹窗
  public hanldeYearBirthConfirm (val: any) {
    const { values, isShow } = val
    this.transmitValue.birthYear = values[0]
    this.isYearBirth = isShow
  }

  // 出生月份关闭弹窗
  public hanldeYearBirthCancel (val: boolean) {
    this.isYearBirth = val
  }

  // 工作年份开启弹窗
  public hanldeOpenWordYear () {
    this.isWordYear = true
  }

  // 工作年份确认弹窗
  public hanldeWordYearConfirm (val: any) {
    const { values, isShow } = val
    this.transmitValue.workYear = values[0]
    this.isWordYear = isShow
  }

  // 工作年份关闭弹窗
  public hanldeWordYearCancel (val: boolean) {
    this.isWordYear = val
  }

  // 城市开启弹窗
  public hanldeOpenCityPicker () {
    this.isCityPicker = true
  }

  // 城市确认弹窗
  public hanldeCityPickerConfirm (val: any) {
    const { values, isShow } = val
    this.transmitValue.province = values[0].cityCode
    this.isCityPicker = isShow
  }

  // 城市关闭弹窗
  public hanldeCityPickerCancel (val: boolean) {
    this.isCityPicker = val
  }

  // 提交表单
  public hanldeSubmit () {
    const { birthYear, workYear, monthSalary, province } = this.transmitValue
    if (isEmpty(birthYear)) return this.$toast('请选择出生年份')
    if (isEmpty(workYear)) return this.$toast('请选择工作年份')
    if (isEmpty(monthSalary)) return this.$toast('请输入当月薪资')
    if (isEmpty(province)) return this.$toast('请选择所在省市')

    const transmitValue = { birthYear, workYear, monthSalary, province }

    this.$api.pensionCalculator(transmitValue).then((res: any) => {
      const { code, data, msg } = res
      if (code === '200') {
        this.$router.push({
          path: 'calculator-results',
          query: { ...data }
        })
      } else {
        this.$toast(msg)
      }
    }).catch((r: any) => console.log(r))
  }

  // 获取工作年限
  getPensionYears () {
    this.$api.pensionYears({}).then((res: any) => {
      const { code, data, msg } = res
      if (code === '200') {
        console.log(res)
        this.wordYearColumns = data
      } else {
        this.$toast(msg)
      }
    }).catch((r: any) => console.log(r))
  }

  // 获取城市
  getPensionCity () {
    this.$api.pensionCity({}).then((res: any) => {
      const { code, data, msg } = res
      if (code === '200') {
        this.cityPickerColumns = data
      } else {
        this.$toast(msg)
      }
    }).catch((r: any) => console.log(r))
  }

  created () {
    // 工作年份
    this.getPensionYears()
    // 城市
    this.getPensionCity()
  }

  mounted () {
    console.log(1)
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

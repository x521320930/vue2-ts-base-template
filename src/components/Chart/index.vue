<template>
  <div class="chart" :id="id"></div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import HighCharts from 'highcharts'

@Component({
  name: 'VChart'
})
export default class VChart extends Vue {
  @Prop({ type: String, default: '' }) public id!: string
  @Prop({ type: Object, default: () => { return {} } }) public option!: any

  mounted () {
    HighCharts.chart(this.id, this.option)
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/modules/mixin.scss';
.chart {
  width: inherit;
  height: inherit;
}
</style>

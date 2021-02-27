<template>
  <van-popup class="popup-picker-container"
    position="bottom"
    v-model="isShow" :overlay="overlay">
    <div class="picker-head pd-c-lr15">
      <div class="cancel" @click="onCancel">取消</div>
      <div class="title">{{ title }}</div>
      <div class="confirm" @click="onConfirm" >确认</div>
    </div>
    <van-picker
      ref="picker"
      :value-key="cityName"
      :columns="columns"
      @change="onChange"
    />
  </van-popup>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
import { Picker } from 'vant'
@Component({
  name: 'VPicker',
  components: {
    [Picker.name]: Picker
  }
})
export default class VPicker extends Vue {
  @Prop({ type: Boolean, default: true }) public overlay!: boolean
  @Prop({ type: String, default: '' }) public title!: string
  @Prop({ type: String, default: 'cityName' }) public cityName!: string
  @Prop({ type: Array, default: () => [] }) public columns!: Array<any>
  @Prop({ type: Boolean, default: false }) public isShow!: boolean

  private selectValue = {}
  @Emit('cancel')
  onCancel () {
    return false
  }

  @Emit('change')
  onChange (vnode: any, value: any, index: number) {
    return { vnode, value, index }
  }

  @Emit('confirm')
  onConfirm () {
    const picker = this.$refs.picker as any
    return { values: picker.getValues(), isShow: false }
  }
}
</script>

<style lang="scss">
@import '~@/styles/modules/mixin.scss';
.popup-picker-container {
  .picker-head {
    display: flex;
    background-color: #F5F5F5;
    height: double(80px);
    line-height: double(80px);
    justify-content: space-between;
    .cancel, .confirm {
      font-size: double(32px);
      color: #FB3F3F;
      font-weight: 400;
    }
    .title {
      font-size: double(32px);
    }
  }
}
</style>

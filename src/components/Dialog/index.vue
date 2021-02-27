<template>
  <van-popup v-model="isShow" :overlay="overlay">
    <div class="dialog-container">
      <div class="dialog-head">
        <span class="text">{{ title }}</span>
      </div>
      <div class="dialog-body"><span class="text">{{ text }}</span></div>
      <div class="dialog-footer">
        <van-button class="confirm" color="#FB3F3F" @click="cancel">
          <span class="btn-text">我知道了</span>
        </van-button>
      </div>
    </div>
  </van-popup>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
import { Button } from 'vant'
@Component({
  name: 'VDialog',
  components: {
    [Button.name]: Button
  }
})
export default class VDialog extends Vue {
  @Prop({ type: Boolean, default: false }) public overlay!: boolean
  @Prop({ type: String, default: '' }) public title!: string
  @Prop({ type: String, default: '' }) public text!: string
  @Prop({ type: Boolean, default: false }) public isShow!: boolean

  @Emit()
  public cancel (): boolean {
    return false
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/modules/mixin.scss';
.dialog-container {
  width: double(520px);
  border-radius: double(4px);
  .dialog-head {
    height: double(90px);
    line-height: double(90px);
    text-align: center;
    background: #F0F0F0;
    border-radius: double(4px);
    .text {
      font-size: double(32px);
      font-weight: 500;
    }
  }
  .dialog-body {
    width: double(460px);
    min-height: double(200px);
    font-size: double(26px);
    margin: 0 auto;
    margin-top: double(20px);
    // line-height: double(44px);
    .text {
    }
  }
  .dialog-footer {
    margin-top: doubel(40px);
    width: double(460px);
    margin: 0 auto;
    margin-bottom: double(30px);
    .box {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .confirm {
      width: double(460px);
      height: double(80px);
      line-height: double(80px);
      text-align: center;
      border-radius: double(4px);
      .btn-text {
        font-size: double(30px);
        color: #fff;
      }
    }
  }
}
</style>

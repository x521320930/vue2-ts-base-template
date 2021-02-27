<template src="./template.html"></template>
<style src="./style.scss" lang="scss" scoped></style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { NavBar } from 'vant'
@Component({
  name: 'PensionCalculator',
  components: {
    [NavBar.name]: NavBar
  }
})
export default class PensionCalculator extends Vue {

}
</script>

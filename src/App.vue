<template>
  <div class="app">
    <div class="box"></div>
    <van-button type="info">我是一个按钮</van-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style>
/* width: 300px  height: 300px font-size: 75px   750px */
/* 1rem = 75px   375 150px   375px */
.box {
  width: 300px;
  height: 300px;
  font-size: 75px;
  background-color: pink;
}
</style>

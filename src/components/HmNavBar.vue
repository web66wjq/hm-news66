<template>
  <div class="hm-navbar" @click="clickFn">
    <div class="title">
      <slot></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <div class="arrow">
      <span class="iconfont iconjiantou1"></span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clickFn() {
      // 做什么不确定
      this.$emit('click')
    }
  }
}
</script>

<style lang="less" scoped>
.hm-navbar {
  height: 50px;
  border-bottom: 1px solid #cccccc;
  display: flex;
  padding: 0 20px;
  line-height: 50px;
  font-size: 14px;
  .content {
    flex: 1;
    text-align: right;
    color: #999;
  }
  .arrow {
    line-height: 51px;
    padding-left: 10px;
    font-size: 16px;
  }
}
</style>

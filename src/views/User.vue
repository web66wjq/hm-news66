<template>
  <div class="user">
    <div class="header" @click="$router.push('/user-edit')">
      <div class="avater">
        <img :src="$axios.defaults.baseURL + info.head_img" alt />
      </div>
      <div class="info">
        <p class="name">
          <span class="iconfont iconxingbienv" v-if="info.gender === 0"></span>
          <span class="iconfont iconxingbienan" v-else></span>
          {{ info.nickname }}
        </p>
        <p class="time">{{ info.create_date | time }}</p>
      </div>
      <div class="arrow">
        <p class="iconfont iconjiantou1"></p>
      </div>
    </div>
    <div class="nav">
      <hm-navbar>
        <template>我的关注</template>
        <!-- v-solt：content  简写 #content-->
        <template #content>关注的用户</template>
      </hm-navbar>
      <hm-navbar>
        <template>我的更贴</template>
        <template #content>跟帖/回复</template>
      </hm-navbar>
      <hm-navbar>
        <template>我的收藏</template>
        <template #content>文章/视频</template>
      </hm-navbar>
      <hm-navbar @click="$router.push('/user-edit')">设置</hm-navbar>
      <hm-navbar @click="logout">
        <template>退出</template>
      </hm-navbar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {}
    }
  },
  async created() {
    const userId = localStorage.getItem('userId')
    const res = await this.$axios.get(`/user/${userId}`)
    console.log(res)
    const { statusCode, data } = res.data
    if (statusCode === 200) {
      this.info = data
    }
  },
  methods: {
    async logout() {
      // 退出思路
      try {
        await this.$dialog.confirm({
          title: '温馨提示',
          message: '确定要退出这个系统吗？'
        })

        // 执行到这里说明点了确定
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        this.$router.push('/login')
        this.$toast.success('退出成功')
      } catch (e) {
        this.$toast('取消退出')
      }

      // .then(() => {
      //   // 退出的思路
      // })
      // .catch(() => {
      //   this.$toast('取消退出')
      // })
    }
  }
}
</script>

<style lang="less" scoped>
.user {
  .header {
    display: flex;
    height: 120px;
    border-bottom: 5px solid #999;
    align-items: center;
    padding: 0 20px;
    .avatar,
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
    .info {
      flex: 1;
      padding-left: 20px;
      font-size: 14px;
      color: #333;
      .name {
        margin-bottom: 10px;
        .iconxingbienv {
          color: #f23ebf;
        }
        .iconxingbienan {
          color: #80bbe4;
        }
      }
      .time {
        color: #999;
      }
    }
  }
  .nav {
    padding-left: 20px;
  }
}
</style>

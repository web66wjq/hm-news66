<template>
  <div class="login">
    <hm-header>登录</hm-header>
    <hm-logo></hm-logo>
    <!-- 表单 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        label="用户名"
        placeholder="请输入用户名/手机号"
        :rules="rules.username"
      />
      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        :rules="rules.password"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>

    <p class="tips">
      没有账号？去
      <router-link to="/register">注册</router-link>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      rules: {
        username: [
          { required: true, message: '请填写用户名', trigger: 'onChange' },
          {
            pattern: /^\d{5,11}$/,
            message: '用户名只能是5-11位数字',
            trigger: 'onChange'
          }
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'onChange' },
          {
            pattern: /^\w{3,9}$/,
            message: '用户密码只能是3-9位',
            trigger: 'onChange'
          }
        ]
      }
    }
  },
  created() {
    // 获取到路由中的参数，赋值给username和password
    const { username, password } = this.$route.params
    this.username = username
    this.password = password
  },
  methods: {
    async onSubmit() {
      const res = await this.$axios.post('/login', {
        username: this.username,
        password: this.password
      })
      const { statusCode, message, data } = res.data
      console.log(res.data)
      if (statusCode === 200) {
        this.$toast.success(message)
        // 保存token
        localStorage.setItem('token', data.token)
        // 保存user_id
        localStorage.setItem('userId', data.user.id)
        this.$router.push('/user')
      } else {
        this.$toast.fail(message)
      }
    }
  }
}
</script>

<style lang="less" scoped>
/*
  scoped会给当前组件中所有的样式添加一个属性选择器 data-v-xxxx
  scoped会给当前组件中所有的元素也添加这个属性
*/
p[data-v-xxx] {
  background-color: pink;
}
.login {
  .tips {
    font-size: 14px;
    text-align: right;
    padding-right: 20px;
    a {
      color: orange;
    }
  }
}
</style>

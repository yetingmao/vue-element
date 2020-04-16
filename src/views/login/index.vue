<!--
 * @Description: 
 * @Autor: islilinn
 * @Date: 2020-03-23 17:19:18
 * @LastEditors: yetm
 * @LastEditTime: 2020-04-14 15:05:59
 -->
<template>
  <div class="login-container">
    <el-form
      :model="ruleForm"
      :rules="rules2"
      status-icon
      ref="ruleForm"
      label-position="left"
      label-width="0px"
      class="demo-ruleForm login-page"
    >
      <div class="title">系统登录</div>
      <el-form-item prop="username">
        <el-input type="text" v-model="ruleForm.username" auto-complete="off" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="ruleForm.password" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-checkbox v-model="checked" class="rememberme">记住密码</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click="handleSubmit" :loading="logining">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logining: false,
      ruleForm: {
        username: "admin",
        password: "admin"
      },
      rules2: {
        username: [
          { required: true, message: "账号不能为空", trigger: "blur" }
        ],
        password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
      },
      checked: false
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.logining = true;
          if (
            this.ruleForm.username === "admin" &&
            this.ruleForm.password === "admin"
          ) {
            this.logining = false;
            this.$router.push({ path: "/" });
          } else {
            this.logining = false;
            this.$alert("用户名或密码错误!", "提示", {
              confirmButtonText: "确定"
            });
          }
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.login-container {
  width: 100%;
  height: 100%;
  .login-page {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      font-weight: bold;
      font-size: 20px;
      margin-bottom: 20px;
    }
  }
}

label.el-checkbox.rememberme {
  margin: 0px 0px 15px;
  text-align: left;
}
</style>

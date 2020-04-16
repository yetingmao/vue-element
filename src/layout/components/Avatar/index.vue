<!--
 * @Description: 
 * @Autor: islilinn
 * @Date: 2020-03-30 15:43:23
 * @LastEditors: yetm
 * @LastEditTime: 2020-04-16 09:42:08
 -->
<style lang="less" scoped>
@import "./style.less";
</style>
<template>
  <el-dropdown class="avatar" trigger="click" placement="bottom" size="small" @command="command">
    <el-avatar icon="el-icon-user-solid"></el-avatar>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item icon="el-icon-s-check" command="1">个人中心</el-dropdown-item>
      <el-dropdown-item divided command="2">退出</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<script>
export default {
  name: "Avatar",
  created() {},
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$router.push({ name: "login" });
    },
    command(n) {
      switch (n) {
        case "1":
          this.$router.push({ name: "user" });
          break;
        case "2":
          this.logout();
          break;
      }
    }
  }
};
</script>
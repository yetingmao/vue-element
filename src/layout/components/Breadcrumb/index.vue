<!--
 * @Description: 
 * @Autor: yetm
 * @Date: 2020-04-14 17:10:39
 * @LastEditors: yetm
 * @LastEditTime: 2020-04-16 08:51:23
 -->
<style lang="less" scoped>
@import "./style.less";
</style>
<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
    <el-breadcrumb-item v-for="(item ,index) in breadCrumbList" :key="index">{{item.title}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
export default {
  name: "Breadcrumb",
  props: {
    breadCrumbList: {
      type: Array,
      required: true
    }
  },
  methods: {}
};
</script>
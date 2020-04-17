<!--
 * @Description: 
 * @Autor: yetm
 * @Date: 2020-03-23 15:37:25
 * @LastEditors: yetm
 * @LastEditTime: 2020-04-17 14:09:29
 -->
<style lang="less">
@import "../assets/styles/base.less";
@import "./style.less";
</style>
<template>
  <el-container class="layout">
    <template v-if="navMenu ==='left'">
      <el-aside class="layout_aside" :width="isCollapse?'64px':'200px'">
        <div class="layout_logo" :width="isCollapse?'64px':'200px'">我可以是logo</div>
        <NavMenu :isCollapse="isCollapse" :menuList="menuList"></NavMenu>
      </el-aside>
      <el-container>
        <el-header class="layout_header">
          <div class="header_left">
            <div class="left_aside">
              <i v-if="isCollapse" class="el-icon-s-unfold" @click="isCollapse=false"></i>
              <i v-else class="el-icon-s-fold" @click="isCollapse=true"></i>
            </div>
            <div class="left_two">
              <Breadcrumb :breadCrumbList="breadCrumbList"></Breadcrumb>
            </div>
          </div>
          <div class="header_right">
            <Avatar></Avatar>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer class="layout_footer" v-if="footer">我是底部</el-footer>
      </el-container>
    </template>
    <template v-else>
      <el-header class="layout_header">
        <div class="header_left">
          <div class="layout_logo" width="200px">我可以是logo</div>
          <div class="left_two">
            <NavMenu mode="horizontal" :menuList="menuList"></NavMenu>
          </div>
        </div>
        <div class="header_right">
          <Avatar></Avatar>
        </div>
      </el-header>
      <el-main>
        <Breadcrumb :breadCrumbList="breadCrumbList"></Breadcrumb>
        <el-divider></el-divider>
        <div class="layout_content">
          <router-view></router-view>
        </div>
      </el-main>
      <el-footer class="layout_footer" v-if="footer">我是底部</el-footer>
    </template>
  </el-container>
</template>
<script>
import { Layout } from "@/config";
import { NavMenu, Breadcrumb, Avatar } from "./components";
export default {
  components: {
    NavMenu,
    Breadcrumb,
    Avatar
  },
  data() {
    return {
      navMenu: "",
      footer: undefined,
      isCollapse: false
    };
  },
  computed: {
    // 导航菜单
    menuList() {
      return this.$store.state.menuList;
    },
    breadCrumbList() {
      return this.$store.state.breadCrumbList;
    }
  },
  watch: {
    $route: {
      handler(to) {
        this.$store.commit("updateBreadCrumb", { name: to.name }); // 更新菜单，有权限的显示
      },
      deep: true,
      immediate: true
    }
  },
  created() {
    this.navMenu = Layout.navMenu;
    this.footer = Layout.footer;
    this.initMenu();
  },

  methods: {
    /**
     * @description:初始化菜单
     * @param {type}
     * @return:
     * @author: yetm
     */
    initMenu() {
      this.$store.commit("updateMenulist", { menu: [] }); // 更新菜单，有权限的显示
    }
  }
};
</script>

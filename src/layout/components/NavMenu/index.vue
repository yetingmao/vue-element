<!--
 * @Description: 
 * @Autor: yetm
 * @Date: 2020-04-14 15:58:24
 * @LastEditors: yetm
 * @LastEditTime: 2020-04-15 15:44:03
 -->
<style lang="less">
@import "./style.less";
</style>
<template>
  <el-menu
    v-if="mode === 'horizontal'"
    mode="horizontal"
    :unique-opened="true"
    @select="handleChangeMenu"
  >
    <el-submenu v-for="item1 in menuList" :key="item1.name" :index="item1.path">
      <template slot="title">{{item1.title}}</template>
      <template v-for="item2 in item1.children">
        <el-submenu
          v-if="item2.children && item2.children.length"
          :key="item2.name"
          :index="item2.path"
        >
          <template slot="title">{{item2.title}}</template>
          <el-menu-item
            v-for="item3 in item2.children"
            :index="item3.path"
            :key="item3.name"
          >{{item3.title}}</el-menu-item>
        </el-submenu>
        <el-menu-item v-else :index="item2.path" :key="item2.name">{{item2.title}}</el-menu-item>
      </template>
    </el-submenu>
  </el-menu>
  <el-menu v-else :collapse="isCollapse" :unique-opened="true" @select="handleChangeMenu">
    <el-submenu v-for="item1 in menuList" :key="item1.name" :index="item1.path">
      <template slot="title">
        <i :class="item1.icon"></i>
        <span slot="title">{{item1.title}}</span>
      </template>
      <template v-for="item2 in item1.children">
        <el-submenu
          v-if="item2.children && item2.children.length"
          :key="item2.name"
          :index="item2.path"
        >
          <span slot="title">{{item2.title}}</span>
          <el-menu-item
            v-for="item3 in item2.children"
            :index="item3.path"
            :key="item3.name"
          >{{item3.title}}</el-menu-item>
        </el-submenu>
        <el-menu-item v-else :index="item2.path" :key="item2.name">{{item2.title}}</el-menu-item>
      </template>
    </el-submenu>
  </el-menu>
</template>
<script>
export default {
  name: "NavMenu",
  props: {
    isCollapse: {
      type: Boolean,
      required: false
    },
    menuList: {
      type: Array,
      required: true
    },
    mode: {
      type: String,
      required: false
    }
  },
  data() {
    return {};
  },
  methods: {
    handleChangeMenu(index, indexPath) {
      const router = indexPath.join("/");
      this.$router.push(router);
    }
  }
};
</script>
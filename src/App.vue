<!--
 * @Description: 
 * @Autor: yetm
 * @Date: 2020-03-23 15:05:36
 * @LastEditors: islilinn
 * @LastEditTime: 2020-03-30 08:33:41
 -->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<style lang="less">
html {
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue",
    Arial, "Pingfang SC", "Microsoft Yahei", "WenQuanYi Micro Hei", sans-serif;
  background-color: #f5f5f5;
  color: #5b6b73;
  line-height: 1.2;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 16px;
  height: 100%;
}

body {
  font-size: 12px;
  overflow: hidden;
  margin: 0;
  padding: 0;
  background: #f5f5f5;
  color: #525e71;
  font-weight: normal;
  line-height: 18px;
  height: 100%;
  min-width: 1200px;
}

@media (min-width: 1024px) {
  body {
    overflow-x: hidden;
  }
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
blockquote,
dl,
dt,
dd,
ul,
ol,
li,
pre,
form,
fieldset,
legend,
button,
input,
textarea,
th,
td {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
button,
input,
select,
textarea {
  font: 12px/1.5tahoma, arial, \5b8b\4f53;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
}

address,
cite,
dfn,
em,
var {
  font-style: normal;
}

code,
kbd,
pre,
samp {
  font-family: couriernew, courier, monospace;
}

small {
  font-size: 12px;
}

ul,
ol {
  list-style: none;
}

a {
  text-decoration: none;
}

sup {
  vertical-align: text-top;
}

sub {
  vertical-align: text-bottom;
}

legend {
  color: #000;
}

fieldset,
img {
  border: 0;
}

button,
input,
select,
textarea {
  font-size: 100%;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

/*处理滚动条*/
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-thumb {
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.1);
}
#app {
  width: 100%;
  height: 100%;
}
</style>

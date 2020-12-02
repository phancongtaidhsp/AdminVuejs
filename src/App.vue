<template>
  <div id="app">
    <div class="wrapper">
        <perfect-scrollbar v-bind:swipeEasing ="false" v-bind:class="'sidebar'">
          <Menu></Menu>
        </perfect-scrollbar>
      <div class="main">
        <div class="header">
          <Header></Header>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import Menu from "./components/Menu";
import Header from "./components/Header";
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'
export default {
  name: "App",
  components: {
    Menu,
    Header,
    PerfectScrollbar
  },
};
</script>
<style lang="scss">
@import "./assets/sass/main.scss";
@import '../node_modules/vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css';
</style>

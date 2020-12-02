<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <i class="fab fa-elementor nav__icon__right"></i>
    <template v-if="currentRoute.name === menus[0].name">
      <a class="">Dashboard</a>
    </template>
    <template v-else-if="!currentRoute.sub">
      <router-link class="header-route" v-bind:to="'/' + menus[0].routes[0]"
        >Dashboard</router-link
      >
      <a class="header-route">{{ currentRoute.name }}</a>
    </template>
    <template v-else>
      <router-link class="header-route" v-bind:to="'/' + menus[0].routes[0]">Dashboard</router-link>
      <template v-if="pathRoute == '/' + currentRoute.routes[0]">
        <a class="header-route">{{ currentRoute.name }}</a>
      </template>
      <template v-else>
        <router-link class="header-route" v-bind:to="'/' + currentRoute.routes[0]">
          {{ currentRoute.name }}</router-link
        >
      </template>
      <a class="header-route">{{ currentRoute.sub[indexRoute] }}</a>
    </template>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto"></ul>
      <div class="nav__right">
        <i class="fas fa-search nav__icon__left"></i>
        <i class="fas fa-expand nav__icon__left"></i>
        <i class="fas fa-text-height nav__icon__left"></i>
        <i class="fas fa-language nav__icon__left"></i>
        <img class="nav__avatar" :src="require('@/assets/avatar.gif')" />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data: function () {
    return {
      menus: [
        {
          name: "Dashboard",
          icon: "fas fa-tachometer-alt",
          routes: ["dashboard"],
        },
        {
          name: "Documentation",
          icon: "far fa-file-alt",
          routes: ["documentation"],
        },
        { name: "Guide", icon: "far fa-paper-plane", routes: ["guide"] },
        {
          name: "Permission",
          icon: "fas fa-lock",
          sub: ["Page Permission", "Directive Permission", "Role Permission"],
          routes: [
            "permission/page",
            "permission/directive",
            "permission/role",
          ],
        },
        { name: "Icons", icon: "fas fa-icons", routes: ["icons"] },
        {
          name: "Components",
          icon: "fas fa-th-large",
          sub: [
            "Tinymce",
            "Markdown",
            "JSON Editor",
            "Avatar Upload",
            "Dropzone",
          ],
          routes: [
            "component/tinymce",
            "component/markdown",
            "component/json-editor",
            "component/avatar-upload",
            "component/dropzone",
          ],
        },
      ],
      indexRoute: 0,
      currentRoute: {
        name: "Dashboard",
        icon: "fas fa-tachometer-alt",
        routes: ["dashboard"],
      },
      pathRoute: "",
    };
  },
  watch: {
    $route(to) {
      this.pathRoute = to.path;
      for (const el of this.menus) {
        if (el.routes.length > 1) {
          for (const [index, item] of el.routes.entries()) {
            if (to.path === "/" + item) {
              this.currentRoute = el;
              this.indexRoute = index;
              break;
            }
          }
        } else {
          if (to.path === "/" + el.routes[0]) {
            this.currentRoute = el;
            break;
          }
        }
      }
    },
  },
};
</script>

<style lang="scss">
@import ".././assets/sass/nav.scss";
@import ".././assets/sass/header.scss";
</style>
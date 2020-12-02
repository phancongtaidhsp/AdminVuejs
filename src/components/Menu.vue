<template>
  <div>
    <menu-item
      v-for="menu in list"
      :key="menu.name"
      v-bind:menu="menu"
    ></menu-item>
  </div>
</template>


<script>
import MenuItem from "./MenuItem.vue";
export default {
  created() {},
  data() {
    return {
      list: [
        {
          name: "Dashboard",
          icon: "fas fa-tachometer-alt",
          routes: ["dashboard"],
        },
        {
          name: "Dashboard",
          icon: "fas fa-tachometer-alt",
          routes: ["dashboard"],
        },
        {
          name: "Dashboard",
          icon: "fas fa-tachometer-alt",
          routes: ["dashboard"],
        },
        {
          name: "Dashboard",
          icon: "fas fa-tachometer-alt",
          routes: ["dashboard"],
        },
        {
          name: "Dashboard",
          icon: "fas fa-tachometer-alt",
          routes: ["dashboard"],
        },
        {
          name: "Dashboard",
          icon: "fas fa-tachometer-alt",
          routes: ["dashboard"],
        },
        {
          name: "Dashboard",
          icon: "fas fa-tachometer-alt",
          routes: ["dashboard"],
        },
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
    };
  },
  components: {
    MenuItem,
  },
  name: "Menu",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import ".././assets/sass/menu.scss";
</style>

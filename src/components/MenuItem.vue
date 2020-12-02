<template>
  <div>
    <div>
      <template v-if="menu.routes.length > 1">
        <a href="#" @click="showSubmenu(menu.name)">
          <li class="menuitem">
            <i class="menuitem__icon" v-bind:class="menu.icon"></i>
            <span>{{ menu.name }}</span>
            <div
              class="submenuitem__icon"
              v-if="menu.sub"
              v-bind:data-icon-arrow="menu.name"
            >
              <i class="fas fa-chevron-down"></i>
            </div>
          </li>
        </a>
      </template>

      <template v-else>
        <router-link v-bind:to="'/' + menu.routes[0]" @click="showSubmenu(menu.name)">
          <li class="menuitem">
            <i class="menuitem__icon" v-bind:class="menu.icon"></i>
            <span>{{ menu.name }}</span>
            <div
              class="submenuitem__icon"
              v-if="menu.sub"
              v-bind:data-icon-arrow="menu.name"
            >
              <i class="fas fa-chevron-down"></i>
            </div>
          </li>
        </router-link>
      </template>

      <ul class="submenu" v-bind:data-submenu="menu.name">
        <router-link
          v-for="(item, index) in  menu.sub"
          v-bind:to="'/' + menu.routes[index]"
          :key="item"
          class="menuitem submenu__item"
        >
          {{ item }}
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import "@fortawesome/fontawesome-free/js/all.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import $ from "jquery";
export default {
  props: ["menu"],
  data() {
    return {
      show: {},
    };
  },
  created() {},
  methods: {
    showSubmenu: function (name) {
      console.log(this.$parent.$parent)
      if (this.show[name]) {
        delete this.show[name];
        $(`div[data-icon-arrow="${name}"]`).css({
          transform: "rotate(" + 0 + "deg)",
        });
      } else {
        this.show[name] = 1;
        $(`div[data-icon-arrow="${name}"]`).css({
          transform: "rotate(" + 180 + "deg)",
        });
      }
      $(`ul[data-submenu="${name}"]`).animate(
        {
          height: "toggle",
        },
        200
      );
    },
  },
  name: "MenuItem",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import ".././assets/sass/menu-item.scss";
</style>

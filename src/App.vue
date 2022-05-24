<template>
  <top-menu></top-menu>

  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import TopMenu from "@/components/TopMenu.vue";

export default defineComponent({
  name: "App",
  components: {
    TopMenu,
  },
});
</script>

<style lang="scss">
@import "assets/css/reset.css";
@import "assets/css/common.css";
</style>

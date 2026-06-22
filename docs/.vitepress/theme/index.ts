import { h, watch, onMounted } from "vue";
import { useRoute } from "vitepress";
import DefaultTheme from "vitepress/theme";
import CustomFooter from "./components/CustomFooter.vue";
import { initTabSync } from "./tabsync"; 
import "./style.css"; // This is a typescript error and works without issues

export default {
  extends: DefaultTheme,
  
  setup() {
    const route = useRoute();

    onMounted(() => {
      initTabSync();
    });

    watch(
      () => route.path,
      () => setTimeout(initTabSync, 50)
    );
  },

  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      "layout-bottom": () => h(CustomFooter)
    });
  }
};
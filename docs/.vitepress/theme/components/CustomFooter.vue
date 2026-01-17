<script setup lang="ts">
import { useData } from 'vitepress';

const { theme } = useData();
</script>

<template>
  <div class="custom-footer">
    <p>
      This wiki is community-driven and open-source. 
      Build: 
      <a :href="`https://github.com/danielmccluskey/repomods-wiki/commit/${theme.buildFullHash || theme.buildShortHash}`" target="_blank">
        {{ theme.buildShortHash }}
      </a>
    </p>
  </div>
</template>

<style scoped>
.custom-footer {
  position: relative;
  z-index: 100;
  width: 100%;
  
  padding: 12px 0;
  margin-top: 42px;
  
  background-color: var(--custom-footer-bg);
  border-top: 1px solid var(--vp-c-divider);
  
  font-size: 12px;
  line-height: 20px;
  color: var(--vp-c-text-2);
  text-align: center;
  font-family: var(--vp-font-family);
}

.custom-footer p {
  margin: 0;
}

.custom-footer a {
  color: var(--vp-c-link);
  font-weight: 500;
  text-decoration: none;
}

.custom-footer a:hover {
  color: var(--vp-c-link-hover);
  text-decoration: underline;
}
</style>
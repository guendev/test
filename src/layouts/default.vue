<template>
  <div
    :id="String($route.name) || ''"
    class="bg-primary-50 text-slate-900"
  >
    <router-view />
  </div>
</template>

<script lang="ts" setup></script>

<style></style>

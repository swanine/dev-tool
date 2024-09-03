<script setup lang="ts">
import { appWindow } from '@tauri-apps/api/window'
document
    .getElementById('titlebar-minimize')
    .addEventListener('click', () => appWindow.minimize())
document
    .getElementById('titlebar-maximize')
    .addEventListener('click', () => appWindow.toggleMaximize())
document
    .getElementById('titlebar-close')
    .addEventListener('click', () => appWindow.close())
// import Greet from "./components/Greet.vue";
</script>

<template>
  <div class="w-full h-screen bg-white">
    <div class="h-16 w-full px-10 border-b border-zinc-100"></div>



<!--    <Greet />-->
  </div>
</template>


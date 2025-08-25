<script setup lang="ts">
defineProps<{
  isSidebarOpen: boolean
}>()

defineEmits(['toggle-sidebar'])
</script>

<template>
  <header>
    <button class="navButton" @click="$emit('toggle-sidebar')">
      <img v-if="!isSidebarOpen" src="../assets/menu.png" alt="ouvrir le menu de navigation" />
      <img v-else src="../assets/cross.png" alt="fermer le menu de navigation" />
    </button>
    <img src="../assets/logo.svg" alt="logo" class="headerLogo" />
    <a href="/" class="loginButton"><img src="../assets/avatar.png" alt="Connexion" /></a>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  z-index: 2;
  height: 82px;
  width: 100vw;
  padding: 0 1rem;
  background-image: url('../assets/bg_header.jpg');
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navButton,
.loginButton {
  background-color: transparent;
  height: 30px;
  width: 30px;
  padding: 0;
  border: 0;
  cursor: pointer;
  img {
    max-width: 100%;
    max-height: 100%;
  }
}
.loginButton {
  height: 35px;
  width: 35px;
  img {
    height: 35px;
    width: 35px;
  }
}
.headerLogo {
  max-height: 80px;
  max-width: 180px;
}
</style>

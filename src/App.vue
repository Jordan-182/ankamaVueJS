<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import AnkamaShop from './components/AnkamaShop.vue'
import DesktopHeader from './components/DesktopHeader.vue'
import GlobalFooter from './components/GlobalFooter.vue'
import HeroSection from './components/HeroSection.vue'
import MobileHeader from './components/MobileHeader.vue'
import NosActualites from './components/NosActualites.vue'
import NosCreations from './components/NosCreations.vue'
import NotreSociete from './components/NotreSociete.vue'
import SideBar from './components/SideBar.vue'

const isMobile = ref(window.innerWidth < 768)
const handleResize = () => {
  isMobile.value = window.innerWidth < 768
}
onMounted(() => {
  window.addEventListener('resize', handleResize)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
const isSidebarOpen = ref(false)
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<template>
  <MobileHeader v-if="isMobile" :is-sidebar-open="isSidebarOpen" @toggle-sidebar="toggleSidebar" />
  <DesktopHeader v-else />
  <main>
    <SideBar :is-open="isSidebarOpen" />
    <HeroSection :is-mobile="isMobile" />
    <NotreSociete />
    <AnkamaShop :is-mobile="isMobile" />
    <NosCreations :is-mobile="isMobile" />
    <NosActualites />
  </main>
  <GlobalFooter />
</template>

<style scoped></style>

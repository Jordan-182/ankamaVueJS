<script setup lang="ts">
defineProps<{
  isOpen: boolean
}>()
</script>

<template>
  <transition name="slide">
    <aside v-show="isOpen" class="sidebar">
      <nav>
        <ul>
          <li><a href="#">GAMES</a></li>
          <li><a href="#">ANIMATIONS</a></li>
          <li><a href="#">EDITIONS</a></li>
          <li><a href="#">BOARDGAMES</a></li>
        </ul>
      </nav>
    </aside>
  </transition>
</template>

<style scoped>
.sidebar {
  position: absolute;
  z-index: 2;
  top: 82px;
  left: 0;
  width: clamp(150px, 75%, 440px);
  height: calc(100dvh - 82px);
  background: var(--sideBar);
  color: white;
  font-family: var(--bebasNeue);
}

li {
  padding: 6px 12px;
  font-size: 1.62rem;
  border-bottom: 1px solid var(--darkGrey);
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}
</style>

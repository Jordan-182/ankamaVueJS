<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
defineProps<{ isMobile: boolean }>()

import furoshikiMobile from '../assets/furoshiki-mobile.fr.jpg'
import furoshiki from '../assets/furoshiki.fr.jpg'
import momoreMobile from '../assets/momore-mobile.fr.jpg'
import momore from '../assets/momore.fr.jpg'

const carouselItems = [
  {
    id: 1,
    title: 'Furoshiki',
    imageDesktop: furoshiki,
    imageMobile: furoshikiMobile,
    link: 'https://www.ankama-shop.com/fr/produits-derives-dofus/3649-furoshiki-pack-3-emballages-cadeau-en-tissu.html',
  },
  {
    id: 2,
    title: 'Cire Momore',
    imageDesktop: momore,
    imageMobile: momoreMobile,
    link: 'https://www.ankama-shop.com/fr/65-peluches-figurines',
  },
]
</script>

<template>
  <section class="shop">
    <div class="topBar">
      <img src="../assets/logo-shop.jpg" alt="Ankama Shop" />
    </div>
    <Swiper
      :modules="[Pagination, Autoplay]"
      :pagination="{ clickable: true }"
      :loop="true"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
    >
      <SwiperSlide :key="item.id" v-for="item in carouselItems">
        <img :src="isMobile ? item.imageMobile : item.imageDesktop" :alt="item.title" />
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<style scoped>
.shop {
  height: fit-content;
  width: 100vw;
  background-color: var(--darkGrey);
  border-top: 6px solid var(--lightRed);
  overflow: hidden;
}
.topBar {
  height: 54px;
  display: flex;
  justify-content: center;
}
.swiper {
  height: 420px;
  width: 100vw;
}

.swiper-slide {
  max-width: 100vw;
  height: 420px;
  overflow: hidden;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  height: 420px;
  object-fit: cover;
  display: block;
}
</style>

<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import cosmobot from '../assets/cosmobot.jpg'
import cosmobotMobile from '../assets/cosmobot_mobile.jpg'
import dofusDesktop from '../assets/dofus.jpg'
import dofusMobile from '../assets/dofus_mobile.jpg'
import krosfighter from '../assets/krosfighter.jpg'
import krosfighterMobile from '../assets/krosfighter_mobile.jpg'
import radiant from '../assets/radiant.jpg'
import radiantMobile from '../assets/radiant_mobile.jpg'
import wakfu from '../assets/wakfu.jpg'
import wakfuMobile from '../assets/wakfu_mobile.jpg'
import wavenDesktop from '../assets/waven.jpg'
import wavenMobile from '../assets/waven_mobile.jpg'

defineProps<{ isMobile: boolean }>()

const carouselItems = [
  {
    id: 1,
    imageDesktop: wavenDesktop,
    imageMobile: wavenMobile,
    title: 'WAVEN // JEU EN LIGNE',
    description: 'Le renouveau du RPG tactique débarque bientôt !',
  },
  {
    id: 2,
    imageDesktop: dofusDesktop,
    imageMobile: dofusMobile,
    title: 'DOFUS // JEU EN LIGNE',
    description: 'Une aventure épique vous attend',
  },
  {
    id: 3,
    imageDesktop: wakfu,
    imageMobile: wakfuMobile,
    title: 'WAKFU // JEU EN LIGNE',
    description: 'Le MMORPG stratégique, politique et écologique',
  },
  {
    id: 4,
    imageDesktop: cosmobot,
    imageMobile: cosmobotMobile,
    title: 'COSMOBOT // MOBILE',
    description: 'Saute de planète en planète',
  },
  {
    id: 5,
    imageDesktop: radiant,
    imageMobile: radiantMobile,
    title: 'RADIANT // MANGA',
    description: 'Le premier manga Français édité au Japon',
  },
  {
    id: 6,
    imageDesktop: krosfighter,
    imageMobile: krosfighterMobile,
    title: 'KROSFIGHTER // JEU PREMIUM',
    description: `Découvrez Krosfighter, le nouveau party-game d'Ankama!`,
  },
]
</script>

<template>
  <section>
    <Swiper
      :modules="[Pagination, Autoplay]"
      :pagination="{ clickable: true }"
      :loop="true"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
    >
      <SwiperSlide :key="item.id" v-for="item in carouselItems">
        <img :src="isMobile ? item.imageMobile : item.imageDesktop" :alt="item.title" />
        <div class="carouselText">
          <h2>{{ item.title }}</h2>
          <p>{{ item.description }}</p>
        </div>
        <a href="/" v-show="!isMobile" class="siteLink">Visiter le site</a>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<style scoped>
section {
  height: 420px;
  overflow: hidden;
  width: 100vw;
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

.carouselText {
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 120px;
  background-color: var(--white);
  text-align: center;
  padding-top: 1rem;
  h2 {
    font-family: var(--lato);
    font-weight: var(--fw-black);
  }
  p {
    font-family: var(--lato);
  }
}

@media screen and (min-width: 992px) {
  .carouselText {
    width: fit-content;
    height: fit-content;
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.5) 4px 4px 0px 0px;
    right: 10%;
    top: 30%;
  }
  .siteLink {
    position: absolute;
    right: 10%;
    bottom: 32%;
    font-family: var(--lato);
    padding: 12px 34px;
    background: var(--darkOrange);
    transition: 0.3s ease;
    &:hover {
      background: var(--orange);
    }
  }
}
</style>

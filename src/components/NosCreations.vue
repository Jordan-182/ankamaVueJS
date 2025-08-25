<script setup lang="ts">
defineProps<{ isMobile: boolean }>()

import dofusMobile from '../assets/bg-creation2-mob.jpg'
import dofusDesktop from '../assets/bg-creation2.jpg'
import monsterMobile from '../assets/bg-creation3-mob.jpg'
import monster from '../assets/bg-creation3.jpg'
import nindashMobile from '../assets/bg-creation4-mob.jpg'
import nindash from '../assets/bg-creation4.jpg'
import abracaMobile from '../assets/bg-creation5-mob.jpg'
import abraca from '../assets/bg-creation5.jpg'
import radiantMobile from '../assets/bg-creation6-mob.jpg'
import radiant from '../assets/bg-creation6.jpg'

const creations = [
  {
    id: 1,
    title: 'GAMES // DOFUS',
    imageDesktop: dofusDesktop,
    imageMobile: dofusMobile,
    description:
      'DOFUS est un RPG où votre stratégie fera la différence entre la victoire... et la défaite ! Ce jeu gratuit en ligne  propose des combats tactiques au tour par tour. À télécharger ou jouable via navigateur, DOFUS est un jeu de rôle en ligne  multijoueur (MMORPG). Dans ce jeu, , exercez de multiples métiers parmi les 19 proposés (chasseur, alchimiste...). Gagnez des "kamas" en échange de vos services ou ressources. Jeu de stratégie PC.',
    color: 'var(--green)',
    linkColor: 'var(--white)',
  },
  {
    id: 2,
    title: 'BOARDGAMES // MONSTER SLAUGHTER',
    imageDesktop: monster,
    imageMobile: monsterMobile,
    description: `À la tête d'une famille de monstres (loups-garous, vampires, zombies ou encore golems), cette fois, c'est vous qui devrez traquer et occire d'insupportables adolescents réfugiés dans une maison au milieu de la forêt!`,
    color: 'var(--darkOrange)',
    linkColor: 'var(--white)',
  },
  {
    id: 3,
    title: 'MOBILE // NINDASH',
    imageDesktop: nindash,
    imageMobile: nindashMobile,
    description: `Bravez plus de 90 niveaux et affrontez des boss emblématiques`,
    color: 'var(--purple)',
    linkColor: 'var(--white)',
  },
  {
    id: 4,
    title: 'ANIMATION // ABRACA',
    imageDesktop: abraca,
    imageMobile: abracaMobile,
    description: `Deux enfants aux caractères opposés, un geek rationnel et une justicière impulsive vont former une équipe atypique afin d'aider des créatures issues des contes de fées à résoudre leurs nombreux problèmes.`,
    color: 'var(--lightYellow)',
    linkColor: 'var(--darkText)',
  },
  {
    id: 5,
    title: 'EDITION // RADIANT',
    imageDesktop: radiant,
    imageMobile: radiantMobile,
    description: `Seth est un aspirant sorcier de la région des Pompo Hills. Comme tous les sorciers, c'est un " infecté " : un des rares êtres vivants ayant survécu au contact des Némésis, ces créatures tombées du ciel qui contaminent et déciment tous ceux qu'ils touchent. Son apparente immunité lui a fait choisir une voie qui lui semblait toute désignée : devenir Chasseur et combattre les Némésis, mais surtout trouver le Radiant, leur berceau présumé.`,
    color: 'var(--yellow)',
    linkColor: 'var(--darkText)',
  },
]
</script>

<template>
  <section class="creationSection">
    <h2>Nos créations</h2>
    <div
      v-for="creation in creations"
      v-bind:key="creation.id"
      class="creationItem"
      :style="{ borderTop: `6px solid ${creation.color}` }"
    >
      <img :src="isMobile ? creation.imageMobile : creation.imageDesktop" :alt="creation.title" />
      <article class="itemText">
        <h3 :style="{ borderBottom: `2px solid ${creation.color}` }">{{ creation.title }}</h3>
        <p>{{ creation.description }}</p>
        <a
          href="/"
          :style="{ '--btn-color': creation.color, '--btn-text-color': creation.linkColor }"
          >VISITER LE SITE</a
        >
      </article>
    </div>
  </section>
</template>

<style scoped>
.creationSection {
  background: var(--white);
  width: 100vw;
  border-top: 6px solid var(--orange);

  h2 {
    text-transform: uppercase;
    font-family: var(--lato);
    font-weight: var(--fw-black);
    font-size: 2rem;
    color: var(--white);
    background-color: var(--orange);
    max-width: 500px;
    text-align: center;
    margin: 0 auto;
    padding: 1rem 2rem;
  }
}
.creationItem {
  min-height: 450px;
  gap: 0;

  overflow: hidden;
  img {
    height: 400px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: block;
  }
}
.itemText {
  height: fit-content;
  width: 100vw;
  padding: 0 1rem;
  margin-top: 0;
  padding-bottom: 1rem;
  background-color: var(--darkGrey);
  color: var(--white);
  font-family: var(--roboto);
  h3 {
    font-size: 1.5rem;
    width: fit-content;
    margin: 0 auto 1.5rem;
    padding: 1rem 0 0.5rem;
    text-align: center;
  }
  p {
    text-align: center;
  }
  a {
    display: block;
    width: fit-content;
    margin: 1rem auto;
    padding: 1rem 2rem;
    text-transform: uppercase;
    background-color: var(--btn-color);
    color: var(--btn-text-color);
    font-family: var(--lato);
    font-size: 1.1rem;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: var(--orange);
    }
  }
}

@media screen and (min-width: 992px) {
  .creationItem {
    position: relative;
    img {
      height: 450px;
    }
  }
  .itemText {
    position: absolute;
    top: 0;
    right: 50%;
    width: 510px;
    background-color: rgba(0, 0, 0, 0.9);
    padding: 0 0.5rem;
    a {
      margin: 1rem 0 1rem auto;
      padding: 0.5rem 1rem;
    }
  }
}
</style>

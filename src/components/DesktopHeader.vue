<script setup lang="ts"></script>

<template>
  <header>
    <div class="topBar">
      <img src="../assets/logo.svg" alt="Logo" class="topBarLogo" />
    </div>
    <nav>
      <section class="navContainer">
        <ul class="navLeft">
          <li>
            <a href="/" class="navLink gamesLink"><span></span>GAMES</a>
          </li>
          <li>
            <a href="/" class="navLink animationsLink"><span></span>ANIMATIONS</a>
          </li>
        </ul>
        <img src="../assets/logoDesktop.svg" alt="Logo" class="headerLogo" />
        <ul class="navRight">
          <li>
            <a href="/" class="navLink editionsLink"><span></span>EDITIONS</a>
          </li>
          <li>
            <a href="/" class="navLink boardgamesLink"><span></span>BOARDGAMES</a>
          </li>
        </ul>
      </section>
    </nav>
  </header>
</template>

<style scoped>
header {
  height: 205px;
  width: 100vw;
  background-image: url('../assets/bg_header.jpg');
}
.topBar {
  height: 35px;
  display: flex;
  align-items: center;
}
.topBarLogo {
  height: 28px;
  padding: 0 1rem;
}
nav {
  border-top: 4px solid var(--darkGrey);
}
.navContainer {
  height: 170px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  font-family: var(--dosis);
  letter-spacing: 1.5px;
}
.navLeft,
.navRight {
  display: flex;
  gap: 3rem;
}
.navLink {
  height: 67px;
  width: 67px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--navLinks);

  img {
    height: 50px;
    width: 50px;
    border: 2px solid var(--navLinks);
    border-radius: 50%;
    padding: 2px;
  }
}
.gamesLink {
  span {
    min-height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 2px solid var(--darkGrey);
    background: url(../assets/videogamesOff.png) center center / cover;
    transition: 0.3s ease;
  }
  &:hover {
    color: var(--darkOrange);
  }
  &:hover span {
    background: url(../assets/videogame.png) center center / cover var(--darkOrange);
    border: 2px solid var(--darkOrange);
  }
}
.animationsLink {
  span {
    min-height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 2px solid var(--darkGrey);
    background: url(../assets/animationsOff.png) center center / cover;
    transition: 0.3s ease;
  }
  &:hover {
    color: var(--lightYellow);
  }
  &:hover span {
    background: url(../assets/animation.png) center center / cover var(--lightYellow);
    border: 2px solid var(--lightYellow);
  }
}
.editionsLink {
  span {
    min-height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 2px solid var(--darkGrey);
    background: url(../assets/editionsOff.png) center center / cover;
    transition: 0.3s ease;
  }
  &:hover {
    color: var(--yellow);
  }
  &:hover span {
    background: url(../assets/editions.png) center center / cover var(--yellow);
    border: 2px solid var(--yellow);
  }
}
.boardgamesLink {
  span {
    min-height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 2px solid var(--darkGrey);
    background: url(../assets/boardgamesOff.png) center center / cover;
    transition: 0.3s ease;
  }
  &:hover {
    color: var(--green);
  }
  &:hover span {
    background: url(../assets/boardgame.png) center center / cover var(--green);
    border: 2px solid var(--green);
  }
}
.headerLogo {
  height: 174px;
  width: 210px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

@media screen and (min-width: 1024px) {
  .navContainer {
    max-width: 1000px;
  }
  .navLeft,
  .navRight {
    gap: 4rem;
  }
}
</style>

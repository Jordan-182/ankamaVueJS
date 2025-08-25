<script setup lang="ts"></script>

<template>
  <section class="societySection">
    <h2>Notre société</h2>
    <div class="linksContainer">
      <a href="/" class="aboutLink">
        <div class="imgContainer"></div>
        <span>à propos</span>
      </a>
      <a href="/" class="jobsLink"
        ><div class="imgContainer"></div>
        <span>offres d'emplois</span></a
      >
      <a href="/" class="pressLink"
        ><div class="imgContainer"></div>
        <span>presse</span></a
      >
    </div>
  </section>
</template>

<style scoped>
.societySection {
  width: 100vw;
  min-height: 400px;
  background: var(--white);
  border-top: 6px solid var(--orange);
  padding-bottom: 1rem;
  text-transform: uppercase;
  h2 {
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
.linksContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 800px;
  margin: 2rem auto 0;
  gap: 1rem;
  a {
    height: 250px;
    width: 250px;
    background-color: var(--lightGrey);
    color: var(--black);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: color 0.3s ease;
    &:hover {
      border: 4px solid red;
      color: red;
    }
  }
}

.imgContainer {
  height: 120px;
  width: 120px;
}

.aboutLink .imgContainer {
  background: url('../assets/compagny-picto1.png') center/contain no-repeat;
  transition: 0.3s ease;
}
.aboutLink:hover .imgContainer {
  background: url('../assets/compagny-picto1-over.png') center/contain no-repeat;
}

.jobsLink .imgContainer {
  background: url('../assets/compagny-picto3.png') center/contain no-repeat;
  transition: 0.3s ease;
}
.jobsLink:hover .imgContainer {
  background: url('../assets/compagny-picto3-over.png') center/contain no-repeat;
}

.pressLink .imgContainer {
  background: url('../assets/compagny-picto4.png') center/contain no-repeat;
  transition: 0.3s ease;
}
.pressLink:hover .imgContainer {
  background: url('../assets/compagny-picto4-over.png') center/contain no-repeat;
}
</style>

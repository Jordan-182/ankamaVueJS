<script setup lang="ts"></script>

<template>
  <section class="actualiteSection">
    <h2>Actualités</h2>
    <div class="linksContainer">
      <a href="/"><img src="../assets/fb.png" alt="Facebook" /></a>
      <a href="/"><img src="../assets/yt.png" alt="Youtube" /></a>
    </div>
  </section>
</template>

<style scoped>
.actualiteSection {
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
  .linksContainer {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 1rem 0;
    a {
      img {
        transition: 0.3s ease;
        &:hover {
          filter: drop-shadow(0 0 0.5rem var(--orange));
        }
      }
    }
  }
}
</style>

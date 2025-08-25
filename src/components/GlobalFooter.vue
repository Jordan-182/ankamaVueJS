<script setup lang="ts"></script>

<template>
  <footer>
    <img src="../assets/logoDesktop.svg" alt="logo Ankama" class="footerLogo" />
    <p>
      © 2025 Ankama. Tous droits réservés. Contitions d'utilisation - Politique de confidentialité
      - Conditions Générales de Vente - Mentions Légales - Gestion des cookies
    </p>
    <div class="linksContainer">
      <a href="/">
        <img src="../assets/fb-over.png" alt="Facebook" />
      </a>
      <a href="/">
        <img src="../assets/yt-over.png" alt="Youtube" />
      </a>
    </div>
  </footer>
</template>

<style scoped>
footer {
  width: 100vw;
  padding: 1.5rem;
  background-color: var(--footer);
  color: var(--footerText);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.7rem;
  }
}
.footerLogo {
  height: 80px;
}
.linksContainer {
  display: flex;
  gap: 1rem;
  a {
    img {
      transition: 0.3s ease;
      &:hover {
        filter: drop-shadow(0 0 0.5rem var(--orange));
      }
    }
  }
}
@media screen and (min-width: 992px) {
  footer {
    flex-direction: row;
    gap: 2rem;
  }
  .linksContainer {
    gap: 0.5rem;
  }
}
</style>

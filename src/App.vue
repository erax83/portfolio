<template>
  <div id="app">
    <nav>
      <div id="portfolio-heading">
        <h1>PORTFOLIO</h1>
        <h2>Erik Axelsson</h2>
      </div>
      <div id="nav-menu">
        <a href="#about-me">Om mig</a>
        <a href="#projects">Projekt</a>
        <a href="#contact">Kontakt</a>
      </div>
    </nav>
    <main id="main-container">
      <div class="main-section" id="about-me"><About /></div>
      <div class="main-section" id="projects"><Projects /></div>
      <div class="main-section" id="contact"><Contact /></div>
    </main>
  </div>
</template>

<script>
import About from "@/components/About.vue";
import Projects from "@/components/Projects.vue";
import Contact from "@/components/Contact.vue";

export default {
  name: "App",
  components: { About, Projects, Contact },
};
</script>

<style>
html,
body {
  max-width: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}

nav {
  position: fixed;
  z-index: 1;
  top: 40px;
  left: 40px;
  background: whitesmoke;
  overflow-x: hidden;
  padding: 13px 22px;
}

#portfolio-heading {
  line-height: 0.7em;
}

nav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #ff9966;
  display: block;
}

nav a:hover {
  color: #064579;
}

#main-container {
  font-size: 28px;
  margin-left: 320px;
  /* padding: 0px 10px; */

  /* position: relative; */
  /* width: 100%; */
  height: 100vh;
  scroll-behavior: smooth;
  overflow: auto;
  scroll-snap-type: y mandatory;
  /* padding-left: 10em; */
}

.main-section {
  width: 100%;
  height: auto;
  min-height: 100vh;
  background-size: cover;
  scroll-snap-align: start;
}

.main-section:nth-child(1) {
  background: #ff9966;
}

.main-section:nth-child(2) {
  background: blue;
}

.main-section:nth-child(3) {
  /* background: mediumaquamarine; */
  background: black;
  color: white;
}

@media only screen and (min-width: 601px) {
  nav {
    width: 200px;
  }

  #nav-menu {
    visibility: visible;
  }
}

@media only screen and (max-width: 600px) {
  nav {
    width: 100%;
  }

  #nav-menu {
    visibility: collapse;
  }
}
</style>

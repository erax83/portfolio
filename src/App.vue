<template>
  <div id="app">
    <!-- Menu. -->
    <nav>
      <div id="portfolio-heading">
        <h1>PORTFOLIO</h1>
        <h2>Erik Axelsson</h2>
      </div>
      <div id="flags">
        <img
          class="flag"
          id="swedish-flag"
          v-on:click="languageToSwedish"
          src="@/assets/sweden.png"
          alt="swedish flag"
        />
        <img
          class="flag"
          id="brittish-flag"
          v-on:click="languageToEnglish"
          src="@/assets/united-kingdom.png"
          alt="british flag"
        />
      </div>
      <div id="nav-menu">
        <div v-if="this.$store.state.swedish == true">
          <a href="#about-me">Om mig</a>
          <a href="#projects">Projekt</a>
          <a href="#contact">Kontakt</a>
        </div>
        <div v-if="this.$store.state.swedish == false">
          <a href="#about-me">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
    <!-- Content components. -->
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

  methods: {
    // Change language to swedish.
    languageToSwedish: function () {
      if (this.$store.state.swedish == false) {
        this.$store.commit("changeLanguage");
        document.getElementById("swedish-flag").style.filter =
          "brightness(100%)";
        document.getElementById("brittish-flag").style.filter =
          "brightness(50%)";
      }
      console.log(this.$store.state.swedish);
    },
    // Change language to english.
    languageToEnglish: function () {
      if (this.$store.state.swedish == true) {
        this.$store.commit("changeLanguage");
        document.getElementById("brittish-flag").style.filter =
          "brightness(100%)";
        document.getElementById("swedish-flag").style.filter =
          "brightness(50%)";
      }
      console.log(this.$store.state.swedish);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&display=swap");

html,
body {
  background: white;
}

main h1 {
  font-size: 2em;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  color: white;
  filter: blur(0.4px);
}

main h2 {
  font-size: 0.8em;
  color: hsl(20, 100%, 70%);
}

main p {
  line-height: 1.7em;
}

#app {
  font-family: "Fira Code", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.flag {
  width: 20px;
  padding: 0.4em;
}

.flag:hover {
  cursor: pointer;
}

#swedish-flag {
  filter: brightness(100%);
}

#brittish-flag {
  filter: brightness(50%);
}

nav {
  position: fixed;
  z-index: 1;
  top: 40px;
  left: 40px;
  background: whitesmoke;
  overflow-x: hidden;
  padding: 13px 22px;
  box-shadow: 0.3px 0.3px 1px grey;
}

#portfolio-heading {
  line-height: 0.7em;
  display: inline-block;
}

a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #064579;
}

a:hover {
  color: rgb(72, 160, 233);
}

#main-container {
  font-size: 28px;
  margin-right: 30px;
  max-width: 30em;
  height: 100vh;
  scroll-behavior: smooth;
  overflow: auto;
  scroll-snap-type: y proximity;
  scroll-margin: 50px 0 50px 0;
}

#main-container p {
  font-size: 0.8em;
}

.main-section {
  width: 100%;
  height: auto;
  min-height: 100vh;
  background-size: cover;
  scroll-snap-align: start;
  padding-top: 20%;
}

@media only screen and (min-width: 901px) {
  nav {
    width: 200px;
  }

  nav a {
    display: block;
  }

  #main-container {
    margin-left: 320px;
  }

  .main-section {
    padding-top: 4em;
  }
}

@media only screen and (max-width: 900px) {
  nav {
    top: 20px;
    left: 20px;
    width: 420px;
  }

  nav a {
    display: inline-block;
  }

  #main-container {
    padding-left: 70px;
    margin-left: 0px;
    margin-right: 20px;
  }

  .main-section {
    padding-top: 6.5em;
  }

  #flags {
    position: absolute;
    top: 20px;
    right: 20px;
  }
}

@media only screen and (max-width: 600px) {
  nav {
    top: 15px;
    left: 15px;
    padding: 4px 13px;
    width: 370px;
  }

  a {
    font-size: 1.3em;
  }

  main h1 {
    font-size: 1.6em;
  }

  main p {
    font-size: 0.7em;
  }

  #main-container {
    padding-left: 20px;
    margin-left: 0px;
  }

  #main-container p {
    font-size: 0.7em;
  }

  .main-section {
    padding-top: 5em;
  }

  .project-component a {
    font-size: 0.7em;
  }
}

@media only screen and (max-width: 450px) {
  a {
    font-size: 1em;
  }

  nav {
    width: 300px;
  }

  #main-container p {
    font-size: 0.6em;
  }

  .project-component a {
    font-size: 0.6em;
  }
}
</style>

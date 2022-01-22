<template>
  <div id="app">
    <nav>
      <div id="portfolio-heading">
        <h1>PORTFOLIO</h1>
        <h2>Erik Axelsson</h2>
        
      </div>
      <div>
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
  
  methods: {
    languageToSwedish: function () {
      if (this.$store.state.swedish == false) {
        this.$store.commit("changeLanguage");
        document.getElementById("swedish-flag").style.filter = "brightness(100%)";
        document.getElementById("brittish-flag").style.filter = "brightness(50%)";
      }
      console.log(this.$store.state.swedish);
    },
    languageToEnglish: function () {
      if (this.$store.state.swedish == true) {
        this.$store.commit("changeLanguage");
        document.getElementById("brittish-flag").style.filter = "brightness(100%)";
        document.getElementById("swedish-flag").style.filter = "brightness(50%)";
      }
      console.log(this.$store.state.swedish);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Dongle:wght@300;400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Cousine&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Overpass+Mono&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Spinnaker&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&display=swap");

html,
body {
  max-width: 100%;
  background: black;
}

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: "Source Sans Pro", sans-serif;
  /* font-family: 'Ubuntu Mono', monospace; */
  /* font-family: 'Dongle', sans-serif; */
  /* font-family: 'Share Tech Mono', monospace; */
  /* font-family: 'Cousine', monospace; */
  font-family: "Overpass Mono", monospace;
  /* font-family: 'Spinnaker', sans-serif; */
  font-family: "Fira Code", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* max-width: 1500px; */
}

.flag {
  width: 20px;
  padding: 0.4em;
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
}

#portfolio-heading {
  line-height: 0.7em;
}

nav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: hsl(20, 100%, 70%);
}

nav a:hover {
  color: #064579;
}

#main-container {
  font-size: 28px;
  /* padding: 0px 10px; */

  /* position: relative; */
  /* width: 100%; */
  max-width: 30em;
  height: 100vh;
  scroll-behavior: smooth;
  overflow: auto;
  scroll-snap-type: y proximity;
  scroll-margin: 50px 0 50px 0;
  /* padding-left: 10em; */
}

.main-section {
  width: 100%;
  height: auto;
  min-height: 100vh;
  background-size: cover;
  scroll-snap-align: start;
  padding-top: 20%;
}

.main-section:nth-child(1) {
  background: #ff9966;
}

.main-section:nth-child(2) {
  background: blue;
}

.main-section:nth-child(3) {
  background: black;
  color: white;
}

/* @media only screen and (min-width: 1200px) {
  html,
  body {
    padding-left: 10%;
  }
} */

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
    padding-top: 5em;
  }
}

@media only screen and (max-width: 900px) {
  nav {
    width: 380px;
  }

  nav a {
    display: inline-block;
  }

  #main-container {
    padding-left: 70px;
    margin-left: 0px;
  }

  .main-section {
    padding-top: 7em;
  }
}

@media only screen and (max-width: 600px) {
  nav {
    top: 15px;
    left: 15px;
    padding: 4px 13px;
    width: 330px;
  }

  nav a {
    font-size: 1.3em;
  }

  #main-container {
    padding-left: 20px;
    margin-left: 0px;
  }

  .main-section {
    padding-top: 5em;
  }
}
</style>

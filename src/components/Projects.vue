<!-- Projects with descriptions and links. -->
<template>
  <div class="project-component">
    <div class="lang-swe" v-if="this.$store.state.swedish == true">
      <h1>Projekt</h1>
      <p>
        Här följer beskrivningar av de olika projekten och de tekniker som
        använts samt länkar till projekt och källkod. I samtliga projekt används
        responsiv design.
      </p>
      <br />
      <div>
        <h2>Portfolio</h2>
        <p>
          Webbplatsen du besöker just nu. Menyn är fixed och är designad med ett
          responsivt tänk. En porträttbild går att förstora med modalteknik.
          Global statehantering (Vuex) används för att skifta mellan svenska och
          engelska. Skapad med Vue.
        </p>
        <a href="https://github.com/erax83/portfolio" target="_blank"
          >Besök Github repository</a
        >
      </div>
      <br />
      <div>
        <h2>Local Weather Report</h2>
        <p>
          En väderapplikation som visar användarens lokala väder med hjälp av
          API:et Geolocation. Ett externt API (Open Weather) används för att
          hämta väderdata. Skapad med Vue.
        </p>
        <a href="https://optimistic-pasteur-847c15.netlify.app/" target="_blank"
          >Besök webbplats</a
        >
        <br />
        <a
          href="https://github.com/erax83/portfolio-weather-project"
          target="_blank"
          >Besök Github repository</a
        >
      </div>
      <br />
      <div>
        <h2>Our Recipes</h2>
        <p>
          Our Recipes är en receptcommunity där registrerade medlemmar både kan
          ladda upp egna recept och ta del av andra medlemmars recept. För
          hantering av recept används ett CRUD-API som möjliggör för användarna
          att lägga till, uppdatera och ta bort recept. Detta är en
          fullstackapplication skapad med Vue-ramverket Nuxt. Backenddelen är
          skriven med node och express och följer en MVC-struktur. Mongo DB
          används till databasen. För att testa applikationen utan att skapa ett
          nytt konto går det bra att logga in med mejladressen
          testy@testsson.com och lösenordet testytestsson.
        </p>

        <a href="https://portfolio-our-recepies.herokuapp.com/" target="_blank"
          >Besök webbplats</a
        >

        <br />
        <a
          href="https://github.com/erax83/portfolio-our-recepies"
          target="_blank"
          >Besök Github repository</a
        >
      </div>
      <br />
      <div>
        <h2>The Party District</h2>
        <p>
          En webbplats för ett krog/nöjes-koncept. Webbplatsen innehåller
          parallax samt flera andra typer av visuella effekter. Skapad med
          Wordpress.
        </p>
        <a href="https://eraxwp.wpcomstaging.com/" target="_blank"
          >Besök webbplats</a
        >
      </div>
    </div>
    <div class="lang-eng" v-if="this.$store.state.swedish == false">
      <h1>Projects</h1>
      <p>
        Here follows a description of the projects and the techniques used as
        well as links to the projects webbpages and source code. All projects
        take use of responsive design.
      </p>
      <br />
      <div>
        <h2>Portfolio</h2>
        <p>
          The website you are currently visiting. A portrait image can be
          enlarged with modal technique. Global state management (Vuex) is used
          to switch between Swedish and English. Made with Vue.
        </p>
        <a href="https://github.com/erax83/portfolio" target="_blank"
          >Visit Github repository</a
        >
      </div>
      <br />
      <div>
        <h2>Local Weather Report</h2>
        <p>
          A weather application that shows the user's local weather by utelizing
          the Geolocation API. An external API (Open Weather) is used to fetch
          weather data. Made with Vue.
        </p>
        <a href="https://optimistic-pasteur-847c15.netlify.app/" target="_blank"
          >Visit webpage</a
        >
        <br />
        <a
          href="https://github.com/erax83/portfolio-weather-project"
          target="_blank"
          >Visit Github repository</a
        >
      </div>
      <br />
      <div>
        <h2>Our Recipes</h2>
        <p>
          Our Recipes is a recipe community where registered members can take
          part of other members recipes as well as uploading their own recipes.
          A CRUD API allows users to add, update and delete recipes. This is a
          full stack application created with the Vue framework Nuxt. The
          backend is written with node and express and follows an MVC structure.
          Mongo DB is used for the database. To use the application without
          creating a new account you can log in with mail address
          testy@testsson.com and password testytestsson.
        </p>

        <a href="https://portfolio-our-recepies.herokuapp.com/" target="_blank"
          >Visit webpage</a
        >

        <br />
        <a
          href="https://github.com/erax83/portfolio-our-recepies"
          target="_blank"
          >Visit Github repository</a
        >
      </div>
      <br />
      <div>
        <h2>The Party District</h2>
        <p>
          A website made for a nightlife concept. Parallax is used as well as
          other types of visual effects. Made in wordpress.
        </p>
        <a href="https://eraxwp.wpcomstaging.com/" target="_blank"
          >Visit webpage</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
};
</script>

<style>
@media only screen and (max-width: 900px) {
  .project-link {
    font-size: 1.3em;
  }
}

@media only screen and (max-width: 450px) {
  a {
    font-size: 1em;
  }
}
</style>

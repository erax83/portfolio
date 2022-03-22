<template>
  <div class="project-component">
    <div class="lang-swe" v-if="this.$store.state.swedish == true">
      <h1>Projekt</h1>
      <div>
        <h2>Portfolio</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, facere?
        </p>
        <a href="https://github.com/erax83/portfolio" target="_blank"
          >Besök Github repository</a
        >
      </div>
      <br />
      <div>
        <h2>Local Weather Report</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
          ratione.
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
        <h2>Our Recepies</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          enim?
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
    </div>
    <div class="lang-eng" v-if="this.$store.state.swedish == false">
      <h1>Projects</h1>
      <div>
        <h2>Portfolio</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, facere?
        </p>
        <a href="https://github.com/erax83/portfolio" target="_blank"
          >Visit Github repository</a
        >
      </div>
      <br />
      <div>
        <h2>Local Weather Report</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
          ratione.
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
        <h2>Our Recepies</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          enim?
        </p>

        <a class="project-link" href="https://portfolio-our-recepies.herokuapp.com/" target="_blank"
          >Visit webpage</a
        >

        <br />
        <a
          href="https://github.com/erax83/portfolio-our-recepies"
          target="_blank"
          >Visit Github repository</a
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

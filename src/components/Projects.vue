<template>
  <div class="project-component">
    <div class="lang-swe" v-if="this.$store.state.swedish == true">
      <h1>Projekt</h1>
      <div>
        <h2>Portfolio</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, facere?
        </p>
      </div>
      <div>
        <h2>Local Weather Report</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
          ratione.
        </p>
        <p>Länk: www...</p>
      </div>
      <div>
        <h2>???</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          enim?
        </p>
        <p>Länk: www...</p>
      </div>
    </div>
    <div class="lang-eng" v-if="this.$store.state.swedish == false">
      <h1>Projects</h1>
      <div>
        <h2>Portfolio</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, facere?
        </p>
      </div>
      <div>
        <h2>Local Weather Report</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
          ratione.
        </p>
      </div>
      <div>
        <h2>???</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          enim?
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
};
</script>

<style scoped>
/* .card {
  box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 2px 16px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
} */
</style>

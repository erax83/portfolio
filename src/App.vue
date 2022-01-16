<template>
  <div id="app">
    <nav id="side-nav">
      <div id="portfolio-heading">
        <h1>PORTFOLIO</h1>
        <h2>Erik AXelsson</h2>
      </div>
      <div id="nav-container">
        <a href="#about-me">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
    <main id="section-container"></main>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

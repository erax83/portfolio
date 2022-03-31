<!-- Introduction text and modal picture -->
<template>
  <div class="about-component">
    <div class="lang-swe" v-if="this.$store.state.swedish == true">
      <h1>Om mig</h1>
      <p>
        Hej, jag heter Erik Axelsson och jag examinerade sommaren 2021 från
        utbildningen Fullstack Webbutvecklare på Chas Academy i Stockholm. Den
        här portfolion är tänkt att på ett enkelt vis redovisa för mina
        kunskaper i olika typer av programmeringstekniker och design.
      </p>
      <br />
      <p>Hälsningar</p>
    </div>
    <div class="lang-eng" v-if="this.$store.state.swedish == false">
      <h1>About me</h1>
      <p>
        Hello, my name is Erik Axelsson and I graduated in the summer of 2021
        from the education Fullstack Web Developer at Chas Academy in Stockholm.
        This portfolio is meant to account for my knowledge of different types
        of programming techniques and design.
      </p>
      <br />
      <p>Regards</p>
    </div>
    <div id="name-and-pic">
      <img
        id="small-portrait"
        v-if="!showModal"
        @click="showModal = true"
        src="@/assets/bildblocket.jpg"
        alt="me"
      />
      <p>Erik</p>
    </div>

    <div class="modal-vue">
      <div class="overlay" v-if="showModal" @click="showModal = false"></div>
      <!-- modal -->
      <div class="modal" v-if="showModal">
        <img
          class="modal-img"
          @click="showModal = false"
          src="@/assets/bildblocket.jpg"
          alt="me"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style scoped>
#name-and-pic {
  line-height: 0em;
}

#small-portrait {
  width: 75px;
  border-radius: 0.3em;
  align-content: center;
}

#small-portrait:hover {
  cursor: pointer;
}

.small-image {
  width: 100px;
}

.modal-img {
  position: fixed;
  z-index: 9999;
  top: 15%;
  left: 30%;
  width: 300px;
  border-radius: 0.3em;
}

.overlay {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

@media only screen and (max-width: 600px) {
  .modal-img {
    width: 200px;
  }
}

@media only screen and (max-width: 450px) {
  .modal-img {
    width: 150px;
  }
}
</style>

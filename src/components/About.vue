<template>
  <div class="about-component">
    <div class="lang-swe" v-if="this.$store.state.swedish == true">
      <h1>Om mig</h1>
      <p>
        Sommaren 2021 gick jag ut en två-årig IT-utbildning(Fullstack
        Webutvecklare) på Chas Academy i Stockholm. Under utbildningen har jag
        studerat front- och backendprogrammering, programmeringsmetodik,
        projektmetodik samt UX och Design. Utöver HTML och CSS har det
        huvudsakliga fokuset legat på Javascript, inklusive Node och dess olika
        ramverk. Vue har blivit det ramverk som jag försökt specialisera mig
        inom efter utbildningens slut. Vi använde oss även av PHP och Wordpress.
        Och när jag förberedde mig för utbildningen har jag även provar på C#,
        Java och Python.
      </p>
      <p>Hälsningar</p>
    </div>
    <div class="lang-eng" v-if="this.$store.state.swedish == false">
      <h1>About me</h1>
      <p>
        In the summer of 2021 I completed a two-year IT education (Fullstack Web
        developer) at Chas Academy in Stockholm. During the training I have
        studied front and backend programming, programming methodology, project
        methodology and UX and Design. In addition to HTML and CSS, the main
        focus has been on Javascript, including Node and its various frameworks.
        Vue has become the framework I have tried to specialize in after the end
        of the education. We also used PHP and Wordpress. And when I prepared
        for the training I have also tried on C #, Java and Python.
      </p>
      <p>Regards</p>
    </div>
    <div id="name-and-pic">
      <img id="small-portrait" v-if="!showModal" @click="showModal = true" src="@/assets/bildblocket.jpg" alt="me">
      <p>Erik</p>

    </div>

    <div class="modal-vue">
      <!-- button show -->
      <!-- <button v-if="!showModal" @click="showModal = true">show</button> -->
      <!-- <img class="small-img" v-if="!showModal" @click="showModal = true" src="@/assets/bildblocket.jpg" alt="me"> -->
      <!-- overlay -->
      <div class="overlay" v-if="showModal" @click="showModal = false"></div>
      <!-- modal -->
      <div class="modal" v-if="showModal">
        <!-- <button class="close" @click="showModal = false">x</button> -->
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
/* h1 {
  font-size: 5em;;
} */
 
#name-and-pic {
  line-height: 0em;
}

#small-portrait {
  width: 75px;
  border-radius: 0.3em;
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
</style>

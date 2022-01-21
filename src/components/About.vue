<template>
  <div class="about-component">
    <h1>Om mig</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odio, nihil
      voluptatum maxime nam a officiis officia minus cumque ab enim neque
      asperiores impedit nemo repellat repudiandae. Facere, ipsam? Magni laborum
      ipsa eligendi iusto non illo unde voluptatibus molestiae quos!
    </p>
    <div class="modal-vue">
      <!-- button show -->
      <button v-if="!showModal" @click="showModal = true">show</button>
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
.small-image {
  width: 100px;
}

.modal-img {
  position: fixed;
  z-index: 9999;
  top: 15%;
  left: 30%;
  width: 300px;
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

<template>
  <div class="contact-component">
    <div class="lang-swe" v-if="this.$store.state.swedish == true">
      <h1>Kontakt</h1>
      <p>Mobiltelefon: 073 - 951 78 83</p>
      <p>E-post: e.axelsson@tutanota.com</p>
      <p>linkedIn: ...</p>
      <br />
      <p>Adress:</p>
      <p>Erik Axelsson</p>
      <p>Östra Madvägen 15</p>
      <p>226 50 Lund</p>
    </div>
    <div class="lang-eng" v-if="this.$store.state.swedish == false">
      <h1>Contact</h1>
      <p>Mobile phone: 073 - 951 78 83</p>
      <p>E-mail: e.axelsson@tutanota.com</p>
      <p>linkedIn: ...</p>
      <br />
      <p>Address:</p>
      <p>Erik Axelsson</p>
      <p>Östra Madvägen 15</p>
      <p>226 50 Lund</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
.contact-component {
  color: hsl(20, 100%, 70%);
}
</style>

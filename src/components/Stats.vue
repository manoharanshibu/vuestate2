<template>
  <div class="hello">
    There are total {{ getCount }} links
    <button @click="removeAllLinks()">Remove All</button>
    <span id="message" ref="message">Message {{ msg }}</span>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Stats",
  data() {
    return { name: "Shibu" };
  },
  props: ["msg"],
  computed: {
    ...mapGetters(["getCount"])
  },
  methods: {
    ...mapActions(["removeAll"]),
    removeAllLinks() {
      this.removeAll();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

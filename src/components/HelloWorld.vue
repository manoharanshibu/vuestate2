<template>
  <div class="hello">
    <div class="left">
      {{ title }} {{ titleData }}
      <form @submit.prevent="onAdd">
        <input class="link-input" type="text" placeholder="Add a Link" v-model="newLink">
      </form>
      <ul>
        <li v-for="(link, index) in links" v-bind:key="index">
          {{ link }}
          <button @click="onRemove(index)">Remove</button>
        </li>
      </ul>
    </div>
    <div class="right">
      <Stats msg="how are you?..."/>
    </div>
    <MyCard />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Stats from "@/components/Stats";
import MyCard from '@/components/CustomComponent'

export default {
  name: "HelloWorld",
  data() {
    return { titleData: "This is a custom title", newLink: "" };
  },
  computed: {
    ...mapState(["title", "links"])
  },
  components: {
    Stats,
    MyCard
  },
  methods: {
    ...mapMutations(["ADD_LINK", "REMOVE_LINK"]),
    onRemove: function(index) {
      this.REMOVE_LINK(index);
    },
    onAdd: function() {
      this.ADD_LINK(this.newLink);
      this.newLink = "";
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

.vte__cool-card {
  height: 20vh;
  width: 40vw;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0px 1px 1px #000;
}
</style>

<template>
  <div id="app">
    <Header/>
    <Navigation/>
    <router-view/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import {mapActions} from "vuex";

export default {
  components: {Navigation, Header},
  methods: {
    ...mapActions({
      fetchUsers: 'userModule/fetchUsers'
    })
  },
  mounted() {
    this.fetchUsers();
  }
}
</script>

<style>
body {
  background-color: teal;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: aliceblue;
  max-width: 1140px;
  padding: 0 15px;
  margin: 0 auto;
}
</style>
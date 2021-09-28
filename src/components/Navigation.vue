<template>
  <nav id="nav">
    <router-link to="/" exact>Home</router-link>
    |
    <router-link to="/dashboard" exact>Dashboard</router-link>
  </nav>
</template>

<script>
export default {
  name: "Navigation"
}
</script>

<style scoped>
nav {
  padding: 30px;
}
nav,
nav > * {
  list-style: none;
  text-decoration: none;
  color: aliceblue;
  font-size: 1.25rem;
  font-weight: bold;
}
.router-link-active {
  color: #6eb1e1;
}
</style>
<template>
  <div class="list">
    <h3>Users' List</h3>
    <Item
        v-for="user in usersList"
        :user="user"
    />
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import Item from "@/components/Item";

export default {
  components: {Item},
  computed: {
    ...mapGetters({
      usersList: 'userModule/getUsersList'
    })
  }
}
</script>

<style scoped>
h3 {
  text-align: center;
  color: burlywood;
}

ul {
  margin-top: 0;
}

li {
  list-style-type: none;
}

.list {
  margin: 0;
  padding: 0;
  text-align: left;
  list-style-type: none;
}
</style>
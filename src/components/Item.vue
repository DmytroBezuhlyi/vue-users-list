<template>
  <div class="user">
        <span class="num">{{ user.id }}.
        </span><span class="name">{{ user.name }}</span>
    |
    <span class="email">{{ user.email }}</span>
    |
    <button class="address"
            @click.prevent="isShow = !isShow"
            :class="{isShow: isShow}"
    >Address</button>
    <ul v-if="isShow">
      <li
          v-for="address in user.address"
          :key="address.geo"
      >
        * {{ address }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Item",
  data() {
    return {
      isShow: false
    }
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
button.isShow {
  opacity: .8;
  box-shadow: 1px 1px 5px rgba(0,0,0,0.75);
}

li {
  list-style-type: none;
}

.list > .user {
  padding-top: 1.5rem;
}

.user {
  background: #078e8e;
  padding: 20px;
  border-radius: 7px;
  margin: 1rem;
}
</style>
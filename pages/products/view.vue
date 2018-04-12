<template>
  <div>
    <h1>View Product {{ product._id }}</h1>
    <p>{{ product.title }}</p>
    <p>Price: {{ product.price }}</p>
    <br>
    <p>This is a deeper route</p>
    <p>This also demonstrates retrieving information from the Vuex store</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  beforeCreate () {
    // reset store to demonstrate the delay
    this.$store.commit('product/reset')
  },
  created () {
    this.$store.dispatch('product/load')
  },
  computed: {
    ...mapState(['product'])
  }
}
</script>

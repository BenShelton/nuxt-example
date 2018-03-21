<template>
  <div>
    <h1>View Product {{ product._id }}</h1>
    <p>{{ product.title }}</p>
    <p>Price: {{ product.price }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  fetch ({ store }) {
    return store.dispatch('product/load')
  },
  computed: {
    ...mapState(['product'])
  }
}
</script>

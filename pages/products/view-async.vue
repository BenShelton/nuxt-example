<template>
  <div>
    <h1>View Product {{ product._id }}</h1>
    <p>{{ product.title }}</p>
    <p>Price: {{ product.price }}</p>
    <br>
    <p>This is an example of using <code>fetch</code> to make sure the store is updated before showing the component</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  fetch ({ store }) {
    return store.dispatch('product/loadAsync')
  },
  computed: {
    ...mapState(['product'])
  }
}
</script>

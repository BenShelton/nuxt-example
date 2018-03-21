<template>
  <h1>Product {{ $route.params.product_id }}</h1>
</template>

<script>
export default {
  validate ({ params }) {
    // Must be a number
    return /^\d+$/.test(params.product_id)
  }
}
</script>

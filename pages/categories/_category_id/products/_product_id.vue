<template>
  <div>
    <h1>Product {{ $route.params.product_id }}</h1>
    <p>This is a nested route of the more complex route</p>
    <p>Changing the final param of the route to a non-number will also cause this component to throw a 404 error</p>
  </div>
</template>

<script>
export default {
  validate ({ params }) {
    // Must be a number
    return /^\d+$/.test(params.product_id)
  }
}
</script>

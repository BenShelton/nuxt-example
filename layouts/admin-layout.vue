<template>
  <div>
    <button @click="$router.go(-1)">Go Back</button>
    <br>
    <h1>Admin Layout</h1>
    <p>This is a layout which will only show if specified by the page component</p>
    <br>
    <nuxt />
  </div>
</template>

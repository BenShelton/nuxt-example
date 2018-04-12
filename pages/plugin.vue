<template>
  <div>
    <h1>Plugin Example</h1>
    <p><code>vue-notifications</code> is available anywhere, click the button below to show an alert</p>
    <button @click="showNotification">Show Notification</button>
  </div>
</template>

<script>
export default {
  notifications: {
    showNotification: {
      title: 'Demo Notification',
      message: 'This is an example of a plugin being registered',
      type: 'success'
    }
  }
}
</script>

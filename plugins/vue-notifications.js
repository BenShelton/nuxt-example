import Vue from 'vue'
import VueNotifications from 'vue-notifications'

function showAlert ({ title, message }) {
  alert(`${title}
  
${message}`)
}

Vue.use(VueNotifications, {
  success: showAlert
})

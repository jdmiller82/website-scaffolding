Vue.component('my-page', {
  template: '#my-page'
})

new Vue({
  el: '#q-app',
  data: function () {
    return {
      version: Quasar.version,
      drawerState: true
    }
  },
  methods: {
    launch: function (url) {
      Quasar.utils.openURL(url)
    }
  }
})

<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus" >
@import '~variables';

body {
  background: linear-gradient(202deg, #a1c4fd, #c2e9fb);
}
</style>

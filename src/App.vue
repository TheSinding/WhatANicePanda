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
  background: linear-gradient(top, #56CCF2, #2F80ED);
}
</style>

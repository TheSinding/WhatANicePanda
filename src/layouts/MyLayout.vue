<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary">
        <q-toolbar-title>
          Randomly nice whale
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-layout-footer class="q-pa-md">
      <q-icon name="fas fa-child" color="white" size="32px"/>
      <p class="absolute-center text-white q-headline" >Press <b>spacebar</b> for a new randomly nice thing <q-icon color="red" name="fas fa-heart" /> </p>
      <q-icon name="fas fa-plus float-right" color="white" size="32px"/>

    </q-layout-footer>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>

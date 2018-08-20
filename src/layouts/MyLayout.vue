<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header class="q-pt-md">
         <p color="white" class="text-center text-white q-display-3 font-logo">Randomly nice Panda <q-icon name="fas fa-heart" color="red"/></p>
    </q-layout-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-layout-footer class="q-pa-md">
      <q-icon name="fas fa-child cursor-pointer" color="dark" size="32px">
        <q-tooltip anchor="center right" self="center left">
          About Randomly Nice
        </q-tooltip>
      </q-icon>
      <p class="absolute-center text-dark q-headline font-text" >Press <b>spacebar</b> for a new randomly nice thing <q-icon color="red" name="fas fa-heart" /> </p>
      <q-icon @click.native="$refs.teachingModal.show()" name="fas fa-plus float-right cursor-pointer" color="dark" size="32px">
        <q-tooltip anchor="center left" self="center right">
          Teach me more sentences! <q-icon color="red" name="fas fa-heart"/>
        </q-tooltip>
      </q-icon>
    </q-layout-footer>
    <teach ref="teachingModal" />
  </q-layout>
</template>

<script>
import { openURL, QTooltip } from 'quasar'
import Teach from '../components/Teach'

export default {
  name: 'MyLayout',
  components: {
    QTooltip,
    Teach
  },
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL,
    test() {
      console.log('test');
    }
  }
}
</script>

<style lang="stylus" scoped>
.fix {
  margin: auto 0px;
}
</style>

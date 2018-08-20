<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header class="q-pt-md">
      <div class="flex flex-center">
        <div class="row text-white full-width ">
          <div class="col-2 text-center q-pt-md">
            <span class="q-title font-text"><b>{{ counters.viewed }}</b> People got cheered up! </span>
          </div>
          <div class="col-8 text-center">
            <span color="white" class="text-white text-center q-display-3 font-logo">What a nice Panda! <q-icon name="fas fa-heart" color="red"/></span>
          </div>
          <div class="col-2 q-pt-md">
            <!-- <span class="q-title font-text">Hey</span> -->
          </div>
        </div>
      </div>
    </q-layout-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-layout-footer class="q-pa-md">
      <q-icon name="fas fa-child cursor-pointer" color="dark" size="32px" @click.native="$refs.aboutmeDialog.show()">
        <q-tooltip anchor="center right" self="center left">
          About What a nice Panda!
        </q-tooltip>
      </q-icon>
      <p class="absolute-center text-dark q-headline font-text" >
        Press <b>spacebar</b> for a new nice thing <q-icon color="red" name="fas fa-heart" />
      </p>
      <q-icon @click.native="$refs.teachingModal.show()" name="fas fa-plus float-right cursor-pointer" color="dark" size="32px">
        <q-tooltip anchor="center left" self="center right">
          Teach me more sentences! <q-icon color="red" name="fas fa-heart"/>
        </q-tooltip>
      </q-icon>
    </q-layout-footer>
    <teach ref="teachingModal" />
    <about-me ref="aboutmeDialog" />
  </q-layout>
</template>

<script>
import { openURL, QTooltip } from 'quasar'
import Teach from '../components/Teach'
import AboutMe from '../components/AboutMe'
import { sentenceService, counterService } from '../client/feathers.js'

export default {
  name: 'MyLayout',
  components: {
    QTooltip,
    Teach,
    AboutMe
  },
  created() {
    this.getCounters();
  },
  mounted() {
    sentenceService.on('counterChanged', message => {
      this.counters.sentences = message.data.currentCount;
    })
    sentenceService.on('viewed', message => {
      this.counters.viewed = message.data.currentCount;
    })
  },
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      counters: {
        sentences: 0,
        viewed: 0
      }
    }
  },
  methods: {
    openURL,
    async getCounters () {
      const data = await counterService.find();
      this.counters = data.counters
    }
  }
}
</script>

<style lang="stylus" scoped>
.fix {
  margin: auto 0px;
}
</style>

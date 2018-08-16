<template>
  <q-page class="flex flex-center">
    <!-- <div class="row">
      <q-btn @click="$refs.teachingModal.show()">Teach me more!</q-btn>
    </div> -->
    <div class="row">
      <h2 class="text-white">{{ sentence }}</h2>
    </div>
    <!-- <teach ref="teachingModal" /> -->
  </q-page>
</template>

<style>
</style>

<script>
import Teach from '../components/Teach'
import { QIcon } from 'quasar';
import { sentenceService, analyzeService, contentTypes } from '../client/feathers.js'
export default {
  name: 'PageIndex',
  components: {
    Teach,
    QIcon
  },
  created () {
    this.getRandomSentence();
  },
  mounted () {
    const SPACE_CHAR_CODE = 32;
    let timeThreshold = 600; // ms
    let timePressed = Date.now();
    window.addEventListener('keypress', (e) => {
      if (e.charCode === SPACE_CHAR_CODE && Date.now() - timePressed > timeThreshold) {
        this.getRandomSentence();
        timePressed = Date.now();
      }
    });
  },
  data () {
    return {
      sentence: ''
    }
  },
  methods: {
    async addSentence (data) {
      const result = await analyzeService.create({
        metadata: { name: data.name, createdAt: Date.now() },
        document: { type: contentTypes.TEXT, content: data.sentence }
      });

      console.log(result);
    },
    async getRandomSentence () {
      const result = await sentenceService.find({ query: { random: true } });
      this.sentence = result.data.sentence
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~variables';

.bottom {
  bottom: 0px;
}

.header {
  min-height: 150px;
  width: 100%;
  color: white;
  padding: 8px;
}

.container {
  padding: 8px;
}

.title {
  font-size: 40px;
  font-weight: bold;
}
</style>

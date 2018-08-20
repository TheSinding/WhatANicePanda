<template>
  <q-page class="flex flex-center">
    <div class="row">
      <div class="row col-12">
        <div class="col-12 row justify-center">
          <transition
            appear
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
          >
            <h4 v-if="showSentence" class="font-sentence text-center speech-bubble q-pa-lg">{{ sentence }}</h4>
          </transition>
        </div>
        <div class="col-12 row justify-center">
          <div class="panda" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import { QIcon, QTooltip } from 'quasar';
import SocialSharing from 'vue-social-sharing';
import { sentenceService, counterService } from '../client/feathers.js'
export default {
  name: 'PageIndex',
  components: {
    QIcon,
    QTooltip,
    SocialSharing
  },
  created () {
    this.getRandomSentence();
    this.getCounters();
  },
  mounted () {
    sentenceService.on('counterChanged', message => {
      this.counters.sentences = message.data.currentCount;
    })
    sentenceService.on('viewed', message => {
      this.counters.viewed = message.data.currentCount;
    })

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
      sentence: '',
      showSentence: false,
      counters: {
        sentences: 0,
        viewed: 0
      }
    }
  },
  methods: {
    async getRandomSentence () {
      this.showSentence = false;
      try {
        const result = await sentenceService.find({ query: { random: true } });
        this.sentence = result.sentence;
      } catch (error) {
        console.log(error);
      }
      this.showSentence = true;
    },
    async getCounters () {
      const data = await counterService.find();
      this.counters = data.counters
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~variables';

bubbleColor = #ffffff;

.panda {
  position: relative;
  background: url('../assets/panda/panda.svg');
  background-size: 100%, 100%;
  min-height: 10vh;
  min-width: 10vh;
  width: 35vh;
  height: 35vh;
}

.panda:before {
  content: '';
  position: absolute;
  bottom: 3%;
  z-index: -1;
  border-radius: 50%;
  width: 75%;
  left: ((100 - @width) / 2)%;
  height: 12px;
  background-color: #333333;
  border-top-color: bubbleColor;
}

.heart {
  display: block;
  background-size: 512px 512px;
  background: url('../assets/panda/heart.svg');
}

.speech-bubble {
  position: relative;
  background: bubbleColor;
  border-radius: 4em / 8em;
  max-width: 35vw;
}

.speech-bubble:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 0;
  border: 20px solid transparent;
  border-top-color: bubbleColor;
  border-bottom: 0;
  border-left: 0;
  margin-left: -10px;
  margin-bottom: -20px;
}
</style>

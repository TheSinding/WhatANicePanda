<template>
  <q-modal v-model="open"  :content-css="{minWidth: '50vw', minHeight: '60vh'}">
    <div class="header">
      <p class="title">Teach me more nice things to say</p>
    </div>
    <div class="q-pa-md">
    <div>
      <q-field
        icon="fas fa-heart"
        label="Your name"
        :error="nameHasError"
        error-label="I need a name! :)"
      >
        <q-input v-model="name" />
      </q-field>
      <q-field
        icon="fas fa-comment-dots"
        label="Your sentence"
        :error="sentenceHasError"
        :error-label="sentenceError"
        >
        <q-input v-model="sentence"></q-input>

      </q-field>
    </div>
      <q-btn color="primary" @click="teach">Here you go!</q-btn>

      <q-btn
        @click="open = false"
        label="Close"
      />
    </div>
  </q-modal>
</template>

<script>
import { analyzeService, contentTypes } from '../client/feathers.js'

export default {
  // name: 'ComponentName',
  data () {
    return {
      name: '',
      sentence: '',
      open: false,
      nameHasError: false,
      sentenceHasError: false,
      sentenceError: 'Now that wasn\'t very nice.. :/'
    }
  },
  methods: {
    teach() {
      if (this.name === '') {
        this.nameHasError = true;
        return;
      }
      if (this.sentence === '') {
        this.sentenceHasError = true;
        this.sentenceError = 'I need a sentence <3'
        return;
      }
      this.addSentence({ name: this.name, sentence: this.sentence });
    },
    async addSentence (data) {
      try {
        await analyzeService.create({
          metadata: { name: data.name, createdAt: Date.now() },
          document: { type: contentTypes.TEXT, content: data.sentence }
        });
        this.open = false;
      } catch (error) {
        console.log(error);
        this.sentenceHasError = true;
      }
    },
    show() {
      console.log('this is awesome');
      this.open = true;
    }
  },
  watch: {
    open() {
      if (open) {
        window.removeEventListener('keypress');
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~variables';

.header {
  min-height: 150px;
  linear_gradient(top, #D3CCE3, #E9E4F0);
  width: 100%;
  color: white;
  padding: 8px;
}

.container {
  padding: 8px;
}

.title {
  font-size: 40px;
  text-align: center;
  font-family: 'Fredoka One', cursive;
}
</style>

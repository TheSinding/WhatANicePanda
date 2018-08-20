<template>
  <q-modal v-model="customModalModel" :content-css="{maxWidth: '50vw', maxHeight: '60vh'}">
    <q-modal-layout>
      <q-toolbar slot="header">
        <q-toolbar-title>
          <h4>About <span class="font-logo">
            What a nice Panda!
            <q-icon name="fas fa-heart" color="red" />
          </span>
          </h4>
        </q-toolbar-title>
      </q-toolbar>

    <div class="layout-padding font-text">
      <h6 class="">Why?</h6>
      <span class="">
        <p>
          The internet is often a grim, and very negative place.
            <br />It's full of <strong>bullies<q-tooltip>Fuck em' right?!</q-tooltip></strong>, <strong>Trump voters<q-tooltip>Covfefe</q-tooltip></strong> and <strong>vegans<q-tooltip><q-icon name="fas fa-poo" color="brown"/></q-tooltip></strong>.
        </p>
        <p>
            So I created this project to cheer you up, for your daily travel's on the World Wide Web.
            <br />When ever you seen enough 
            <strong>/r/spacedicks
              <q-tooltip>Reddit <q-icon name="fab fa-reddit" color="orange" /></q-tooltip>
              </strong>, 
              too much <strong>/b/<q-tooltip>4chan</q-tooltip></strong>, or just too much <strong>Fox news<q-tooltip>It's a comedy show...</q-tooltip></strong>, you come here!
            <br />
            <br />Have a sweet little panda tell you <strong>nice things <q-icon name="fas fa-heart" color="red" />! </strong>
        </p>
      </span>
      <h6 class="">Who made this?</h6>
      <p>I'm Simon Sinding, a Danish developer living in Odense.
      </p>
        <span class="">
        <q-icon @click.native="openURL(linkedinUrl)" 
          name="fab fa-linkedin" 
          size="32px" 
          class="q-pr-sm cursor-pointer" 
          style="color: #0077B5"
        >
          <q-tooltip>My Linkedin</q-tooltip>
        </q-icon> 
        <q-icon
          @click.native="openURL(githubUrl)"
          name="fab fa-github" 
          size="32px"
          class="cursor-pointer"
        >
          <q-tooltip>My Github</q-tooltip>
        </q-icon>
        </span>
    </div>
    </q-modal-layout>

    <!-- This or use "message" prop on <q-modal> -->

  </q-modal>
</template>

<script>
import { QModal, QModalLayout, QTooltip, openURL } from 'quasar'
export default {
  components: {
    QModal, QModalLayout, QTooltip
  },
  data () {
    return {
      customModalModel: false,
      linkedinUrl: 'https://www.linkedin.com/in/simon-sinding-75b15b80/',
      githubUrl: 'https://www.github.com/TheSinding'
    }
  },
  methods: {
    show() {
      this.customDialogModel = true;
    },
    // custom handler
    openURL,
  }
}
</script>

<style lang="stylus" scoped>
p {
  font-size: 1em;
  line-height: 1.25em;
  margin: 1.25em 0;
  text-align: justify;
}

h6, h5 {
  margin-top: 0;
  margin-bottom: 15px;
}

h4 {
  margin: 25px 0;
}
</style>

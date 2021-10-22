<template>
  <v-img
    dark
    src="https://pixabay.com/get/gdd3ca45e98e77549920a7164a7959d9ad435bd1a308ad1b0e0068c70df115331e3cee985ce701bd85dd1d57c42bc994a1de96a003ce2570be6481d2cb4f0e294_1280.jpg"
  >
    <v-theme-provider dark>
      <v-container fill-height>
        <v-row
          align="center"
          class="white--text mx-auto"
          justify="center"
        >
          <v-col
            class="white--text text-center"
            cols="12"
            tag="h1"
          >
            <span
              :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
              class="font-weight-light"
            >
              WELCOME TO
            </span>
            <br>
            <span
              :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
              class="font-weight-black"
            >
              NGOY
            </span>
          </v-col>
          <nuxt-link
            to="/Homepage"
            tag="v-tab"
          >
            <v-btn
              class="align-self-end"
              fab
              outlined
            >
              <v-icon>mdi-chevron-double-right</v-icon>
            </v-btn>
          </nuxt-link>
        </v-row>
      </v-container>
    </v-theme-provider>
  </v-img>
</template>

<script>
export default {
  layout: 'LayoutsWhite'
}
</script>

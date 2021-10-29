<template>
  <v-img
    dark
    src="https://cdn.pixabay.com/photo/2016/03/05/21/59/barbecue-1239146_960_720.jpg"
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

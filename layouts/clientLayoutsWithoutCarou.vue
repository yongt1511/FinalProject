<template>
  <v-app>
    <div v-if="token === undefined">
      <HearderNot />
    </div>
    <div v-else>
      <HeaderClient />
    </div>
    <nuxt />
    <FooterClient />
  </v-app>
</template>

<script>
import Cookies from 'js-cookie'
import HeaderClient from '~/components/Header/Header'
import FooterClient from '~/components/Footer/FooterClient'
import HearderNot from '~/components/Header/HeaderNot'
export default {
  name: 'ClientLayouts',
  components: { HearderNot, FooterClient, HeaderClient },
  data () {
    return {
      token: ''
    }
  },
  created () {
    this.getToken()
  },
  methods: {
    getToken () {
      this.token = Cookies.get('token')
    }
  }
}
</script>

<style scoped>
</style>

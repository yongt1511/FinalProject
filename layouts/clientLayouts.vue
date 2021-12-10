<template>
  <v-app>
    <div v-if="this.token === undefined">
      <HearderNot />
    </div>
    <div v-else>
      <HeaderClient />
    </div>
    <Carousel />
    <nuxt />
    <FooterClient />
  </v-app>
</template>

<script>
import Cookies from 'js-cookie'
import HeaderClient from '~/components/Header/Header'
import FooterClient from '~/components/Footer/FooterClient'
import Carousel from '~/components/Carousel/Carousel'
import HearderNot from '~/components/Header/HeaderNot'
export default {
  name: 'ClientLayouts',
  components: { HearderNot, Carousel, FooterClient, HeaderClient },
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

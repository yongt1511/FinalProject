<template>
  <v-app>
    <div v-if="$store.state.token === null">
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
import HeaderClient from '~/components/Header/Header'
import FooterClient from '~/components/Footer/FooterClient'
import Carousel from '~/components/Carousel/Carousel'
import HearderNot from '~/components/Header/HeaderNot'
export default {
  name: 'ClientLayouts',
  components: { HearderNot, Carousel, FooterClient, HeaderClient }
}
</script>

<style scoped>

</style>

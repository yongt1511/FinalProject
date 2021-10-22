<template>
  <v-app
    id="inspire"
    color="red"
  >
    <HeaderClient />
    <nuxt />
    <footer-client />
  </v-app>
</template>

<script>
import FooterClient from '~/components/Footer/FooterClient'
import HeaderClient from '~/components/Header/Header'
export default {
  name: 'ClientLayoutsWithoutCarou',
  components: { HeaderClient, FooterClient }
}
</script>

<style scoped>

</style>

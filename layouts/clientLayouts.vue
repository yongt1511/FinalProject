<template>
  <div>
    <HeaderClient />
    <Carousel/>
    <nuxt />
    <FooterClient/>
  </div>
</template>

<script>
import HeaderClient from '~/components/Header/Header'
import FooterClient from '~/components/Footer/FooterClient'
import Carousel from '~/components/Carousel/Carousel'
export default {
  name: 'ClientLayouts',
  components: { Carousel, FooterClient, HeaderClient }
}
</script>

<style scoped>

</style>

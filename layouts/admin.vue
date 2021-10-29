<template>
  <v-app light>
    <HeaderAdmin />
    <v-main>
      <v-img />
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import HeaderAdmin from '~/components/Header/HeaderAdmin/HeaderAdmin'
export default {
  components: { HeaderAdmin },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Ngoy'
    }
  }
}
</script>

<style>
  .v-list{
    padding: 0px;
  }

</style>

<template>
  <v-app light>
    <v-img
      src="https://cdn.pixabay.com/photo/2021/02/26/16/29/error-404-6052476_960_720.png"
    />
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
      ],
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

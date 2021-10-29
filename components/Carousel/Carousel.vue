<template>
  <v-carousel hide-delimiters cycle :show-arrows="false">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'Carousel',
  data () {
    return {
      items: [
        {
          src: 'https://congthuong.vn/stores/news_dataimages/nguyenly/112020/20/11/in_article/2037_hoa-qua.jpg?rt=20201120112038'
        },
        {
          src: 'https://lacdavang.com/wp-content/uploads/2017/04/HERO_Worlds_Best_Soda_Bundaberg_shutterstock_679079920.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>

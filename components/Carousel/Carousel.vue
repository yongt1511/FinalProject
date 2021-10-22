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
          src: 'https://pixabay.com/get/g1bea9b2bfd6744d048ffd5d51af0782a7638fcd1e188d485b6e30cf50791060081806461cce2cb443be804d1bb0aafcec5004430c8ca6526f0fb1410bc95496b_1920.jpg'
        },
        {
          src: 'https://pixabay.com/get/g28689a4ff369a8ff96777affdef6529e0edb11b782493b83889ccbe0bda00a94934b0237f9f5871cc0cdb144a3959d414d8d1efc4f3fb9415e89d93f7570e207_1920.jpg'
        },
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

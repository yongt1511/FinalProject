<template>
  <v-app>
    <v-parallax
      :src="dataCategory.image"
    />
    <v-container>
      <br>
      <v-col>
        <div class="text-h4 title">
          <strong>{{ dataCategory.name }}</strong>
        </div>
      </v-col>
      <v-row>
        <v-col
          v-for="(product) in dataProduct"
          :id="product.id"
          :key="product.id"
          cols="3"
        >
          <v-hover
            v-slot="{ hover }"
            open-delay="200"
          >
            <v-card
              :elevation="hover ? 16 : 2"
              :class="{ 'on-hover': hover }"
              class="ma-4 "
              height="501"
              width="285"
              @click="productOnclick(product.id)"
            >
              <div class="card shadow-sm">
                <v-img
                  height="285px"
                  width="285px"
                  :src="product.image"
                />
                <div class="card-body">
                  <p class="card-text">
                    {{ product.name }}
                  </p>
                  <p class="card-price">
                    {{ product.price }} đ
                  </p>
                  <div class="d-flex justify-content-center align-items-center">
                    <v-btn outlined color="red">
                      Thêm vào giỏ hàng
                    </v-btn>
                  </div>
                </div>
              </div>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Index',
  layout: 'clientLayoutsWithoutCarou',
  data () {
    return {
      idCate: this.$route.params.id,
      dataCategory: [],
      dataProduct: []
    }
  },
  head () {
    return {
      title: `${this.dataCategory.name}`
    }
  },
  watch: {
    '$route' (to) {
      this.idCate = to.params.id
    }
  },
  created () {
    this.GetDetailCategory()
    this.getProductbyCategory()
  },
  methods: {
    productOnclick (id) {
      this.$router.push({
        path: `/product/${id}`,
        params: { id }
      })
    },
    GetDetailCategory () {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.baseURL}/category/${this.idCate - 1}.json`, {})
          .then(({ data }) => {
            this.dataCategory = data
            resolve()
          }).catch(error => reject(error))
      })
    },
    getProductbyCategory () {
      this.$axios.$get(`${process.env.baseURL}/product.json`)
        .then((response) => {
          const productsArray = []
          for (const key in response) {
            productsArray.push({
              ...response[key],
              id: key
            })
          }
          const id = Number(this.idCate)
          this.dataProduct = productsArray.filter(function (item) {
            return item.category === id
          })
        })
    }
  }
}
</script>

<style scoped>
@import url('../../../assets/css/app.css') ;
.title {
  text-align: center;
  display: inherit;
  font-size: 36px !important;
}
</style>

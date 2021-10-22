<template>
  <v-app>
    <v-parallax
      :src="dataCategory.image"
    />
    <v-container>
      <br>
      <v-col>
        <v-title class="text-h4 title">
          <strong>{{ dataCategory.name }}</strong>
        </v-title>
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
                  :src="product.image"
                >
                </v-img>
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
      id: this.$route.params.id,
      dataCategory: [],
      dataProduct: []
    }
  },
  watch: {
    '$route' (to) {
      this.id = to.params.id
    }
  },
  created () {
    this.GetDetailCategory()
    this.GetProduct()
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
        axios.get(`http://localhost:3004/category/${this.id}`)
          .then(({ data }) => {
            this.dataCategory = data
            console.log(this.dataCategory.name)
            resolve()
          }).catch(error => reject(error))
      })
    },
    GetProduct () {
      return new Promise((resolve, reject) => {
        axios.get(`http://localhost:3004/product/?category=${this.id}`)
          .then(({ data }) => {
            this.dataProduct = data
            console.log(this.dataProduct)
            resolve()
          }).catch(error => reject(error))
      })
    }
  }
}
</script>

<style scoped>
@import url('assets/css/app.css') ;
.title {
  text-align: center;
  display: inherit;
  font-size: 36px !important;
}
</style>

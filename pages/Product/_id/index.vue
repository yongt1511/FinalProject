<template>
  <v-app>
    <v-parallax height="1000" src="https://pixabay.com/get/g753cf20a556c354c92d29e31bf2ff4dc8ba7c22ed747b3a7c9c2b2cc1a3117106162c65ded3b4f6fee4f529b5e5811dc_1920.jpg">
      <v-container>
        <v-row no-gutters>
          <v-col
            cols="6"
            md="4"
          >
            <v-card
              class="pa-2"
              outlined
              tile
              min-height="650px"
            >
              <v-img
                :src="detailProduct.image"
              />
            </v-card>
          </v-col>
          <v-col
            cols="12"
            md="8"
            sm="6"
          >
            <v-card
              class="pa-2"
              outlined
              tile
              min-height="650px"
            >
              <div class="card-body  information-detail">
                <p class="card-text">
                  {{ detailProduct.name }}
                </p>
                <p class="card-price">
                  {{ detailProduct.price }}đ
                </p>
                <p class="detailtext">
                  {{ detailProduct.detail }}<br>
                  <span class="note-detail"> Lưu ý: <br>
                    - Hạn sử dụng thực tế quý khách vui lòng xem trên bao bì. <br>
                    - Hình sản phẩm chỉ mang tính chất minh họa, hình bao bì của sản phẩm tùy thời điểm sẽ khác so với thực
                    tế.</span>
                </p>
                <div class="d-flex justify-content-center align-items-center">
                  <v-btn @click="decrement">
                    <img src="../../../assets/images/cart-minus.svg" height="30px" width="30px">
                  </v-btn>
                  <v-btn disabled color="white">
                    {{ quantity }}
                  </v-btn>

                  <v-btn @click="increment">
                    <img src="../../../assets/images/cart-plus.svg" height="30px" width="30px">
                  </v-btn>
                  <v-btn outlined color="red" class="addcarta" @click="addToCart()">
                    Thêm vào giỏ hàng
                  </v-btn>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
  </v-app>
</template>

<script>
import axios from 'axios'
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Index',
  layout: 'clientLayoutsWithoutCarou',

  data () {
    return {
      detailProduct: {},
      id: this.$route.params.id
    }
  },
  watch: {
    '$route' (to) {
      this.id = to.params.id
    }
  },
  created () {
    this.GetDetailProduct()
  },
  computed: {
    ...mapGetters(['quantity'])
  },
  methods: {
    ...mapMutations(['increment', 'decrement']),
    GetDetailProduct () {
      return new Promise((resolve, reject) => {
        axios.get(`http://localhost:3004/product/${this.id}`)
          .then(({ data }) => {
            this.detailProduct = data
            resolve()
          }).catch(error => reject(error))
      })
    },
    addToCart () {
      this.$store.dispatch('addProductToCart', {
        product: this.detailProduct,
        quantity: this.quantity
      })
    }
  }
}
</script>

<style scoped>
@import url('assets/css/app.css') ;
.theme--light.v-btn.v-btn--disabled {
  color: black;
}
.theme--light.v-btn.v-btn--disabled.v-btn--has-bg {
  background-color: white !important;
}
.theme--light.v-btn {
  color: rgb(255 0 0 / 87%);
}
  .addcarta{
  }

</style>

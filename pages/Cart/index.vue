<template>
  <v-app>
    <v-parallax
      height="1000"
      src="https://pixabay.com/get/gf1be685a26dfdbfde948cd75b7b9704b14ac4b1a0cd0a2fc7cc15eee1579cd8c48911da6d3087aee0028b9b9855dd1c89be546144202c3e7ec053214de62aff9_1920.jpg"
    >
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="8"
          >
            <v-card
              v-for="product in cart"
              :key="product.product.id"
              class="pa-2"
              outlined
              tile
            >
              <v-row>
                <v-col
                  cols="6"
                  md="4"
                >
                  <v-img
                    max-height="200"
                    max-width="200"
                    :src="product.product.image"
                  />
                </v-col>
                <v-col
                  cols="12"
                  md="8"
                  sm="6"
                >
                  <div class="mx-auto title">
                    {{ product.product.name }}
                  </div>
                  <div>
                    Giá sản phẩm: <span class="card-price"> {{ product.product.price }}đ</span>
                  </div>
                  <br>
                  <div class=" mx-auto card-price">
                    <div class=" d-flex justify-content-right align-items-right">
                      <v-btn @click="decrement">
                        <img src="../../assets/images/cart-minus.svg" height="30px" width="30px">
                      </v-btn>
                      <v-btn disabled color="white">
                        {{ quantity }}
                      </v-btn>
                      <v-btn @click="increment">
                        <img src="../../assets/images/cart-plus.svg" height="30px" width="30px">
                      </v-btn>
                    </div>
                  </div>
                  <v-divider class="my-3" />
                  <div class="totalprice">
                    Tổng tiền:  {{ cartPrice }}đ
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col
            cols="6"
            md="4"
          >
            <v-card
              class="pa-2"
              outlined
              tile
            >
              <div class="ma-3">
                <p>Tổng tiền : <span class="card-price float-end"> {{ cartTotalPrice}}đ</span> </p>

                <p>Khuyến mãi</p>
                <input type="text" class="border-2">
                <p>Phí vận chuyển : <span class="card-price float-end"> 0đ</span> </p>
                <p>Thành tiền : <span class="card-price float-end"> {{ cartTotalPrice}}đ</span> </p>
                <v-btn>Đặt hàng</v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
  </v-app>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Index',
  layout: 'clientLayoutsWithoutCarou',
  data () {
    return {
      datacart: [],
      datacartPrice: []

    }
  },
  computed: {
    ...mapGetters(['quantity']),
    cart () {
      return this.$store.state.cart
    },
    cartPrice () {
      return this.$store.getters.cartPrice
    },
    cartTotalPrice () {
      return this.$store.getters.cartTotalPrice
    }
  },
  methods: {
    ...mapMutations(['increment', 'decrement'])
  }

}
</script>

<style scoped>
.title{
  text-align: left;
}
  .card-price{
    text-align: right;
    padding-right: 20px;
    font-size: 1rem;
  }
.d-flex {
  justify-content: left!important;  ;
}
  .pricea{
    margin: auto;
  }
.theme--light.v-btn.v-btn--disabled {
  color: black !important;
}
.theme--light.v-btn.v-btn--disabled.v-btn--has-bg {
  background-color: white !important;
}
  .totalprice{
    text-align: right;
  }
  .border-2{
    border: 2px solid #535455 !important;
    width: 80%;
    height: 40px;
    margin-left: 10%;
    border-radius: 10px;
  }
</style>

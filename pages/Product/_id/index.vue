<template>
  <v-app>
    <v-img height="1000" src="https://meatdeli.com.vn/upload/iblock/a62/a6248ca575b305360c538bdd62ec2d13.jpg">
      <br><br><br><br>
      <v-container>
        <v-row v-if="product" no-gutters>
          <v-col
            cols="6"
            md="4"
          >
            <v-card
              class="pa-2"
              outlined
              tile
              min-height="800px"
            >
              <br><br><br><br>
              <v-img
                :src="product.image"
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
              min-height="800px"
            >
              <div class="card-body  information-detail">
                <p class="card-text">
                  {{ product.name }}
                </p>
                <p class="card-price">
                  {{ product.price }}đ
                </p>
                <p class="detailtext">
                  {{ product.detail }}<br>
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
    </v-img>
  </v-app>
</template>

<script>
export default {
  name: 'Index',
  layout: 'clientLayoutsWithoutCarou',
  data () {
    return {
      detailProduct: {},
      id: this.$route.params.id,
      quantity: 1
    }
  },
  computed: {
    product () {
      return this.$store.state.product
    }
  },
  watch: {
    '$route' (to) {
      this.id = to.params.id
    }
  },
  mounted () {
    this.$store.dispatch('getProduct', this.id)
  },
  methods: {
    increment () {
      this.quantity++
    },
    decrement () {
      if (this.quantity > 1) {
        this.quantity--
      }
    },
    addToCart () {
      this.$store.dispatch('addProductToCart', {
        product: this.product,
        quantity: this.quantity
      })
    }
  }
}
</script>

<style scoped>
@import url('../../../assets/css/app.css') ;
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

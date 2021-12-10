<template>
  <v-app>
    <v-parallax
      height="1000"
      src="https://cdn.pixabay.com/photo/2019/09/30/15/22/shopping-cart-4516039_960_720.jpg"
    >
      <v-container>
        <v-dialog v-model="dialogMassage" max-width="500">
          <v-card class="align-center">
            <br>
            <h6>Thông báo</h6>
            <hr>
            <h3>Đăng nhập trước khi đặt đơn hàng</h3>
            <v-img
              style="margin-left: 40%"
              width="100px"
              src="https://www.nicepng.com/png/detail/362-3624869_icon-success-circle-green-tick-png.png"
            />
            <br>
            <v-btn outlined color="red" to="/login">
              Đăng nhập
            </v-btn>
            <br>
            <br>
          </v-card>
        </v-dialog>
        <v-row>
          <v-col
            cols="12"
          >
            <v-card
              v-if="cartItemCount === 0"
              height="600px"
            >
              <p class="title-count">
                Không có sản phẩm trong giỏ hàng
              </p>
            </v-card>
          </v-col>
          <v-col
            cols="6"
            md="8"
          >
            <v-card
              v-for="product in cart"

              :key="product.id"
              class="pa-2"
              outlined
              tile
            >
              <v-row>
                <v-col
                  v-if="cartItemCount >= 1"
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
                  v-if="cartItemCount >= 1"
                  cols="12"
                  md="8"
                  sm="6"
                >
                  <div class=" flex justify-content-center align-items-center" />

                  <div class="mx-auto title">
                    {{ product.product.name }}
                    <v-btn
                      class="right"
                      outlined
                      color="red"
                      @click.prevent="removeProduct(product)"
                    >
                      <v-icon left>
                        {{ icons.mdiDelete }}
                      </v-icon>
                      Xóa sản phẩm
                    </v-btn>
                  </div>
                  <br>
                  <div>
                    Giá sản phẩm: <span class="card-price"> {{ product.product.price }}đ</span>
                  </div>
                  <br>
                  <div>
                    Số lượng : {{ product.quantity }}
                  </div>
                  <v-divider class="my-3" />
                  <div class="totalprice">
                    Tổng tiền:  {{ product.product.price * product.quantity }}đ
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col
            v-if="cartItemCount >= 1"
            cols="6"
            md="4"
          >
            <v-card
              class="pa-2"
              outlined
              tile
            >
              <div class="ma-3">
                <p>Tổng tiền : <span class="card-price float-end"> {{ cartTotalPrice }}đ</span> </p>
                <p>Khuyến mãi</p>
                <input type="text" class="border-2">
                <p>Phí vận chuyển : <span class="card-price float-end"> 15000đ</span> </p>
                <p>Thành tiền : <span class="card-price float-end"> {{ cartTotalPrice +15000 }}đ</span> </p>
                <div class=" flex justify-content-center align-items-center">
                  <v-btn
                    outlined
                    color="red"
                    @click="CreateOrder"
                  >
                    Đặt hàng
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
import { mdiDelete } from '@mdi/js'
import Cookies from 'js-cookie'
export default {
  name: 'Index',
  layout: 'clientLayoutsWithoutCarou',
  data () {
    return {
      dialogMassage: false,
      dataUser: [],
      statusOrder: 'Chờ xác nhận',
      realprice: 0,
      datacart: [],
      datacartPrice: [],
      dataOrder: {},
      quantity: 1,
      icons: {
        mdiDelete
      }

    }
  },
  head: {
    title: 'Trang chủ'
  },
  computed: {
    cart () {
      return this.$store.state.cart
    },
    cartPrice () {
      return this.$store.getters.cartPrice
    },
    cartItemCount () {
      return this.$store.getters.cartItemCount
    },
    cartTotalPrice () {
      return this.$store.getters.cartTotalPrice
    },
    user () {
      return this.$store.state.user
    }
  },
  create () {
    this.CreateOrder()

    this.$store.dispatch('getdataUser', this.$store.state.token)
  },
  mounted () {
    this.getdataUser()
  },
  methods: {
    getdataUser () {
      return new Promise((resolve, reject) => {
        this.$axios.$post(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${process.env.fbApiKey}&idToken=${this.$store.state.token}`, {})
          .then((data) => {
            this.dataUser = data.users[0]
            resolve()
          }).catch(error => reject(error))
      })
    },
    increment () {
      this.realprice++
    },
    decrement () {
      if (this.quantity > 1) {
        this.quantity--
      }
    },
    removeProduct (product) {
      this.$store.dispatch('removeProduct', product)
    },
    CreateOrder () {
      if (Cookies.get('token') === undefined) {
        this.dialogMassage = true
      } else {
        this.cart.quantity = this.quantity
        return new Promise((resolve, reject) => {
          this.$axios.$post(`${process.env.baseURL}/order.json`,
            {
              name: this.dataUser.displayName,
              email: this.dataUser.email,
              avatar: this.dataUser.photoUrl,
              status: this.statusOrder,
              total: String(this.$store.getters.cartTotalPrice),
              orderdetail: this.cart
            }
          )
            .then(() => {
              this.$store.dispatch('clearCart')
            }).catch(error => reject(error))
        })
      }
    }
  }
}
</script>

<style scoped>
.title{
  text-align: left;
}
.title-count{
  padding-top: inherit;
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top:10%;
}
  .card-price{
    text-align: right;
    padding-right: 20px;
    font-size: 1rem;
  }
.d-flex {
  justify-content: left!important;  ;
}
.flex{
  justify-content: center !important;
  display: flex;
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
  .right{
    float: right;
  }
  .align-center{
    text-align: center;
  }
</style>

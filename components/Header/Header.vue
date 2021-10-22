<template>
  <v-app
    id="inspire"
    color="red"
  >
    <v-app-bar
      app
      color="#CE2222"
      flat
    >
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'white darken-1' : 'transparent'"
        size="32"
      />
      <v-tabs
        centered
        class="ml-n9"
        color="white darken-2"
      >
        <v-tab>
          <nuxt-link
            tag="v-tab"
            to="/Homepage"
          >
            Trang Chủ
          </nuxt-link>
        </v-tab>
        <v-tab>
          <v-menu offset-y>
            <template #activator="{ on, attrs }">
              <v-btn
                class="btn-header"
                outlined
                color="#CE2222"
                v-bind="attrs"
                v-on="on"
              >
                <span style="color: white">Sản Phẩm</span>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(category, index) in dataCategory"
                :key="index"
                link
                @click="categoryOnclick(category.id)"
              >
                <v-list-item-title>{{ category.name }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-tab>
        <v-tab>
          <img src="../../assets/images/cooltext393548465063270.png" alt="">
        </v-tab>
        <v-tab>
          Tin Tức
        </v-tab>
        <v-tab>
          Trợ giúp
        </v-tab>
      </v-tabs>
      <v-menu
        bottom
        rounded
        offset-y
      >
        <template #activator="{ on }">
          <v-btn
            class="btnCart"
            icon
            x-large
            v-on="on"
          >
            <v-badge
              :content="cartItemCount"
              overlap
              color=""
            >
              <v-avatar height="40" width="40" class="d-flex justify-content-center align-items-center">
                <img src="../../assets/images/cart.svg" alt="">
              </v-avatar>
            </v-badge>
          </v-btn>
        </template>

        <v-card
          max-width="300px"
        >
          <v-list-item-content
            v-for="item in cart"
            :key="item.product.id"
            class="justify-center"
          >
            <v-col
              cols="6"
              md="4"
            >
              <v-img
                max-height="80"
                max-width="80"
                :src="item.product.image"
              />
            </v-col>
            <v-col
              cols="12"
              md="8"
              sm="6"
            >
              <div class="mx-auto text-center">
                {{ item.product.name }}
                <v-divider class="my-3" />
              </div>
            </v-col>
            <p class="center">
              <span class="card-price">{{ item.product.price }}đ</span> x {{ item.quantity }}
            </p>
          </v-list-item-content>
          <v-divider class="my-3" />
          <div class="totalPrice">
            <Span>Tổng tiền : {{ cartTotalPrice }}</Span>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <nuxt-link
              to="/Cart"
              tag="v-tab"
            >
              <v-btn

                outlined
                color="red"
              >
                Tới giỏ hàng
              </v-btn>
            </nuxt-link>
          </div>
        </v-card>
      </v-menu>
      <v-menu
        bottom
        min-width="200px"
        rounded
        offset-y
        activator=""
      >
        <template #activator="{ on }">
          <v-btn
            icon
            x-large
            v-on="on"
          >
            <v-avatar color="white" height="40" width="40">
              <v-icon color="#CE2222" size="45">
                mdi-account-circle
              </v-icon>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-divider class="my-3" />
              <nuxt-link
                tag="v-tab"
                to="/Login"
              >
                <v-btn
                  depressed
                  rounded
                  text
                >
                  Login
                </v-btn>
              </nuxt-link>

              <v-divider class="my-3" />
              <v-btn
                depressed
                rounded
                text
              >
                Register
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
      <v-menu
        bottom
        rounded
        offset-y
      >
        <template #activator="{ on }">
          <v-btn
            icon
            x-large
            v-on="on"
          >
            <v-avatar
              color="brown"
              size="48"
            >
              <span class="white--text text-h5">{{ }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar
                color="brown"
              >
                <span class="white--text text-h5">{{ }}</span>
              </v-avatar>
              <h3>{{ }}</h3>
              <p class="text-caption mt-1">
                {{ }}
              </p>
              <v-divider class="my-3" />
              <v-btn
                depressed
                rounded
                text
              >
                Edit Account
              </v-btn>
              <v-divider class="my-3" />
              <v-btn
                depressed
                rounded
                text
              >
                Disconnect
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
    </v-app-bar>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      dataCategory: []

    }
  },
  computed: {
    cart () {
      return this.$store.state.cart
    },
    cartItemCount () {
      return this.$store.getters.cartItemCount
    },
    cartTotalPrice () {
      return this.$store.getters.cartTotalPrice
    }
  },
  created () {
    this.GetCategory()
  },
  mounted () {
    this.$store.dispatch('getCartItems')
  },
  methods: {
    categoryOnclick (id) {
      this.$router.push({
        path: `/category/${id}`,
        params: { id }
      })
    },
    GetCategory () {
      return new Promise((resolve, reject) => {
        axios.get(' http://localhost:3004/category', {})
          .then(({ data }) => {
            this.dataCategory = data
            resolve()
          }).catch(error => reject(error))
      })
    }
  }
}
</script>
<style >

  .btn-header{
    height: 64px!important;
    padding: 0px!important;
    width: 145px!important;
  }
  .carousel{
    margin-top: 42px;
  }
  .v-application--wrap {
    min-height: 0px !important;
  }
  .v-tab{
    color: white !important;
  }
  @media (min-width: 768px){
    .col-md-4 {
      flex: 0 0 auto;
      width: 33.33333333%;
    }
  }
  .center{
    text-align: center;
  }
  .btnCart{
    padding-right: 15px;
  }
  .totalPrice{
    text-align: right;
    margin-bottom: 10px;
  }
  .v-application .d-flex {
    padding: 10px;
  }

</style>

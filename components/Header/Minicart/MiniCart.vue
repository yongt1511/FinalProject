<template>
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
            <img src="../../../assets/images/cart.svg" alt="">
          </v-avatar>
        </v-badge>
      </v-btn>
    </template>

    <v-card
      max-width="300px"
    >
      <v-col v-if="this.token === 0" cols="12">
        <p>Không có sản phẩm trong giỏ hàng</p>
      </v-col>
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
      <div
        v-if="cartItemCount >= 1"
        class="totalPrice"
      >
        <Span>Tổng tiền : {{ cartTotalPrice }}</Span>
      </div>
      <div
        v-if="cartItemCount>= 1"
        class="d-flex justify-content-center align-items-center"
      >
        <nuxt-link
          to="/Cart"
          tag="v-tab"
        >
          <v-btn
            outlined
            color="red"
            @click="reset"
          >
            Tới giỏ hàng
          </v-btn>
        </nuxt-link>
      </div>
    </v-card>
  </v-menu>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  name: 'MiniCart',
  data () {
    return {
      token: null
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
  mounted () {
    this.$store.dispatch('getCartItems')
  },
  created () {
    this.getToken()
  },
  methods: {
    reset () {
      this.$store.dispatch('getCartItems')
    },
    getToken () {
      this.token = Cookies.get('token')
    }
  }
}
</script>

<style scoped>

</style>

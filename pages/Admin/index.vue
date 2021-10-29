<template>
  <v-app>
    <br>
    <v-row class="roww">
      <v-col
        cols="3"
        class="border marginn"
      >
        <v-row>
          <v-col
            class="col3"
            cols="3"
          >
            <v-card
              height="104px"
              width="104px"
              class="Dashboard"
              color="#4caf5087"
            >
              <v-icon
                large
                color="green darken-2"
              >
                mdi-domain
              </v-icon>
            </v-card>
          </v-col>
          <v-col
            cols="9"
            class="col8"
          >
            <div>
              <p class="titledetail">
                Số lượng Đơn hàng
              </p>
              <p class="detail">
                {{ orderCount }}
              </p>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        cols="3"
        class="border marginn"
      >
        <v-row>
          <v-col
            class="col3"
            cols="3"
          >
            <v-card
              height="104px"
              width="104px"
              class="Dashboard"
              color="#ff5a5a87"
            >
              <v-icon
                large
                color="red darken-2"
              >
                mdi-cart
              </v-icon>
            </v-card>
          </v-col>
          <v-col
            cols="9"
            class="col8"
          >
            <div>
              <p class="titledetail">
                Số lượng sản phẩm
              </p>
              <p class="detail">
                {{ productCount }}
              </p>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        cols="3"
        class="border marginn"
      >
        <v-row>
          <v-col
            class="col3"
            cols="3"
          >
            <v-card
              height="104px"
              width="104px"
              class="Dashboard"
              color="#ffc10773"
            >
              <v-icon
                large
                color="yellow darken-2"
              >
                mdi-star
              </v-icon>
            </v-card>
          </v-col>
          <v-col
            cols="9"
            class="col8"
          >
            <div>
              <p class="titledetail">
                Doanh số
              </p>
              <p class="detail">
                {{ totalOrder }}đ
              </p>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-spacer />
    <br>
    <v-container>
      <v-row>
        <v-col
          cols="6"
        >
          <v-img
            min-height="526px"
            max-width="780px"

            src="https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_960_720.jpg"
          >
            <v-row
              align="center"
              class="white--text mx-auto"
              justify="center"
            >
              <v-col
                class="white--text text-center"
                cols="12"
                tag="h1"
              >
                <br>
                <span
                  :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                  class="font-weight-black"
                >
                  PRODUCT
                </span>
              </v-col>
              <nuxt-link
                to="/Admin/Product"
                tag="v-tab"
              >
                <v-btn
                  class="align-self-end"
                  fab
                  outlined
                >
                  <v-icon>mdi-chevron-double-right</v-icon>
                </v-btn>
              </nuxt-link>
            </v-row>
          </v-img>
        </v-col>
        <v-col
          cols="6"
        >
          <v-img
            height="526px"
            width="780px"

            src="https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140603_960_720.jpg"
          >
            <v-row
              align="center"
              class="white--text mx-auto"
              justify="center"
            >
              <v-col
                class="white--text text-center"
                cols="12"
                tag="h1"
              >
                <br>
                <span
                  style="color: black"
                  :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                  class="font-weight-black"
                >
                  ORDER
                </span>
              </v-col>
              <nuxt-link
                to="/Admin/Order"
                tag="v-tab"
              >
                <v-btn
                  color="black"
                  class="align-self-end"
                  fab
                  outlined
                >
                  <v-icon>mdi-chevron-double-right</v-icon>
                </v-btn>
              </nuxt-link>
            </v-row>
          </v-img>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="6"
        >
          <v-img
            min-height="526px"
            max-width="780px"

            src="https://cdn.pixabay.com/photo/2017/03/26/11/53/hors-doeuvre-2175326_960_720.jpg"
          >
            <v-row
              align="center"
              class="white--text mx-auto"
              justify="center"
            >
              <v-col
                class="white--text text-center"
                cols="12"
                tag="h1"
              >
                <br>
                <span
                  style="color: black"
                  :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                  class="font-weight-black"
                >
                  NGOY
                </span>
              </v-col>
              <nuxt-link
                to="/Admin/Product"
                tag="v-tab"
              >
                <v-btn
                  color="black"
                  class="align-self-end"
                  fab
                  outlined
                >
                  <v-icon>mdi-chevron-double-right</v-icon>
                </v-btn>
              </nuxt-link>
            </v-row>
          </v-img>
        </v-col>
        <v-col
          cols="6"
        >
          <v-img
            min-height="526px"
            max-width="780px"
            src="https://cdn.pixabay.com/photo/2014/05/03/00/45/computer-336628_960_720.jpg"
          >
            <v-row
              align="center"
              class="white--text mx-auto"
              justify="center"
            >
              <v-col
                class="white--text text-center"
                cols="12"
                tag="h1"
              >
                <br>
                <span
                  :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                  class="font-weight-black"
                >
                  NGOY
                </span>
              </v-col>
              <nuxt-link
                to="/Admin"
                tag="v-tab"
              >
                <v-btn
                  class="align-self-end"
                  fab
                  outlined
                >
                  <v-icon>mdi-chevron-double-right</v-icon>
                </v-btn>
              </nuxt-link>
            </v-row>
          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin', 'check-auth'],
  data () {
    return {

    }
  },
  head: {
    title: 'Trang quản lý'
  },
  computed: {
    products () {
      return this.$store.state.products
    },
    productCount () {
      return this.$store.getters.procductCount
    },
    orderCount () {
      return this.$store.getters.OrderCount
    },
    totalOrder () {
      let total = 0
      this.$store.state.orders.forEach((item) => {
        const sales = Number(item.total)
        total += sales
      })
      return total
    }
  },
  mounted () {
    this.$store.dispatch('getProducts')
    this.$store.dispatch('getOrders')
  }
}

</script>

<style scoped>
  .theme--light.v-btn {
    color: rgb(255 255 255);
  }
  .Dashboard{
    display: flex;
    justify-content: center;
    border-radius: 13px 0 0 13px;
  }
  .col8{
    display: flex;
    padding: 0px;
    justify-content: center;
  }
  .border{
    border: 2px solid #dee2e6 !important; ;
    border-radius: 15px;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  }
  .roww{
    margin-left: 5%;
    margin-right: 5%;
  }
  .col3{
    padding: 0px;
    border-radius: 15px;
  }
  .detail{
    text-align: center;
    font-size: 30px;
    padding: 0px !important;
    margin: 0px !important;
  }
  .titledetail{
    font-size: 20px;
    text-align: center;
  }
  .marginn{
    margin-left: 4%;
    margin-right: 4%;
  }
  .row {
    margin-top:-12px !important;
  }
</style>

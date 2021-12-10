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
      <v-tabs
        centered
        class="ml-n9"
        color="white darken-2"
      >
        <v-tab to="/Homepage">
          Homepage
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
                <span style="color: white">Product</span>
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
        <v-tab to="/homepage">
          <img src="../../assets/images/cooltext393548465063270.png" alt="">
        </v-tab>
        <v-tab>
         News
        </v-tab>
        <v-tab>
          Help
        </v-tab>
      </v-tabs>
      <MiniCart />
      <v-menu
        v-if="token=== undefined"
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
              <v-btn
                depressed
                rounded
                text
                to="/Login"
              >
                Login
              </v-btn>
              <v-divider class="my-3" />
              <v-btn
                depressed
                rounded
                text
                to="/Register"
              >
                Register
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
      <v-menu
        v-else
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
              <img :src="dataUser.photoUrl" alt="">
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-img
                width="200"
                src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
              >
                <br>
                <v-avatar
                  class="profile"
                  color="brown"
                  size="80"
                >
                  <img :src="dataUser.photoUrl" alt="">
                </v-avatar>

                <br>
                <br>
                <p class="userName">
                  {{ dataUser.displayName }}
                </p>
              </v-img>
              <v-divider class="my-3" />

              <v-btn
                depressed
                rounded
                text
                to="/editProfile"
              >
                Xem Đơn hàng
              </v-btn>
              <v-divider class="my-3" />
              <v-btn
                depressed
                rounded
                text
                to="/editProfile"
              >
                Sửa thông tin
              </v-btn>
              <v-divider class="my-3" />
              <v-btn
                depressed
                rounded
                text
                @click="onLogout"
              >
                Đăng xuất
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
    </v-app-bar>
  </v-app>
</template>

<script>
import Cookies from 'js-cookie'
import axios from 'axios'
import MiniCart from '~/components/Header/Minicart/MiniCart'

export default {
  components: { MiniCart },
  data () {
    return {
      token: null,
      dataCategory: [],
      dataUser: []

    }
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  created () {
    this.GetCategory()
    this.getdataUser()
  },
  mounted () {
  },
  methods: {
    getdataUser () {
      return new Promise((resolve, reject) => {
        this.$axios.$post(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${process.env.fbApiKey}&idToken=${Cookies.get('token')}`, {})
          .then((data) => {
            this.dataUser = data.users[0]
            resolve()
          }).catch(error => reject(error))
      })
    },
    toHomepage () {
      this.$router.push('/homepage')
    },
    onLogout () {
      this.$store.dispatch('logout')
      this.token = Cookies.get('token')
      this.toHomepage()
    },
    categoryOnclick (id) {
      this.$router.push({
        path: `/category/${id}`,
        params: { id }
      })
    },
    GetCategory () {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.baseURL}/category.json`, {})
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
  .userName{
    color: white;
    font-size: 20px;
  }
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
    margin-right: 10px;
  }
  .v-application .d-flex {
    padding: 10px;
  }
  .theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
    color: rgba(0, 0, 0, 0.87) !important;
  }

</style>

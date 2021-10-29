<template>
  <v-img :src="img">
    <v-container class="containerdetail">
      <v-card
        class="carddetail"
        min-height="500px"
        width="400px"
      >
        <nuxt-link to="/homepage">
          <img width="200px" src="../../assets/images/logo1.png" alt="">
        </nuxt-link>
        <v-card-title>Sửa thông tin tài khoản </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-text-field
                v-model="dataUser.displayName"
                label="Tên người dùng"
              />
              <v-text-field
                v-model="address"
                label="Địa chỉ"
              />
              <v-text-field
                v-model="dataUser.photoUrl"
                label="Ảnh đại diện"
              />
              <v-img
                width="40px"
                :src="dataUser.photoUrl"
              />
              <v-text-field
                v-model="phoneNumber"
                label="Số điện thoại"
              />
              <v-btn outlined color="blue" @click="UpdateDataUser">
                Xác nhận
              </v-btn>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-container>
  </v-img>
</template>

<script>

export default {
  name: 'Index',
  layout: 'LayoutsWhite',
  data () {
    return {
      dataUser: [],
      img: 'https://cdn.pixabay.com/photo/2013/03/02/02/41/alley-89197_960_720.jpg',
      name: '',
      avatar: '',
      address: '',
      phoneNumber: ''
    }
  },
  mounted () {
    this.getdataUser()
    console.log(this.$store.state.token)
    return this.$store.state.token
  },
  methods: {
    getdataUser () {
      return new Promise((resolve, reject) => {
        this.$axios.$post(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${process.env.fbApiKey}&idToken=${this.$store.state.token}`, {})
          .then((data) => {
            this.dataUser = data.users[0]
            console.log(this.dataUser)
            resolve()
          }).catch(error => reject(error))
      })
    },
    UpdateDataUser () {
      return new Promise(() => {
        this.$axios.$post(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.fbApiKey}`, {
          idToken: this.$store.state.token,
          displayName: this.dataUser.displayName,
          photoUrl: this.dataUser.photoUrl,
          returnSecureToken: true
        }).then(() => {
          this.$router.push('/homepage')
        })
      })
    }
  }
}
</script>

<style scoped>
  .containerdetail{
    display: flex;
    justify-content: center;
  }
  .carddetail{
    display: inline-grid;
    justify-items: center;
  }
</style>

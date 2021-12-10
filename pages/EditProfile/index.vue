<template>
  <v-img :src="img">
    <v-container class="containerdetail">
      <v-dialog v-model="dialogSuccess" max-width="500px">
        <v-card>
          <v-card-title class="text-h5">
            Sửa thông tin tài khoản thành công
          </v-card-title>
          <v-card-actions>
            <v-spacer />
            <v-btn color="blue darken-1" text @click="close">
              Đóng
            </v-btn>
            <v-spacer />
          </v-card-actions>
        </v-card>
      </v-dialog>
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
      dialogSuccess: false,
      img: 'https://cdn.pixabay.com/photo/2013/03/02/02/41/alley-89197_960_720.jpg',
      name: '',
      avatar: '',
      address: '',
      phoneNumber: ''
    }
  },
  mounted () {
    this.getdataUser()
    return this.$store.state.token
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
    UpdateDataUser () {
      this.$axios.$post(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.fbApiKey}`, {
        idToken: this.$store.state.token,
        displayName: this.dataUser.displayName,
        photoUrl: this.dataUser.photoUrl,
        returnSecureToken: true
      }).then(() => {
        this.dialogSuccess = true
      })
    },
    close () {
      this.dialogSuccess = false
      this.$router.push('/homepage')
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

<template>
  <v-img :src="img">
    <v-container class="containerdetail">
      <v-card
        class="carddetail"
        min-height="500px"
        width="400px"
      >
        <img width="200px" src="../../assets/images/logo1.png" alt="">
        <v-card-title>Thêm thông tin tài khoản</v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-text-field
                v-model="name"
                label="Tên người dùng"
              />
              <v-text-field
                v-model="address"
                label="Địa chỉ"
              />
              <v-img
                width="40px"
                :src="avatar"
              />
              <v-text-field
                v-model="avatar"
                label="Ảnh đại diện"
              />
              <v-text-field
                v-model="phoneNumber"
                label="Số điện thoại"
              />
              <v-btn outlined color="blue" @click="UpdateDataUser" to="/login">
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
      img: 'https://cdn.pixabay.com/photo/2013/03/02/02/41/alley-89197_960_720.jpg',
      name: '',
      avatar: '',
      address: '',
      phoneNumber: ''
    }
  },
  mounted () {
    return this.$store.state.token
  },
  methods: {
    UpdateDataUser () {
      return new Promise(() => {
        this.$axios.$post(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.fbApiKey}`, {
          idToken: this.$store.state.token,
          displayName: this.name,
          photoUrl: this.avatar,
          returnSecureToken: true
        }).then(() => {
          this.$router.push('/Login')
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

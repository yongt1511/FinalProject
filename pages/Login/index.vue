<template>
  <v-app>
    <v-img :src="img">
      <div class="modal-dialog" role="document">
        <div class="modal-content rounded-5 shadow">
          <div class="logo">
            <nuxt-link
              to="/"
            >
              <a href=""> <img src="../../assets/images/logo1.png" alt=""></a>
            </nuxt-link>
          </div>
          <div class="modal-header p-5 pb-4 border-bottom-0">
            <br>
            <h2 class="fw-bold mb-0">
              Đăng Nhập
            </h2>
          </div>
          <div class="modal-body p-5 pt-0">
            <form id="form" class="form">
              <div class="form-floating mb-3 ">
                <input
                  id="email"
                  v-model="email"
                  type="text"
                  class="form-control rounded-4"
                >
                <label for="email">Email, Tên đăng nhập</label>
                <i class="fa fa-check-circle" aria-hidden="true" />
                <i class="fa fa-exclamation-circle" />
                <small>Error Massage</small>
              </div>
              <div class="form-floating mb-3 ">
                <input
                  id="password"
                  v-model="password"
                  type="password"
                  class="form-control rounded-4"
                >
                <label for="password">Mật khẩu</label>
                <i class="fa fa-check-circle" aria-hidden="true" />
                <i class="fa fa-exclamation-circle" />
                <small>Error Massage</small>
              </div>
              <button class="w-100 mb-2 btn btn-lg rounded-4 btn-primary" type="submit" @click="btnLogin()">
                Đăng Nhập
              </button>
              <small class="forget"><a href="">Quên mật khẩu?</a> </small>
              <hr class="my-4">
              <button class="w-100 py-2 mb-2 btn btn-outline-dark rounded-4" type="submit">
                <img
                  style="width: 20px"
                  src="https://image.similarpng.com/very-thumbnail/2020/05/Glossy-Instagram-icon-PNG.png"
                >
                Đăng nhập bằng Intargram
              </button>
              <button class="w-100 py-2 mb-2 btn btn-outline-primary rounded-4" type="submit">
                <img src="../../assets/images/abc.svg" alt="">
                Đăng nhập bằng Facebook
              </button>
              <button class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-4" type="submit">
                <img src="../../assets/images/image 20.svg" alt="">
                Đăng nhập bằng số điện thoại
              </button>
              <hr>
              <v-tab class="register" to="/register">
                Tạo tài khoản
              </v-tab>
            </form>
          </div>
        </div>
      </div>
    </v-img>
  </v-app>
</template>

<script>

import('../../assets/js/validationLogin')
export default {
  name: 'Index',
  layout: 'LayoutsWhite',
  data () {
    return {
      img: 'https://cdn.pixabay.com/photo/2013/03/02/02/41/alley-89197_960_720.jpg',
      isLogin: true,
      email: '',
      password: ''
    }
  },
  computed: {
    role () {
      return this.$store.state.role
    }
  },
  created () {
  },
  methods: {
    btnLogin () {
      this.$store.dispatch('authenticateUser', {
        email: this.email,
        password: this.password,
        isLogin: this.isLogin
      }).then(() => {
        if (this.$store.state.role === 'aOAEseP0jkYQVSbOlVuEiNnqMeI2') {
          this.$router.push('/Admin')
        } else {
          this.$router.push('/Homepage')
        }
      }).catch((error) => {
        if (error.data.error.message === 'INVALID_PASSWORD') {
          alert('Sai mật khẩu')
        } else if (error.data.error.message === 'EMAIL_NOT_FOUND') {
          alert('Tài khoản không tồn tại')
        }
      })
    }
  }
}
</script>
<style scoped>
  @import url('assets/css/app.css') ;
  @import url('assets/css/bootstrap.min.css') ;
  @import url('assets/css/User.css') ;
  @import url('assets/css/animation.css') ;
  .v-tab {
    color: #0d6efd !important;
  }
  .v-application .error {
    background-color: #ffffff !important;
    border-color: #f5f2f2 !important;
  }
  .v-application .success {
    background-color: #ffffff !important;
    border-color: #2ecc71 !important;
  }

  .register{
    margin-left: 10px;
  }
  .modal-dialog{
    color: black !important;
  }

</style>

<template>
  <v-app>
    <v-img height="" :src="img">
      <div class="modal-dialog" role="document">
        <div class="modal-content rounded-5 shadow">
          <div class="logo">
            <router-link
              to="/"
              tag="li"
              class="nav-item"
              active-class="active"
              exact
            >
              <img src="../../assets/images/logo1.png" alt="">
            </router-link>
          </div>
          <div class="modal-header p-5 pb-4 border-bottom-0">
            <br>
            <!-- <h5 class="modal-title">Modal title</h5> -->
            <h2 class="fw-bold mb-0">
              Tạo Tài Khoản
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
                  placeholder="name@example.com"
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
                  placeholder="Password"
                >
                <label for="password">Mật khẩu</label>
                <i class="fa fa-check-circle" aria-hidden="true" />
                <i class="fa fa-exclamation-circle" />
                <small>Error Massage</small>
              </div>
              <div class="form-floating mb-3 ">
                <input
                  id="re-password"
                  v-model="rePassword"
                  type="password"
                  class="form-control rounded-4"
                  placeholder="Password"
                >
                <label for="re-password">Nhập lại mật khẩu</label>
                <i class="fa fa-check-circle" aria-hidden="true" />
                <i class="fa fa-exclamation-circle" />
                <small>Error Massage</small>
              </div>
              <button
                class="w-100 mb-2 btn btn-lg rounded-4 btn-primary"
                type="submit"
                @click="register"
              >
                Tạo Tài Khoản
              </button>
              <small class="forget">
                <nuxt-link
                  to="/login"
                ><a href="">Đăng nhập</a></nuxt-link>

              </small>
              <hr class="my-4">
            </form>
          </div>
        </div>
      </div>
    </v-img>
  </v-app>
</template>

<script>
import('../../assets/js/validation')
export default {
  name: 'Index',
  layout: 'LayoutsWhite',
  data () {
    return {
      img: 'https://cdn.pixabay.com/photo/2013/03/02/02/41/alley-89197_960_720.jpg',
      error: '',
      email: '',
      password: '',
      rePassword: '',
      role: 1
    }
  },
  created () {
  },
  methods: {
    register () {
      if (this.email !== '' || this.password !== '' || this.password !== '' || this.password !== this.rePassword) {
        this.$store.dispatch('authenticateUser', {
          email: this.email,
          password: this.password,
          role: this.role
        }).then((result) => {
          console.log(this.$store.state.token)
          if (result.success) {
            alert('Tạo tài khoản thành công')
            this.$router.push('/registerdetail')
          }
        }).catch((error) => {
          if (error.data.error.message === 'WEAK_PASSWORD : Password should be at least 6 characters') {
            alert('Vui lòng tạo mật khẩu trên 6 kí tự')
          } else if (error.data.error.message === 'EMAIL_EXISTS') {
            alert('Tài khoản đã tồn tại')
          }
        })
      }
    }
  }
}
</script>
<style scoped>
  @import url('assets/css/app.css') ;
  @import url('assets/css/bootstrap.min.css') ;
  @import url('assets/css/User.css') ;
  @import url('assets/css/animation.css') ;
  .v-application .error {
    background-color: #ffffff !important;
    border-color: #f5f2f2 !important;
  }
  .v-application .success {
    background-color: #ffffff !important;
    border-color: #2ecc71 !important;
  }
  .modal-dialog{
    color: black !important;
    width: 500px;
  }

</style>

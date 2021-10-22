<template>
  <v-app>
    <v-parallax height="1000" src="https://pixabay.com/get/g8557ee44c5958afd590917876bdf3acd0b56dcd640585fc7077124b2db742778d58a2c6cc29bef7879c2cd831b94cb3a.jpg">
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
                  id="username"
                  v-model="user.name"
                  type="text"
                  class="form-control rounded-4"
                >
                <label for="username">Email, Tên đăng nhập</label>
                <i class="fa fa-check-circle" aria-hidden="true" />
                <i class="fa fa-exclamation-circle" />
                <small>Error Massage</small>
              </div>
              <div class="form-floating mb-3 ">
                <input
                  id="password"
                  v-model="user.password"
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
              <div class="creat-account">
                <router-link
                  to="/signup"
                  tag="li"
                  class="nav-item"
                  active-class="active"
                  exact
                >
                  <a href="">Tạo tài khoản </a>
                </router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </v-parallax>
  </v-app>
</template>

<script>
import axios from 'axios'

import('../../assets/js/validationLogin')
export default {
  name: 'Index',
  layout: 'LayoutsWhite',
  data () {
    return {
      dataUser: {
        name: '',
        password: ''
      },
      user: {
        name: '',
        password: ''
      }
    }
  },
  created () {
  },
  methods: {
    btnLogin () {
      return new Promise((resolve, reject) => {
        axios.get(' http://localhost:3004/user')
          .then((data) => {
            resolve()
          }).catch(error => reject(error))
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
.v-application .error {
  background-color: #ffffff !important;
  border-color: #f5f2f2 !important;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.3);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.modal1 {
  position: fixed;
  top: 20%;
  left: 40%;
  transform: translate (-50%, -50%);
  z-index: 99;
  width: 100%;
  max-width: 400px;
  background-color: white;
  border-radius: 16px;

}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform .5s;
}

.slide-enter,
.slide-leave-to {
  transform: translatey(-50%) translatex(100vw);
}
.slide2-enter-active,
.slide2-leave-active {
  transition: transform .5s;
}

.slide2-enter,
.slide2-leave-to {
  transform: translatey(50%) translatex(-100vw);
}

.succesTittle {
  text-align: center;
  font-size: 20px;
  color: Green;
}
.errorTittle{
  text-align: center;
  font-size: 20px;
  color: Red;
}
  .modal-dialog{
    color: black !important;
  }

</style>

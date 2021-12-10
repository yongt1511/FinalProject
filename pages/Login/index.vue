<template>
  <v-app>
    <v-img :src="img">
      <v-container>
        <v-row no-gutters>
          <v-col
            md="6"
            offset-md="3"
          >
            <v-card class="cardLogin">
              <div class="Login">
                <nuxt-link
                  to="/"
                >
                  <img width="" src="../../assets/images/logo1.png" alt="">
                </nuxt-link>
              </div>
              <br>
              <div class="LoginTitle">
                <h2>
                  Đăng Nhập
                </h2>
              </div>
              <div>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <div class="LoginForm">
                    <v-text-field
                      v-model="email"
                      :error-messages="errorEmail"
                      :success-messages="successEmail"
                      :rules="EmailRules"
                      type="text"
                      label="Email đăng nhập"
                      required
                    />
                    <v-text-field
                      v-model="password"
                      :success-messages="successPassword"
                      :error-messages="errorPassword"
                      :rules="PasswordRules"
                      type="password"
                      label="Mật khẩu"
                    />
                  </div>
                  <div class="btnLogin">
                    <v-btn
                      outlined
                      color="blue"
                      @click="btnLogin()"
                    >
                      Đăng nhập
                    </v-btn>
                  </div>
                  <br>
                  <small class="forget"><a href="">Quên mật khẩu?</a> </small>
                  <br>
                  <hr>
                  <v-btn class="w-100 py-2 mb-2 btn btn-outline-dark rounded-4" type="submit">
                    <img
                      style="width: 20px"
                      src="https://image.similarpng.com/very-thumbnail/2020/05/Glossy-Instagram-icon-PNG.png"
                    >
                    Đăng nhập bằng Intargram
                  </v-btn>
                  <v-btn class="w-100 py-2 mb-2 btn btn-outline-primary rounded-4" type="submit">
                    <img src="../../assets/images/abc.svg" alt="">
                    Đăng nhập bằng Facebook
                  </v-btn>
                  <v-btn class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-4" type="submit">
                    <img src="../../assets/images/image 20.svg" alt="">
                    Đăng nhập bằng số điện thoại
                  </v-btn>
                  <hr>
                  <div class="btnLogin">
                    <v-btn outlined color="red" class="register" to="/register">
                      Tạo tài khoản
                    </v-btn>
                  </div>

                  <br>
                </v-form>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
  </v-app>
</template>

<script>
export default {
  name: 'Index',
  layout: 'LayoutsWhite',
  data () {
    return {
      errorPassword: '',
      errorEmail: '',
      successEmail: '',
      successPassword: '',
      valid: true,
      img: 'https://cdn.pixabay.com/photo/2013/03/02/02/41/alley-89197_960_720.jpg',
      isLogin: true,
      email: '',
      EmailRules: [
        v => !!v || 'Email không được để trống',
        v => /.+@.+/.test(v) || 'Không đúng định dạng Email'
      ],
      password: '',
      PasswordRules: [
        v => !!v || 'Mật khẩu không được để trống'
      ]
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
      if (this.email === '' || this.password === '') {
        if (this.email === '' && this.password === '') {
          this.errorEmail = 'Email can not blank'
          this.errorPassword = 'Password  can not blank'
        } else if (this.password === '' && this.email !== '') {
          this.errorPassword = 'Password  can not blank'
          this.successEmail = '.'
        } else if (this.email === '' && this.password !== '') {
          this.errorEmail = 'Email can not blank'
          this.successPassword = '.'
        }
      } else {
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
            alert('Wrong passwood')
          } else if (error.data.error.message === 'EMAIL_NOT_FOUND') {
            alert('Account not exist')
          }
        })
      }
    }
  }
}
</script>
<style scoped>
  .register{
    margin-bottom: 20px;
  }
  .Login{
    margin-top: 10%;
    justify-content: center;
    justify-items: center;
    display: flex;
  }
  .LoginTitle{
    text-align: center;
  }
  .btnLogin{
   display: flex;
    justify-content: center;
    color: white;
    border-radius: 5px;
  }
  .forget{
    float: right;
  }
  .cardLogin{
    padding-left: 60px;
    padding-right: 60px;
  }
</style>

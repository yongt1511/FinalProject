<template>
  <v-app>
    <v-container>
      <div class="title">
        <h1> {{ titleFirst }}</h1>
      </div>
      <v-col
        md="8"
        offset-md="2"
        class="title"
      >
        <div class="title">
          {{ datailTitle }}
        </div>
      </v-col>

      <v-tabs centered color="white" background-color="red" class="tabs">
        <v-tab v-for="(category) in dataCategory " :id="category.id" :key="category.id" @click="categoryOnclick(category.id)">
          {{ category.name }}
        </v-tab>
      </v-tabs>
      <br>
      <br>
      <v-row>
        <v-col>
          <div class="text-h4">
            <strong> Sản Phẩm nổi bật</strong>
          </div>
          <v-btn class="dangger" color="white" outlined>
            Xem thêm
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-slide-group
          class="pa-4"
          active-class="success"
          show-arrows
        >
          <v-slide-item
            v-for="product in products"
            :key="product.id"
            :product="product"
            cols="3"
          >
            <v-hover
              v-slot="{ hover }"
              open-delay="200"
            >
              <v-card
                :elevation="hover ? 16 : 2"
                :class="{ 'on-hover': hover }"
                class="ma-4 "
                height="501"
                width="285"
                @click="productOnclick(product.id)"
              >
                <div class="card shadow-sm">
                  <v-img
                    min-height="285px"
                    :src="product.image"
                  />
                  <div class="card-body">
                    <p class="card-text">
                      {{ product.name }}
                    </p>
                    <p class="card-price">
                      {{ product.price }} đ
                    </p>
                    <div class="d-flex justify-content-center align-items-center">
                      <v-btn outlined color="red" @click="productOnclick(product.id)">
                        Xem chi tiết
                      </v-btn>
                    </div>
                  </div>
                </div>
              </v-card>
            </v-hover>
          </v-slide-item>
        </v-slide-group>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Index',
  layout: 'clientLayouts',
  data () {
    return {
      datailTitle: 'Từng sản phẩm được chọn lọc từ các nguồn qua 3 tuyến kiểm dịch nghiêm ngặt, được xử lý, đóng gói với công nghệ Oxy-Fresh 9 từ châu Âu và bảo quản xuyên suốt từ 0-4 độ C từ nhà máy đến tận tay người tiêu dùng, giúp giữ trọn độ tươi ngon và dinh dưỡng của sản phẩm.',
      titleFirst: 'GIAO HÀNG TẬN NƠI KHÔNG LO MÙA DỊCH',
      dataCategory: []
    }
  },
  head: {
    title: 'Trang chủ'
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  mounted () {
    this.$store.dispatch('getProducts')
  },
  created () {
    this.GetCategory()
  },
  methods: {
    categoryOnclick (id) {
      this.$router.push({
        path: `/category/${id}`,
        params: { id }
      })
    },
    productOnclick (id) {
      this.$router.push({
        path: `/product/${id}`,
        params: { id }
      })
    },
    GetCategory () {
      return new Promise((resolve, reject) => {
        axios.get(' http://localhost:3004/category', {})
          .then(({ data }) => {
            this.dataCategory = data
            resolve()
          }).catch(error => reject(error))
      })
    }
  }
}
</script>

<style>
  @import url('assets/css/app.css');
  @import url('assets/css/bootstrap.css');
  .tabs{
    justify-content: center;
    display: flex;
  }
  .v-application--wrap {
    min-height: 0px !important;
  }

  .title {
    text-align: center;
    display: inherit;
    font-size: 36px !important;
  }
  .card-text{
    min-height: 72px;
  }

</style>

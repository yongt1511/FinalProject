<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="products"
      sort-by="calories"
      class="elevation-1"
    >
      <template #item.image="{item}">
        <v-img
          max-width="100px"
          max-height="100px"
          :src="item.image"
        />
      </template>
      <template #top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>PRODUCT</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          />
          <v-spacer />
          <v-dialog
            v-model="dialogDetail"
            max-width="500px"
          >
            <v-card>
              <v-card-title>
                <span class="text-h5">Chi tiết</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="12"
                      md="12"
                    >
                      <div class="detail">
                        <span class="title-detail">--Danh Mục Sản phẩm--</span>
                        <p>  {{ categoryName }}</p>
                      </div>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="6"
                    >
                      <div class="detail">
                        <span class="title-detail"> Tên sản phẩm</span>
                        <p>{{ product.name }}</p>
                      </div>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="6"
                    >
                      <div class="detail">
                        <span class="title-detail">Giá sản phẩm</span>
                        <p>{{ product.price }} đ</p>
                      </div>
                    </v-col>

                    <v-col
                      cols="12"
                      sm="12"
                      md="12"
                    >
                      <div class="detail">
                        <span class="title-detail">Hình ảnh sản phẩm</span>
                        <v-img
                          max-width="400px"
                          max-height="400px"
                          :src="product.image"
                        />
                      </div>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="12"
                      md="12"
                    >
                      <div class="detail">
                        <span class="title-detail">Chi tiết sản phẩm</span>
                        <p>{{ product.detail }}đ</p>
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="blue darken-1"
                  text
                  @click="close"
                >
                  Đóng
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog
            v-model="dialogEdit"
            max-width="500px"
          >
            <v-card>
              <v-card-title>
                <span class="text-h5">Sửa sản phẩm</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="12"
                      md="12"
                    >
                      <div class="title-category editcard">
                        --Chọn Danh Mục Sản phẩm--
                        <select
                          v-model="dataProduct.category"
                          class="category"
                        >
                          <option
                            v-for="item in dataCategory"
                            :key="item.id"
                            :value="item.id"
                          >
                            {{ item.name }}
                          </option>
                        </select>
                      </div>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="12"
                      md="12"
                    >
                      <v-text-field
                        v-model="dataProduct.name"
                        label="Tên sản phẩm"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="12"
                      md="12"
                    >
                      <v-text-field
                        v-model="dataProduct.price"
                        label="Giá sản phẩm"
                      />
                    </v-col>

                    <v-col
                      cols="12"
                      sm="12"
                      md="12"
                    >
                      <v-row>
                        <v-col
                          cols="2"
                        >
                          <v-img
                            :src="dataProduct.image"
                          />
                        </v-col>
                        <v-col
                          cols="10"
                        >
                          <v-text-field
                            v-model="dataProduct.image"
                            label="Hình ảnh"
                          />
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                  >
                    <v-textarea
                      v-model="dataProduct.detail"
                      label="Chi tiết sản phẩm"
                    />
                  </v-col>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="blue darken-1"
                  text
                  @click="close"
                >
                  Hủy bỏ
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="editConfirm"
                >
                  Sửa
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
            <template #activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
              >
                Tạo Sản Phẩm
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">Thêm mới sản phẩm</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="12"
                      md="12"
                    >
                      <div class="title-category">
                        --Chọn Danh Mục Sản phẩm--
                        <select v-model="dataProduct.category" class="category">
                          <option
                            v-for="item in dataCategory"
                            :key="item.id"
                            :value="item.id"
                          >
                            {{ item.name }}
                          </option>
                        </select>
                      </div>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="6"
                    >
                      <v-text-field
                        v-model="dataProduct.name"
                        label="Tên sản phẩm"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="6"
                    >
                      <v-text-field
                        v-model="dataProduct.price"
                        label="Giá sản phẩm"
                      />
                    </v-col>

                    <v-col
                      cols="12"
                      sm="12"
                      md="12"
                    >
                      <v-text-field
                        v-model="dataProduct.image"
                        placeholder="Hình ảnh"
                        prepend-icon="mdi-camera"
                        label="Hình ảnh"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="12"
                      md="12"
                    >
                      <v-textarea
                        v-model="dataProduct.detail"
                        name="input-7-1"
                        label="Chi tiết sản phẩm"
                      />
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="blue darken-1"
                  text
                  @click="close"
                >
                  Hủy bỏ
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="save"
                >
                  Tạo mới
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">
                Bạn có muốn xóa sản phẩm
              </v-card-title>
              <v-card-actions>
                <v-spacer />
                <v-btn color="blue darken-1" text @click="closeDelete">
                  Hủy bỏ
                </v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">
                  Chắc chắn
                </v-btn>
                <v-spacer />
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogError" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">
                Sản Phẩm đang được đặt hàng không thể xóa
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
        </v-toolbar>
      </template>
      <template #item.actions="{ item }">
        <v-icon
          small
          class="mr-2"
          color="#3f00ff"
          @click="showDetail(item)"
        >
          mdi-eye
        </v-icon>
        <v-icon
          small
          class="mr-2"
          color="blue"
          @click="editBefore(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          class="mr-2"
          color="red"
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
      <template #no-data>
        <v-btn
          color="primary"
          @click="reset"
        >
          Reset
        </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>
<script>
import axios from 'axios'
export default {
  layout: 'admin',
  middleware: ['admin', 'check-auth'],
  data () {
    return {
      id: 0,
      dataProduct: [],
      dataCategory: [],
      dialogDetail: false,
      dialogEdit: false,
      dialogError: false,
      categoryName: '',
      dialog: false,
      dialogDelete: false,
      dataOrder: [],
      orderDetail: {},
      status: false,
      headers: [
        {
          text: 'Tên sản phẩm',
          value: 'name'
        },
        {
          text: 'Hình ảnh sản phẩm',
          value: 'image'
        },
        {
          text: 'Giá sản phẩm (đ)',
          value: 'price'
        },
        {
          text: 'Hành động',
          value: 'actions',
          sortable: false
        }
      ],
      editid: 0
    }
  },
  head: {
    title: 'Quản lý sản phẩm'
  },
  computed: {
    products () {
      return this.$store.state.products
    },
    product () {
      return this.$store.state.product
    }
  },
  created () {
    this.reset()
    this.GetCategory()
  },

  methods: {
    editBefore (item) {
      this.editid = item
      if (this.editid.name !== this.product.name) {
        this.$store.dispatch('getProduct', this.editid.id)
      } else if (this.editid.name === this.product.name) {
        this.dataProduct = this.product
        if (this.dataProduct !== this.editid.id) {
          this.$store.dispatch('getProduct', this.editid.id)
        }
        this.dataProduct = this.product
        this.dialogEdit = true
      }
    },
    editConfirm () {
      this.close()
      this.reset()
      return new Promise(() => {
        axios.put(`${process.env.baseURL}/product/${this.editid.id}.json`, {
          name: this.dataProduct.name,
          category: this.dataProduct.category,
          price: this.dataProduct.price,
          image: this.dataProduct.image,
          detail: this.dataProduct.detail
        }).then(() => {
          this.reset()
        })
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
    },
    showDetail (item) {
      this.dialogDetail = true
      this.$store.dispatch('getProduct', item.id)
      const category = this.dataCategory.find(function (category) {
        // eslint-disable-next-line no-return-assign
        return category.id === item.category
      })
      this.categoryName = category.name
    },
    reset () {
      this.$store.dispatch('getProducts')
    },
    deleteItem (item) {
      this.editid = item
      this.$axios.$get(`${process.env.baseURL}/order.json`).then((data) => {
        const ordersArray = []
        for (const key in data) {
          ordersArray.push({
            ...data[key],
            id: key
          })
        }
        const arrayName = []
        ordersArray.forEach(function (orders) {
          orders.orderdetail.forEach(function (order) {
            arrayName.push(order.product.name)
          })
        })
        // eslint-disable-next-line no-unreachable-loop
        for (const i of arrayName) {
          if (i === item.name) {
            this.dialogError = true
            this.status = false
            break
          } else {
            this.status = true
          }
        }
        if (this.status === true) {
          this.dialogDelete = true
        }
      })
    },
    deleteItemConfirm () {
      this.closeDelete()
      this.$store.dispatch('deleteProduct', this.editid)
    },

    close () {
      this.dialogDetail = false
      this.dialog = false
      this.dialogEdit = false
      this.dialogError = false
    },

    closeDelete () {
      this.dialogDelete = false
    },
    save () {
      alert('Tạo thành công')
      this.close()
      return new Promise(() => {
        axios.post(`${process.env.baseURL}/product.json`, {
          name: this.dataProduct.name,
          category: this.dataProduct.category,
          price: this.dataProduct.price,
          image: this.dataProduct.image,
          detail: this.dataProduct.detail
        }).then(() => {
          this.dataProduct.clear()
          this.reset()
        })
      })
    }
  }
}
</script>
<style scoped>
  .theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
    color: black !important;
  }
  .title-category{
    width: inherit;
    text-align: center;
    font-size: 20px;
  }
  .category{
    width: inherit;
    text-align: center;
    font-size: 20px;
    border: 2px solid gray;
    border-radius: 5px;
  }
  .detail{
    color: black;
    text-align: center;
  }
  .title-detail{
    width: inherit;
    font-size: 20px;
    text-align: center;
  }
  .v-text-field {
    margin-top: 7px;
  }
  .editcard{
    color: black;
  }
  .text-h5{
    text-align: center;
  }
</style>

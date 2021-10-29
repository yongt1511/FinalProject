<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="dataOrders"
      sort-by="calories"
      class="elevation-1"
    >
      <template #item.status="item">
        <v-btn :value="item.id" @click="changestatus(item)">
          {{ item.value }} <span style="display:none;">{{ item.index }}</span>
        </v-btn>
      </template>
      <template #item.avatar="item">
        <v-avatar
          height="80px"
          width="80px"
        >
          <img :src="item.value" alt="">
        </v-avatar>
      </template>
      <template #item.image="item">
        <div
          v-for="(orders,index) in item"
          :key="index.value"
        >
          <div
            v-for="order in orders"
            :key="order.id"
          >
            <div
              v-for="orderdetail in order"
              :key="orderdetail.id"
            >
              <div
                v-for="orderProduct in orderdetail"
                :key="orderProduct.id"
              >
                <v-img
                  width="80px"
                  :src="orderProduct.image"
                />
              </div>
            </div>
          </div>
        </div>
      </template>
      <template #item.productName="item">
        <div
          v-for="(orders,index) in item"
          :key="index.value"
        >
          <div
            v-for="order in orders"
            :key="order.id"
          >
            <div
              v-for="orderdetail in order"
              :key="orderdetail.id"
            >
              <div
                v-for="orderProduct in orderdetail"
                :key="orderProduct.id"
              >
                <div class="margin">
                  {{ orderProduct.name }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template #item.quantity="item">
        <div
          v-for="(orders,index) in item"
          :key="index.value"
        >
          <div
            v-for="order in orders"
            :key="order.id"
          >
            <div
              v-for="orderdetail in order"
              :key="orderdetail.id"
            >
              <div>
                <div class="margin60">
                  {{ orderdetail.quantity }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template #item.price="item">
        <div
          v-for="(orders,index) in item"
          :key="index.value"
        >
          <div
            v-for="order in orders"
            :key="order.id"
          >
            <div
              v-for="orderdetail in order"
              :key="orderdetail.id"
            >
              <div
                v-for="orderProduct in orderdetail"
                :key="orderProduct.id"
              >
                <div class="margin">
                  {{ orderProduct.price }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template #item.realprice="item">
        <div
          v-for="(orders,index) in item"
          :key="index.value"
          class="1"
        >
          {{ index.value }}
          <div
            v-for="order in orders"
            :key="order.id"
            class="2"
          >
            <div
              v-for="orderdetail in order"
              :key="orderdetail.id"
              class="3"
            >
              <div class="margin60">
                {{ orderdetail.cardprice }}
              </div>
            </div>
          </div>
        </div>
      </template>
      <template #top="item">
        <v-toolbar
          flat
        >
          <v-toolbar-title>Quản lý đơn hàng</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          />
          <v-spacer />
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">
                Are you sure you want to delete this item?
              </v-card-title>
              <v-card-actions>
                <v-spacer />
                <v-btn color="blue darken-1" text @click="closeDelete">
                  Cancel
                </v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">
                  OK
                </v-btn>
                <v-spacer />
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogChange" max-width="500px">
            <v-card>
              <v-card-title>
                <span class="text-h5">Chi tiết</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="6"
                      md="6"
                    >
                      <div class="detail">
                        Thay đổi thành công
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
                  @click="confirmstatus(item)"
                >
                  Ok
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template #item.actions="{ item }">
        <v-icon
          small
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
      dataOrders: [],
      idOrder: '',
      idstatus: 0,
      dialog: false,
      dialogChange: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Ảnh đại diện',
          value: 'avatar'
        },
        {
          text: 'Tên người dùng',
          value: 'name'
        },

        {
          text: 'Hình ảnh',
          value: 'image'
        },
        {
          text: 'Sản Phẩm',
          value: 'productName'
        },
        {
          text: 'Sô lượng',
          value: 'quantity'
        },
        {
          text: 'Giá sản phẩm',
          value: 'price'
        },
        {
          text: 'Thành tiền',
          value: 'realprice'
        },
        {
          text: 'Tổng tiền',
          value: 'total'
        },
        {
          text: 'Trạng thái',
          value: 'status'
        },
        {
          text: 'Actions',
          value: 'actions',
          sortable: false
        }
      ],
      dataOrder: []
    }
  },
  head: {
    title: 'Quản lý đơn hàng'
  },

  computed: {
    orders () {
      return this.$store.state.orders
    },
    order () {
      return this.$store.state.order
    }
  },
  mounted () {
    this.$store.dispatch('getOrders')
  },

  created () {
    this.reset()
    this.getDataOrders()
  },

  methods: {
    getDataOrders () {
      return new Promise(() => {
        axios.get(`${process.env.baseURL}/order.json`).then((data) => {
          const orderArray = []
          for (const key in data.data) {
            orderArray.push({ ...data.data[key], id: key })
          }
          this.dataOrders = orderArray
        })
      })
    },
    reset () {
      this.getDataOrders()
    },
    changestatus (item) {
      return new Promise(() => {
        axios.get(`${process.env.baseURL}/order/${item.item.id}.json`).then((data) => {
          this.dataOrder = data.data
          this.idstatus = item.item.id
          this.dialogChange = true
          if (this.dataOrder.status === 'Xác nhận') {
            this.dataOrder.status = 'Chưa Xác nhận'
          } else {
            this.dataOrder.status = 'Xác nhận'
          }
        })
      })
    },
    confirmstatus () {
      this.dialogChange = false
      return new Promise(() => {
        axios.put(`${process.env.baseURL}/order/${this.idstatus}.json`, this.dataOrder
        ).then(() => {
          this.reset()
        })
      })
    },
    deleteItem (item) {
      this.dialogDelete = true
      console.log(item)
      this.idOrder = item.id
    },

    deleteItemConfirm () {
      this.closeDelete()
      return new Promise(() => {
        this.$axios.$delete(`${process.env.baseURL}/order/${this.idOrder}.json`).then(() => {
          this.reset()
        })
      })
    },

    close () {
      this.dialogChange = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    }
  }
}
</script>

<style scoped>
  .text-start {
    text-align: left !important;
    width: 200px;
  }
  .margin{
    margin-bottom: 70px;
  }
  .margin60{
    margin-bottom: 40px;
    margin-top: 78px;
  }
  .v-data-table-header th.sortable {
    pointer-events: auto;
    cursor: pointer;
    outline: 0;
    width: 200px!important;
  }
</style>

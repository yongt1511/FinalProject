<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-img
          height="963"
          src="https://cdn.pixabay.com/photo/2016/02/19/11/46/night-1209938_960_720.jpg"
        >
          <v-divider class="my-3" />
          <v-tab to="/homepage">
            <img src="../../../assets/images/cooltext393548465063270.png" alt="">
          </v-tab>
          <v-divider class="my-3" />
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-img>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      src="https://cdn.pixabay.com/photo/2016/11/23/15/23/cosmos-1853491_960_720.jpg"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-tab>
        <nuxt-link to="/homepage">
          <img src="../../../assets/images/cooltext393548465063270.png" alt="">
        </nuxt-link>
      </v-tab>
      <v-spacer />
    </v-app-bar>
  </v-app>
</template>

<script>
export default {
  name: 'HeaderAdmin',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Dashboard',
          to: '/Admin'
        },
        {
          icon: 'mdi-table',
          title: 'Product',
          to: '/Admin/Product'
        },
        {
          icon: 'mdi-cart',
          title: 'Order',
          to: '/Admin/Order'
        },
        {
          icon: 'mdi-exit-to-app',
          title: 'Logout',
          to: '/'
        }

      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Ngoy'
    }
  }
}
</script>

<style scoped>
  .v-list .v-list-item--active {
    color: cyan;
  }
  .theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
    color: white !important;
  }
  .theme--light.v-icon {
    color: white;
  }
</style>

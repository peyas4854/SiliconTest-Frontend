<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 mb-4">
        <table class="table" v-if="getCartItem.length > 0 ">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product Name</th>
            <th scope="col">Quantity</th>

          </tr>
          </thead>
          <tbody>
          <tr v-for="(item,index) in getCartItem">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ item.name }}</td>
            <td>
              <input type="number" v-model="item.quantity">
              <button class="btn btn-info ms-3 " @click="item.quantity++;changeQuantity(item)"><i
                  class="fa-solid fa-plus"></i></button>
              <button class="btn btn-warning ms-3" @click="item.quantity--;changeQuantity(item)"
                      :disabled="item.quantity == 1"
              ><i class="fa-solid fa-minus"></i></button>
            </td>

          </tr>

          </tbody>
        </table>
        <div class="text-center" v-if="getCartItem.length > 0 ">
          <button class="btn btn-primary" @click="checkout()">Checkout</button>
        </div>
        <div v-else>
          <h3 class="text-center">You have no data in cart</h3>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import ApiService from "@/service/api.service";
import JwtService from "@/service/jwt.service";
import store from "@/store";

export default {
  name: "Cart",
  mounted() {
    this.getCarTData()
  },
  computed: {
    ...mapGetters(['getCurrentUser', 'getCartItem']),
  },
  methods: {
    ...mapActions([
      'getCart'
    ]),
    getCarTData() {
      this.getCart();
    },
    changeQuantity(item) {
      console.log('item', item)
      let product = {
        product_id: item.id,
        quantity: item.quantity
      }

      ApiService.post('/cart/change/quantity', product).then((res) => {
        console.log('res', res.data);
      }).catch((errors) => {
        console.log('error', errors.response.data.message);
      });
    },
    checkout(){
      ApiService.post('/checkout').then((res) => {
        console.log('res', res.data);
        this.getCart();

      }).catch((errors) => {
        console.log('error', errors.response.data.message);
      });
    }
  }
}
</script>

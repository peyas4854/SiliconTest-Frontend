<template>
  <div class="col-md-4">
    <div class="card mb-2" id="product-card">
      <a href="#">
        <div class="card-body text-center">
          <img
              :src="product.image" v-if="product.image !=null"
              class="card-product-image" alt="">

          <img v-else
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDvqSCx7xcaN-TMoOANaAI82JhDjct3UCIfsPGonu4otCtZOYpSNXn15jcpzQ8A0wcpoQ&usqp=CAU"
               class="card-product-image" alt="Image not found">
        </div>
        <div class="card-body">
          <p class="card-title text-center">{{ product.name }}</p>
          <p class="card-title text-center">{{ $filters.currencyTK(product.price) }}</p>
          <div class="text-center">
            <button class="btn btn-sm btn-info" @click="addToCart(product)">
              Add to cart
            </button>
          </div>

        </div>
      </a>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters,mapActions} from 'vuex'
import ApiService from "@/service/api.service";
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: false
    },

  },
  computed: {
    ...mapGetters([
      'getCurrentUser'
    ])
  },
  methods: {
    ...mapMutations([
      'SET_CART',
    ]),
    ...mapActions([
      'getCart'
    ]),
    addToCart(product) {
      let data = {
        product_id: product.id,
        user_id: this.getCurrentUser.id,
        quantity: 1,
      }
      ApiService.post('/cart/store', data).then((res) => {
        console.log('res', res.data);
        this.getCart();
      }).catch((errors) => {
        console.log('error', errors.response.data.message);
      });
    }
  }
}
</script>

<style lang="scss" scoped>

#product-card {
  img {
    width: 200px;
    height: 200px;
  }

  a {
    text-decoration: none;
    color: black;

    :hover {
      color: #1f1d1d;
    }
  }


}
</style>



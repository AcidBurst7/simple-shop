var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: 'img/vmSocks-green-onWhite.jpg',
    inStock: false,
    inventory: 7,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        id: 2234,
        color: "green",
        image: "img/vmSocks-green-onWhite.jpg"
      },
      {
        id: 2235,
        color: "blue",
        image: "img/vmSocks-blue-onWhite.jpg"
      }
    ],
    cart: 0
  },
  methods: {
    addToCart() {
      this.cart++;
    },
    updateColorProduct(prodImage) {
      this.image = prodImage;
    }
  }
})
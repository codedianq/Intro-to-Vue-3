const app = Vue.createApp({
  data() {
    return {
      product: 'Socks',
      image: './assets/images/socks_blue.jpg',
      inStock: true,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id: 2234, color: 'green' },
        { id: 2235, color: 'blue' },
      ],
      //answer
      sizes: [
        { id: 1, size: 'Small' },
        { id: 2, size: 'Medium' },
        { id: 1, size: 'Large' },
      ],
    };
  },
});

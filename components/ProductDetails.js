app.component('product-details', {
  props: {
    details: {
      type: Array,
      required: true,
    },
  },
  template:
    /*html*/
    `<ul>
      <li v-for="detail of details">{{ detail }}</li>
    </ul>`,
});

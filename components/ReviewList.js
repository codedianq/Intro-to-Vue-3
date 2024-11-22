app.component('review-list', {
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  template:
    /* html */
    `<div class="review-container">
    <h3>Reviews: </h3>
    <ul>
      <li v-for="(review, index) of reviews" :key="review.index">
      {{ review.name }} gave a {{ review.rating }} stars.
      <br>
      "{{ review.review }}"
      <br>
      Recommended? {{ review.recommend }}
      </li>
    </ul>
    </div>`,
});

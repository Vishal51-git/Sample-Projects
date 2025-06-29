<template>
  <section class="shop">
    <div class="container">
      <h2>Our Posters</h2>
      <div class="posters">
        <div class="poster" v-for="poster in posters" :key="poster.id">
          <img :src="poster.image" :alt="poster.alt" />
          <h3>{{ poster.title }}</h3>
          <p>{{ poster.description }}</p>
          <p>{{ poster.price }}</p>
          <button class="btn">Add to Cart</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Shop',
  data() {
    return {
      posters: [
        {
          id: 1,
          image: '/poster1.jpg',
          alt: 'Army Poster 1 - Soldiers in Action',
          title: 'Soldiers in Action',
          description: 'This high-quality poster features a dramatic scene of soldiers in action.',
          price: '$19.99',
        },
        {
          id: 2,
          image: '/poster2.jpg',
          alt: 'Army Poster 2 - Military Tank in Battle',
          title: 'Military Tank in Battle',
          description: 'This poster showcases a powerful military tank in action.',
          price: '$24.99',
        },
        {
          id: 3,
          image: '/poster3.jpg',
          alt: 'Army Poster 3 - Helicopter in Flight',
          title: 'Helicopter in Flight',
          description: 'This poster features a stunning helicopter in flight.',
          price: '$29.99',
        },
      ],
    }
  },
}
</script>

<style scoped>
.shop .posters {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.shop .poster {
  background: #f4f4f4;
  margin: 10px;
  padding: 20px;
  text-align: center;
  width: 30%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.shop .poster img {
  max-width: 100%;
  height: auto;
}
</style>

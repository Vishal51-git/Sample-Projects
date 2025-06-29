<template>
  <section class="hero">
    <div class="container">
      <h2>Welcome to Army Posters Shop</h2>
      <p>Find the best army posters to decorate your space.</p>
      <router-link to="/shop" class="btn">Shop Now</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
}
</script>

<style scoped>
.hero {
  background: url('/hero.jpg') no-repeat center center/cover;
  color: #fff;
  padding: 100px 0;
  text-align: center;
}

.hero h2 {
  font-size: 2.5em;
}

.hero p {
  font-size: 1.2em;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background: #333;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
}
</style>

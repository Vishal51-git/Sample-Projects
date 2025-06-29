<template>
  <header>
    <div class="container">
      <h1>Army Posters Shop</h1>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/shop">Shop</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
header {
  background: #333;
  color: #fff;
  padding: 10px 0;
}

header h1 {
  text-align: center;
}

nav ul {
  list-style: none;
  text-align: center;
  padding: 0;
}

nav ul li {
  display: inline;
  margin: 0 15px;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
}
</style>

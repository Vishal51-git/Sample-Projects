<template>
  <section class="contact">
    <div class="container">
      <h2>Contact Us</h2>
      <form @submit.prevent="submitForm">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="form.name" required />
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required />
        <label for="message">Message:</label>
        <textarea id="message" v-model="form.message" required></textarea>
        <button type="submit" class="btn">Send Message</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
    }
  },
  methods: {
    submitForm() {
      alert('Thank you for your message! We will get back to you soon.')
      this.form = { name: '', email: '', message: '' } // Reset form
    },
  },
}
</script>

<style scoped>
.contact {
  padding: 50px 0;
  text-align: center;
}

.contact form {
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
}

.contact form label {
  display: block;
  margin: 10px 0 5px;
}

.contact form input,
.contact form textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>

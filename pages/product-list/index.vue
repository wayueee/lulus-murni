<template>
  <div>
    <Navbar />
    <Productlist/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Productlist from './views/ProductList.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Navbar,
    Productlist,
    Footer,
  }
}
</script>

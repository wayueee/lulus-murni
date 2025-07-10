<template>
  <div>
    <Navbar />
    <ProductDetail/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import ProductDetail from './views/ProductDetail.vue'
import Footer from '../components/Footer.vue'


export default {
  components: {
    Navbar,
    ProductDetail,
    Footer,
  }
}
</script>

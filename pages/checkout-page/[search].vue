<template>
  <div>
    <Navbar />
    <CheckoutDetail/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import CheckoutDetail from './views/CheckoutDetail.vue';
import Footer from '../components/Footer.vue'


export default {
  components: {
    Navbar,
    CheckoutDetail,
    Footer,
  }
}
</script>

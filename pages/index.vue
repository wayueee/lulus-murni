<template>
  <div>
    <Navbar />
    <IntroSection />
    <Help />
    <Category />
    <Portofolio />
    <ProductList />
    <PaymentMethod />
    <Graduation />
    <Testimonial />
    <FaqSection />
    <Footer />
  </div>
</template>

<script>
import Navbar from "/components/Navbar.vue";
import IntroSection from "/components/IntroSection.vue";
import Help from "/components/Help.vue";
import Portofolio from "/components/Portofolio.vue";
import Category from "/components/Category.vue";
import ProductList from "/components/ProductList.vue";
import PaymentMethod from "/components/PaymentMethod.vue";
import Graduation from "/components/Graduation.vue";
import Testimonial from "/components/Testimonial.vue";
import FaqSection from "/components/FaqSection.vue";
import Footer from "/components/Footer.vue";
import axios from "axios";
export default {
  component: {
    Navbar,
    IntroSection,
    Help,
    Portofolio,
    Category,
    ProductList,
    PaymentMethod,
    Graduation,
    Testimonial,
    FaqSection,
    Footer,
  },
};
</script>

<style></style>

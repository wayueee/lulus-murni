<template>
  <div>
    <Navbar />
    <IntroSection />
    <Help />
    <Category />
    <Portofolio />
    <CategorySection />
    <PaymentMethod/>
    <Graduation />
    <Testimonial />
    <FaqSection />
    <Footer />
    <Test/>
  </div>
</template>

<script>
import Navbar from "/components/Navbar.vue";
import IntroSection from "/components/IntroSection.vue";
import Help from "/components/Help.vue";
import Portofolio from "/components/Portofolio.vue";
import Category from "/components/Category.vue";
import CategorySection from "/components/CategorySection.vue";
import PaymentMethod from "/components/PaymentMethod.vue";
import Graduation from "/components/Graduation.vue";
import Testimonial from "/components/Testimonial.vue";
import FaqSection from "/components/FaqSection.vue";
import Footer from "/components/Footer.vue";
import Test from "/components/Test.vue";
export default {
  component: {
    Navbar,
    IntroSection,
    Help,
    Portofolio,
    Category,
    CategorySection,
    PaymentMethod,
    Graduation,
    Testimonial,
    FaqSection,
    Footer,
    Test,
  },
};
</script>

<style></style>

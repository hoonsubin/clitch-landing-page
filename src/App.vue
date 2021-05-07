<template>
  <div>
    <Header />
    <LandingPage />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Footer from '../src/components/Footer.vue';
import Header from '../src/components/Header.vue';
import LandingPage from '../src/views/LandingPage.vue';

export default defineComponent({
  components: {
    Header,
    Footer,
    LandingPage
  }
});
</script>

<template>
    <div>
        <Header />
        <LandingPage />
        <Footer />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import LandingPage from './views/LandingPage.vue';

export default defineComponent({
    components: {
        Header,
        Footer,
        LandingPage,
    },
});
</script>

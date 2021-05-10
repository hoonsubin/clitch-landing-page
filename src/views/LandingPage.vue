<template>
    <div>
        <MastHeadSection />
        <ClitchVisionSection />
        <CreateMemoriesSection />
        <FindCommunitySection />
        <CommunitySection />
        <CompanyAboutSection />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import MastHeadSection from '../components/lp/MastHeadSection.vue';
import ClitchVisionSection from '../components/lp/ClitchVisionSection.vue';
import CreateMemoriesSection from '../components/lp/CreateMemoriesSection.vue';
import FindCommunitySection from '../components/lp/FindCommunitySection.vue';
import CommunitySection from '../components/lp/CommunitySection.vue';
import CompanyAboutSection from '../components/lp/CompanyAboutSection.vue';

export default defineComponent({
    components: {
        MastHeadSection,
        ClitchVisionSection,
        CreateMemoriesSection,
        FindCommunitySection,
        CommunitySection,
        CompanyAboutSection,
    },
});
</script>

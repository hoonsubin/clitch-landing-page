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

import MastHeadSection from '/src/components/lp/MastHeadSection.vue';
import ClitchVisionSection from '/src/components/lp/ClitchVisionSection.vue';
import CreateMemoriesSection from '/src/components/lp/CreateMemoriesSection.vue';
import FindCommunitySection from '/src/components/lp/FindCommunitySection.vue';
import CommunitySection from '/src/components/lp/CommunitySection.vue';
import CompanyAboutSection from '/src/components/lp/CompanyAboutSection.vue';

export default defineComponent({
  components: {
    MastHeadSection,
    ClitchVisionSection,
    CreateMemoriesSection,
    FindCommunitySection,
    CommunitySection,
    CompanyAboutSection
  }
});
</script>

<template>
  <footer>
    <div class="Footer">
      <div class="Footer__sns-infos">
        <SnsInfo
          :text="state.twitterName"
          icon="twitter"
          type="fab"
          @clicked="goToTwitter"
        />

        <SnsInfo
          :text="state.discordName"
          icon="discord"
          type="fab"
          @clicked="goToDiscord"
        />
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import SnsInfo from "../components/common/SnsInfo.vue";

import snsNavigation from "../helpers/snsNavigation";

export default defineComponent({
  name: "Footer",
  components: {
    SnsInfo,
  },
  setup() {
    const { goToTwitter, goToDiscord, state } = snsNavigation();

    return {
      state,
      goToTwitter,
      goToDiscord,
    };
  },
});
</script>

<style lang="scss" scoped>
footer {
  height: 100px;
  width: 100%;
  background: $background-color-black;
}

.Footer {
  width: 75%;
  margin: auto;

  @include md-device-or-less {
    width: 100%;
  }

  &__sns-infos {
    padding: 34.56px 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
}
</style>

<template>
    <a :href="link" target="_blank" rel="noopener noreferrer">
        <div class="SnsInfo">
            <fa :icon="icon" :type="type" class="SnsInfo-icon"></fa>
            <span class="SnsInfo-text">
                {{ text }}
            </span>
        </div>
    </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        icon: String,
        text: String,
        type: String,
        link: String,
    },
});
</script>

<style lang="scss" scoped>
.SnsInfo {
    vertical-align: middle;
    cursor: pointer;

    &-icon {
        width: 30px;
        height: 30px;
        color: white;
        display: inline;

        @include xs-device-or-less {
            width: 24px;
            height: 19.5px;
        }
    }

    &-text {
        @include roboto-bold;
        margin-left: 5px;
        color: $text-white;
        font-size: 18px;
        vertical-align: middle;

        @include xs-device-or-less {
            width: 24px;
            height: 19.5px;
            font-size: 14px;
        }
    }
}
</style>

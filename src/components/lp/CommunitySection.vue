<template>
    <section>
        <div class="Community">
            <div class="Community__text">
                <div class="Community__text-title Community__text-title--pc">
                    CLITCHの最新情報を<br class="br--md br--xs" />チェックする
                </div>
                <div class="Community__text-title Community__text-title--sp">CLITCH Community</div>
                <div class="Community__text-description">
                    CLITCHのTwitterと<br class="br--sp" />Discord<br
                        class="br--md br--xs"
                    />サーバーから<br class="br--lg-more br--sp" />最新情報を<br
                        class="br--md"
                    />チェックしよう
                </div>
            </div>
            <div class="Community__sns-buttons">
                <!--  TODO: should change to component  -->
                <button class="SnsBtn SnsBtn--twitter" @click="goToTwitter">
                    <fa icon="twitter" type="fab" class="SnsBtn-icon"></fa>
                    <div class="SnsBtn-text SnsBtn-text--twitter">{{ state.twitterName }}</div>
                </button>

                <button class="SnsBtn SnsBtn--discord" @click="goToDiscord">
                    <fa icon="discord" type="fab" class="SnsBtn-icon"></fa>
                    <div class="SnsBtn-text SnsBtn-text--discord">{{ state.discordName }}</div>
                </button>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import snsNavigation from '../../helpers/snsNavigation';

export default defineComponent({
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
@import '../../assets/style/br';

section {
    background: $background-color-gray;
    min-height: 320px;
}

.Community {
    padding-top: 60px;
    margin: auto;
    display: flex;
    justify-content: center;

    @include sm-device-or-less {
        width: 95%;
        padding-top: 48px;
    }

    @include sm-device-or-less {
        flex-direction: column;
        padding-top: 36px;
    }

    &__text {
        margin-right: 43px;

        @include xs-device-or-less {
            margin-right: auto;
        }

        &-title {
            @include roboto-bold;
            font-size: 36px;
            line-height: 42px;
            margin-bottom: 24px;

            &--pc {
                @include sp-device {
                    display: none;
                }
            }

            &--sp {
                display: none;

                @include sp-device {
                    font-size: 28px;
                    line-height: 33px;
                    display: block;
                }
            }
        }

        &-description {
            @include roboto-bold;
            font-size: 24px;
            line-height: 150%;
            margin-left: 10px;

            @include sm-device-or-less {
                margin-bottom: 24px;
            }

            @include sp-device {
                font-size: 18px;
                line-height: 150%;
            }
        }
    }

    &__sns-buttons {
        @include sm-device {
            margin-bottom: 49px;
        }

        @include xs-device-or-less {
            margin-bottom: 33px;
        }
    }
}

// TODO: should change to component
.SnsBtn {
    width: 300px;
    padding: 16px 0;
    border-radius: 16px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 23px;

    @include xs-device-or-less {
        margin: 11px auto;
    }

    &--twitter {
        background: $twitter-color;
    }

    &--discord {
        background: $discord-color;
    }

    &-icon {
        width: 30px;
        height: 30px;
        color: white;
        margin-left: 36px;
    }

    &-text {
        @include roboto-bold;
        margin-left: 5px;
        color: $text-white;
        font-size: 18px;
        vertical-align: middle;
        text-align: center;

        &--twitter {
            margin-left: 33px;
        }

        &--discord {
            margin-left: 14px;
        }
    }
}
</style>

<template>
  <section>
    <div class="FindCommunity">
      <div class="FindCommunity__image">
        <img src="src/assets/img/landingPageImg2-tight.svg" class="FindCommunity__image--tight">
        <img src="src/assets/img/landingPageImg2.svg" class="FindCommunity__image--default">
      </div>
      <div class="FindCommunity__text">
        <div class="FindCommunity__text-title">
          一緒にしたいを見つける
        </div>
        <div class="FindCommunity__text-description">
          様々なコミュニティが<br>
          投稿しているクリップから<br>
          あなたが<span class="FindCommunity__text-description--green">一緒にゲームをしたいと思える<br>
          仲間</span>を見つけよう
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  background: $base-background-color;
}

.FindCommunity {
  display: flex;

  @include sm-device-or-less {
    flex-direction: column;
  }

  @include xxl-device {
    width: 85%;
    margin: 0 auto;
  }

  &__image {
    &--default {
      @include lg-device {
        display: none;
      }

      @include md-device {
        display: none;
      }

      @include sm-device-or-less  {
        width: 100%;
      }
    }

    &--tight {
      display: none;

      @include lg-device {
        display: block;
      }

      @include md-device {
        display: block;
      }
    }
  }

  &__text {
    margin: 113px auto 0 auto;

    @include md-device {
      width: 392px;
    }

    @include sm-device-or-less {
      margin: 0;
      padding: 10% 0 20% 5%;
    }

    &-title {
      @include roboto-bold;
      font-size: 36px;
      line-height: 42px;
      color: $text-white;
      margin-bottom: 26px;

      @include sp-device {
        font-size: 28px;
        line-height: 33px;
      }
    }

    &-description {
      @include roboto-bold;
      font-size: 24px;
      line-height: 36px;
      color: $text-white;


      @include sp-device {
        font-size: 18px;
        line-height:  27px;
      }

      &--green {
        color: $clitch-green !important;
      }
    }
  }
}
</style>
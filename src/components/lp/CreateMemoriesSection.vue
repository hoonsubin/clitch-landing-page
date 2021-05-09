<template>
  <section>
    <div class="CreateMemories">
      <div class="CreateMemories__text">
        <div class="CreateMemories__text-title">
          仲間との最高の思い出を
        </div>
        <div class="CreateMemories__text-description">
          仲間との何気ない<br>
          <span class="CreateMemories__text-description--green">思い出のクリップ</span>を、
          <br>アルバムのように<br>
          <span class="CreateMemories__text-description--green">残す</span>ことができます。
        </div>
      </div>
      <div class="CreateMemories__image">
        <img src="src/assets/img/landingPageImg1-tight.svg" class="CreateMemories__image--tight">
        <img src="src/assets/img/landingPageImg1.svg" class="CreateMemories__image--default">
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  background: $background-color-white;
}

.CreateMemories {
  display: flex;

  @include sm-device-or-less {
    flex-direction: column;
  }

  @include xxl-device {
    max-width: $xxl-min;
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
        order: 1;
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
      order: 2;
    }

    &-title {
      @include roboto-bold;
      font-size: 36px;
      line-height: 42px;
      color: #1E2025;
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
      color: #1E2025;


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
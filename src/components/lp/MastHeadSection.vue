<template>
  <section>
    <div class="MastHead">
      <img src="src/assets/img/landingPageMastHeadBackGroundImage.svg" class="MastHead--background-image">
      <img src="src/assets/img/landingPageMastHeadBackGroundImage_tight.svg" class="MastHead--background-image--tight">
      <img src="src/assets/img/landingPageMastHeadBackGroundImage_sp.svg" class="MastHead--background-image--sp">
      <div class="MastHead__inner">
        <div class="MastHead__inner-title">
          ゲームに<br class="br--sp br--xs">いつもの仲間を
        </div>
        <img src="src/assets/img/Vector.svg" class="MastHead__inner-image">
        <img src="src/assets/img/VectorSmall.svg" class="MastHead__inner-image--small">

        <div class="MastHead__inner__content">
          <div class="MastHead__inner__content-title">
            ゲームにいつもの仲間を
          </div>
          <div class="MastHead__inner__content-description">
            私たちは全てのゲーマーが<br>
            「いつもの仲間」と共に、<br>
            よりゲームを楽しめる世界<br class="br--sp">を<br class="br--sm">作る。<br>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../../assets/style/br";

section {
  background: $clitch-green;
}
.MastHead {
  &--background-image {
    object-fit: cover;

    @include lg-device {
      width: 100% !important;
      max-height: 735px;
    }

    @include md-device-or-less {
      display: none;
    }

    &--tight {
      width: 100% !important;
      display: none;

      @include md-device {
        display: block;
      }

      @include sm-device {
        display: block;
      }

      @include xs-device {
        display: block;
      }
    }

    &--sp {
      display: none;

      @include sp-device {
        width: 100%;
        display: block;
      }
    }
  }

  &__inner {
    &-title {
      position: absolute;
      @include roboto-bold;
      width: 95%;
      text-align: center;
      margin: auto;
      font-size: 48px;
      line-height: 56px;
      color: $text-white;
      right: 0px;
      left: 0px;
      top: 154px;

      @include xs-device-or-less {
        text-align: left;
      }
    }

    &-image {
      position: absolute;
      right: 0px;
      top: 58px;

      @include xxl-device {
        left: 420px;
      }

      @include xl-device {
        left: 164px;
      }

      @include lg-device {
        max-height: 735px;
      }

      @include md-device-or-less {
        display: none;
      }

      &--small {
        position: absolute;
        display: none;
        max-width: 827px;
        max-height: 486px;
        right: 0px;
        top: 58px;
        transform: translate(0, 50%);

        @include md-device-or-less {
          display: block;
        }

        @include sm-device {
          top: 100px;
          max-width: 689px;
          max-height: 405px;
        }

        @include xs-device {
          top: 175px;
          max-width: 480px;
          max-height: 304px;
        }

        @include sp-device {
          top: 30%;
          max-width: 100%;
        }
      }
    }

    &__content {
      height: 100%;
      position: absolute;
      top: 312px;

      @include xxl-device {
        left: 60%;
      }

      @include xl-device {
        left: 52%;
      }

      @include lg-device {
        right: 3%;
      }

      @include md-device-or-less {
        right: 1%;
      }

      @include md-device {
        top: 458px;
      }

      @include sm-device-or-less {
        top: 425px;
      }

      @include sp-device {
        top: 57%;
      }

      &-title {
        @include roboto-bold;
        font-size: 48px;
        line-height: 56px;
        color: $text-white;
        margin-bottom: 24px;

        @include md-device-or-less {
          display: none;
        }
      }

      &-description {
        @include roboto-bold;
        font-size: 28px;
        line-height:  40px;
        color: $text-white;

        @include xs-device-or-less {
          font-size: 18px;
          line-height: 26px;
        }
      }
    }
  }
}
</style>
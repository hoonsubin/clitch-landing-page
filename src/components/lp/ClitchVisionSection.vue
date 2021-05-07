<template>
  <section>
    <div class="ClitchVision">
      <div class=ClitchVision__description>
        <div class=ClitchVision__description-1>私たちはゲームの中で様々な人たちと一緒に戦い、多くの冒険を乗り越<br class="br--md">えている。そんなゲームの世界<br class="br--lg-more">で一番大事なのは「一緒にゲームをする<br class="br--md">仲間」だ。どんなゲームも、いつも一緒にゲームをする仲間がいれば無<br class="br--md">限に楽しくなる。</div>
        <div class=ClitchVision__description-2>　しかし、そんな「いつもの仲間」を見つけるのは困難だ。すんなり、<br class="br--md">仲良くなることもあるし、時には傷つくことだってある。</div>
        <div class=ClitchVision__description-3>　私たちはそんな仲間探しを変えたい。</div>
        <div class=ClitchVision__description-4>全てのゲーマーが一緒にゲームをしたい人を見つけ、<br>そして、仲間と一緒にゲームをする楽しさを感じてほしい。</div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../../assets/style/br';

section {
  background: $base-background-color;
}
.ClitchVision {
  &__description {
    width: 860px;
    @include roboto-bold;
    color: $text-white;
    font-size: 18px;
    line-height: 26px;
    margin: 0 auto;
    padding: 100px 0;

    @include sp-device {
      font-size: 14px;
      line-height: 20px;
      padding: 70px 0;
    }

    @include md-device {
      width: 600px;
    }

    @media screen and (max-width: 767px) {
      width: 85%;
    }
  }
}
</style>
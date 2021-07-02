import React from 'react';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const Introduction = () => (
  <Background color="bg-gray-900">
    <Section>
      <div className="text-primary-100 font-roboto not-italic text-lg">
        私たちはゲームの中で様々な人たちと一緒に戦い、多くの冒険を乗り越えている。
        そんなゲームの世界で一番大事なのは「一緒にゲームをする仲間」だ。
        <br />
        どんなゲームも、いつも一緒にゲームをする仲間がいれば無限に楽しくなる。
        <br />
        しかし、そんな「いつもの仲間」を見つけるのは困難だ。すんなり、仲良くなることもあるし、時には傷つくことだってある。
        私たちはそんな仲間探しを変えたい。
        <br />
        全てのゲーマーが一緒にゲームをしたい人を見つけ、そして、仲間と一緒にゲームをする楽しさを感じてほしい。
      </div>
    </Section>
  </Background>
);

export { Introduction };

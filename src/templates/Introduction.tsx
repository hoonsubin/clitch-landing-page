import React from 'react';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const Introduction = () => (
  <Background color="bg-gray-900">
    <Section>
      <div className="text-primary-100 font-bold w-11/12 xl:w-max mx-auto py-5 xl:py-10 text-base sm:text-lg xl:text-xl font-roboto not-italic">
        <div>
          私たちはゲームの中で様々な人たちと一緒に戦い、多くの冒険を乗り越えている。
          そんなゲームの世界で一番大事なのは
          <br className="hidden xl:block" />
          「一緒にゲームをする仲間」だ。
          どんなゲームも、いつも一緒にゲームをする仲間がいれば無限に楽しくなる。
        </div>
        <div className="my-1">
                    &emsp;しかし、そんな「いつもの仲間」を見つけるのは困難だ。すんなり、仲良くなることもあるし、時には傷つくことだってある。
        </div>
        <div className="my-1">&emsp;私たちはそんな仲間探しを変えたい。</div>
        <div className="my-1">
          全てのゲーマーが一緒にゲームをしたい人を見つけ、
          <br />
          そして、仲間と一緒にゲームをする楽しさを感じてほしい。
        </div>
      </div>
    </Section>
  </Background>
);

export { Introduction };

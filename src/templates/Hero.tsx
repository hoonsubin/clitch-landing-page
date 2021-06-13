import React from 'react';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
// import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

const Hero = () => (
  <Background
    style={{
      backgroundImage: 'url("/assets/images/background-art-1.svg")',
      height: '100vh',
      position: 'relative',
    }}
  >
    <div className="hero-cta-banner inset-0 grid justify-items-end lg:grid-cols-2 grid-rows-1">
      <Section yPadding="pt-20 pb-20 self-center md:col-start-2">
        <header className="text-center grid justify-items-stretch grid-cols-1 grid-rows-3">
          {/* title */}
          <h1 className="self-center text-3xl md:text-5xl text-primary-100 font-bold whitespace-pre-line leading-hero">
            <span className="text-primary-100">ゲームに いつもの仲間を</span>
          </h1>
          {/* description */}
          <div className="hero-description">
            <h2 className="text-primary-100 text-2xl md:text-4xl lg:mx-32 self-center col-start-2 lg:col-start-1">
              私たちは全てのゲーマーが 「いつもの仲間」と共に、
              よりゲームを楽しめる世界を作る。
            </h2>
          </div>
          {/* button */}
          <div className="self-end md:self-center">
            <a href="https://app.clitch.life" target="_blank" rel="noopener noreferrer">
              <Button xl>CLITCHを見に行く</Button>
            </a>
          </div>
        </header>
      </Section>
      <style jsx>
        {`
                    .hero-description {
                        @apply grid justify-items-end grid-cols-2 lg:grid-cols-1 grid-rows-1 md:mt-14 md:mb-16;
                    }

                    .hero-cta-banner {
                        background-image: url('/assets/images/cta-banner.svg');
                        @apply absolute bg-no-repeat bg-right bg-contain md:my-20;
                    }
                `}
      </style>
    </div>
  </Background>
);
export { Hero };

import React from 'react';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Background color="bg-primary-100">
    <Section>
      <CTABanner
        title="CLITCHの最新情報をチェックする"
        subtitle="CLITCHのTwitterとDiscordサーバーから最新情報をチェックしよう"
        button={(
          <>
            <a href="https://app.clitch.life" target="_blank" rel="noopener noreferrer">
              <Button>@Clitch10</Button>
            </a>
          </>
                  )}
      />
    </Section>
  </Background>
);

export { Banner };

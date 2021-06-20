import React from 'react';

import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { SnsNavigation } from '../navigation/SnsNavigation';
import { AppInfo } from '../utils/AppInfo';

const Footer = () => (
  <Background color="bg-primary-900">
    <Section yPadding="p-8">
      <CenteredFooter
        iconList={(
          <>
            <SnsNavigation
              snsIconSrc="/assets/images/twitter.svg"
              appName={AppInfo.name.twitter}
              appLink={AppInfo.link.twitter}
            />

            <SnsNavigation
              snsIconSrc="/assets/images/discord.svg"
              appName={AppInfo.name.discord}
              appLink={AppInfo.link.discord}
            />
          </>
                  )}
      />
    </Section>
  </Background>
);

export { Footer };

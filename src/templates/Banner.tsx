import React from 'react';

import { Background } from '../background/Background';
import { SnsButton } from '../button/SnsButton';
import { Section } from '../layout/Section';
import { AppInfo } from '../utils/AppInfo';

const Banner = () => (
  <Background color="bg-gray-base">
    <Section xPadding="px-3">
      <div className="font-bold not-italic font-roboto text-primary-900 flex flex-wrap py-10">
        <div className="text-4xl xl:text-5xl flex-shrink pb-10">
          CLITCHの最新情報を
          <br />
          チェックする
        </div>

        <div className="flex-grow px-10">
          <SnsButton
            btnColor="bg-twitter"
            appLink={AppInfo.link.twitter}
            appName={AppInfo.name.twitter}
            snsIconSrc="assets/images/twitter.svg"
          />

          <SnsButton
            btnColor="bg-discord"
            appLink={AppInfo.link.discord}
            appName={AppInfo.name.discord}
            snsIconSrc="assets/images/discord.svg"
          />
        </div>
      </div>
    </Section>
  </Background>
);

export { Banner };

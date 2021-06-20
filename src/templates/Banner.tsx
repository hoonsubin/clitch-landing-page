import React from 'react';

import { Background } from '../background/Background';
import { SnsButton } from '../button/SnsButton';
import { Section } from '../layout/Section';
import { AppInfo } from '../utils/AppInfo';

const Banner = () => (
  <Background color="bg-gray-base">
    <Section xPadding="px-3">
      <div className="font-bold not-italic font-roboto text-primary-900 flex justify-around lg:items-center flex-col md:flex-row lg:h-80">
        <div>
          <div className="">
            <span className="hidden xs:block text-4xl xl:text-5xl leading-none">
              CLITCHの最新情報を
              <br className="lg:hidden" />
              チェックする
            </span>
            <span className="block xs:hidden text-4xl">CLITCH Community</span>
          </div>

          <p className="text-2xl xs:text-2xl lg:text-3xl pt-8 pl-3 mb-6">
            CLITCHのTwitterと
            <br className="xs:hidden md:block lg:hidden" />
            Discordサーバーから
            <br />
            最新情報をチェックしよう
          </p>
        </div>

        <div className="flex flex-col">
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

import React from 'react';

import { Background } from '../background/Background';
import { FeatureImageGrid } from '../feature/FeatureImageGrid';
import { Section } from '../layout/Section';

const Company = () => (
  <Background color="bg-primary-100">
    <Section>
      <FeatureImageGrid
        title="COMPANY"
        imageSrc="/assets/images/clitch-icon.svg"
        imageOnRight
      >
        <div>
          <table>
            <tbody>
              <tr>
                <td>社名</td>
                <td>CLITCH株式会社(クリッチ)</td>
              </tr>

              <tr>
                <td>代表取締役</td>
                <td>佐藤 将彦</td>
              </tr>

              <tr>
                <td>取締役</td>
                <td>丸谷 凜太郎</td>
              </tr>

              <tr>
                <td>概要</td>
                <td>マッチングプラットフォームの運営・開発</td>
              </tr>

              <tr>
                <td>メール</td>
                <td>info@clitch.life</td>
              </tr>
            </tbody>
          </table>
        </div>
      </FeatureImageGrid>
    </Section>
  </Background>
);

export { Company };

import React from 'react';

import { Background } from '../background/Background';

const Company = () => (
  <div>
    <Background color="bg-primary-100">
      <div className="flex flex-col items-center md:justify-around md:flex-row pb-24 px-3 max-w-screen-lg m-auto">
        <div className="font-roboto font-bold not-italic text-primary-900">
          <div className="text-4xl sm:text-5xl mb-4 sm:mb-8">COMPANY</div>

          <table>
            <tbody className="leading-relaxed">
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
        <div className="pt-16 lg:pb-8">
          <img src="/assets/images/clitch-icon.svg" alt="clitch-icon" />
        </div>
      </div>
    </Background>

    <style jsx>
      {`
                tr {
                    @apply border-gray border-b;
                }

                td:nth-child(odd) {
                    @apply text-gray-base text-sm xs:text-xl pl-2 pt-2 w-24 xs:w-32 lg:w-40;
                }

                td:nth-child(even) {
                    @apply text-base xs:text-xl lg:text-2xl pt-2 pr-2 w-max;
                }
            `}
    </style>
  </div>
);

export { Company };

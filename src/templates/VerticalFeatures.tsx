import React from 'react';

import { FeatureImageGrid } from '../feature/FeatureImageGrid';
import { FeatureMock1 } from '../feature/FeatureMock1';
import { FeatureMock2 } from '../feature/FeatureMock2';

const VerticalFeatures = () => (
  <>
    <div className="bg-primary-100 text-primary-900">
      <FeatureImageGrid
        title="仲間との最高の思い出を"
        imageComponent={<FeatureMock1 />}
        imageOnRight
      >
        <div className="text-primary-900 font-bold text-left">
          仲間との何気ない
          <br />
          <span className="text-primary-500">思い出のクリップ</span>
          を、
          <br />
          アルバムのように
          <br />
          <span className="text-primary-500">残す</span>
          ことができます。
        </div>
      </FeatureImageGrid>
    </div>

    <div className="bg-primary-900 text-primary-100">
      <FeatureImageGrid title="一緒にしたいを見つける" imageComponent={<FeatureMock2 />}>
        <div className="text-primary-100 text-left">
          様々なコミュニティが
          <br />
          投稿しているクリップから
          <br />
          あなたが
          <span className="text-primary-500">
            一緒にゲームをしたいと
            <br className="hidden md:block lg:hidden" />
            思える
            <br className="md:hidden lg:block" />
            仲間
          </span>
          を見つけよう
        </div>
      </FeatureImageGrid>
    </div>
  </>
);

export { VerticalFeatures };

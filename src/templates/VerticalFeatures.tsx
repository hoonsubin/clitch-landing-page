import React from 'react';

import { FeatureImageGrid } from '../feature/FeatureImageGrid';

const VerticalFeatures = () => (
  <>
    <div className="bg-primary-100 text-primary-900">
      <FeatureImageGrid
        title="仲間との最高の思い出を"
        imageSrc="/assets/images/feature-mock-1.svg"
        imageOnRight
      >
        <div className="text-primary-900 font-bold">
          仲間との何気ない
          <span className="text-primary-500">思い出のクリップ</span>
          を、 アルバムのように
          <span className="text-primary-500">残す</span>
          ことができます。
        </div>
      </FeatureImageGrid>
    </div>

    <div className="bg-primary-900 text-primary-100">
      <FeatureImageGrid
        title="一緒にしたいを見つける"
        imageSrc="/assets/images/feature-mock-2.svg"
      >
        <div className="text-primary-100 font-bold">
          様々なコミュニティが 投稿しているクリップから あなたが
          <span className="text-primary-500">一緒にゲームをしたいと思える 仲間</span>
          を見つけよう
        </div>
      </FeatureImageGrid>
    </div>
  </>
);

export { VerticalFeatures };

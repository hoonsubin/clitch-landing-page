import React, { ReactNode } from 'react';

type IFeatureImageGridProps = {
  title: ReactNode;
  children: ReactNode;
  imageSrc: string;
  imageOnRight?: boolean;
  yPadding?: string;
  xPadding?: string;
};

const FeatureImageGrid = (props: IFeatureImageGridProps) => (
  <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 justify-items-stretch">
    <div className={`section-art ${props.imageOnRight ? 'order-last' : ''}`} />
    <div
      className={`max-w-screen-lg mx-auto ${props.xPadding ? props.xPadding : 'px-3'} ${
        props.yPadding ? props.yPadding : 'py-16'
      }`}
    >
      <div className="mb-12 text-center">
        <div className="text-3xl font-bold">{props.title}</div>
        <div className="mt-4 text-xl lg:px-36">{props.children}</div>
      </div>
    </div>

    <style jsx>
      {`
                .section-art {
                    background-image: url('${props.imageSrc}');
                    @apply bg-no-repeat bg-cover;
                }
            `}
    </style>
  </div>
);

export { FeatureImageGrid };

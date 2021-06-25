/* eslint-disable jsx-a11y/alt-text */
import React, { ReactNode } from 'react';

type IFeatureImageGridProps = {
  title: ReactNode;
  children: ReactNode;
  imageComponent: ReactNode;
  imageOnRight?: boolean;
  yPadding?: string;
  xPadding?: string;
};

const FeatureImageGrid = (props: IFeatureImageGridProps) => (
  <div
    className={`flex flex-col md:flex-row 2xl:max-w-screen-2xl mx-auto ${
      props.imageOnRight ? 'md:flex-row-reverse' : ''
    } font-bold font-robot not-sr-only`}
  >
    {props.imageComponent}
    <div
      className={`md:mx-auto ${props.xPadding ? props.xPadding : 'px-3'} ${
        props.yPadding ? props.yPadding : 'py-16'
      }`}
    >
      <div className="pb-12 sm:pt-6 xl:pt-12">
        <div className="text-3xl xs:text-4xl xl:text-5xl">{props.title}</div>
        <div className="mt-4 ml-3 text-xl xs:text-2xl xl:text-3xl xs:h-48">
          {props.children}
        </div>
      </div>
    </div>
  </div>
);

export { FeatureImageGrid };

import React, { ReactNode } from 'react';

type ISectionProps = {
  title?: string;
  description?: string | ReactNode;
  yPadding?: string;
  xPadding?: string;
  children?: ReactNode;
};

const Section = (props: ISectionProps) => (
  <div
    className={`max-w-screen-lg mx-auto ${props.xPadding ? props.xPadding : 'px-3'} ${
      props.yPadding ? props.yPadding : 'py-16'
    }`}
  >
    {(props.title || props.description) && (
    <div className="mb-12 text-center">
      {props.title && (
      <h2 className="text-4xl text-primary-100 font-bold">{props.title}</h2>
      )}
      {props.description && (
      <div className="mt-4 text-xl md:px-20">{props.description}</div>
      )}
    </div>
    )}

    {props.children}
  </div>
);

export { Section };

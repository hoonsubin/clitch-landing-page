import React, { ReactNode } from 'react';

import CSS from 'csstype';

type IBackgroundProps = {
  children: ReactNode;
  color?: string;
  style?: CSS.Properties;
};

const Background = (props: IBackgroundProps) => (
  <div className={props.color || ''} style={props.style}>
    {props.children}
  </div>
);

export { Background };

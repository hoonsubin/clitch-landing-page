/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const FeatureMock1 = () => (
  <div>
    <img
      src="/assets/images/feature-mock-1.svg"
      className="order-last md:hidden xl:block w-full"
    />
    <img
      src="/assets/images/feature-mock-1-tight.svg"
      className="hidden md:block xl:hidden w-full"
    />
  </div>
);

export { FeatureMock1 };

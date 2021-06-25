import React from 'react';

const Logo = () => (
  <div className="w-max">
    <a className="py-1" href="/">
      <img
        src="/assets/images/HeaderLogo.svg"
        alt="headerLogo"
        className="w-12 mr-2 inline"
      />
      <img src="/assets/images/HeaderText.svg" alt="headerText" className="w-52 inline" />
    </a>
  </div>
);

export { Logo };

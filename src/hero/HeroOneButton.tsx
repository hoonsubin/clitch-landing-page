import React, { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string | ReactNode;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="text-4xl md:text-5xl text-primary-100 font-bold whitespace-pre-line leading-hero">
      {props.title}
    </h1>
    <div className={`${typeof props.description === 'string' ? 'text-2xl ' : ''}mt-4 mb-16`}>
      {props.description}
    </div>

    {props.button}
  </header>
);

export { HeroOneButton };

import React from 'react';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Navbar = () => (
  <div className="h-16">
    <div className="fixed top-0 w-screen z-50">
      <Background color="bg-primary-900">
        <Section yPadding="py-2">
          <div className="flex justify-center">
            <Logo />
          </div>
        </Section>
      </Background>
    </div>
  </div>
);
export { Navbar };

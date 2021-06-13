import React from 'react';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Navbar = () => (
  <div className="fixed top-0 w-screen z-50">
    <Background color="bg-primary-900">
      <Section yPadding="py-2">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
            <a
              target="_blank"
              href="https://teamstep.io"
              rel="noopener noreferrer"
              className="text-primary-100"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://teamstep.io"
              rel="noopener noreferrer"
              className="text-primary-100"
            >
              Discord
            </a>
          </li>
        </NavbarTwoColumns>
      </Section>
    </Background>
  </div>
);
export { Navbar };

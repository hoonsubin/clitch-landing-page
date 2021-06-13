import React from 'react';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { Config } from '../utils/Config';

const Introduction = () => (
  <Background color="bg-gray-900">
    <Section
      description={(
        <div className="text-primary-100 font-bold">
          <h3>{Config.intro_message}</h3>
        </div>
              )}
    />
  </Background>
);

export { Introduction };

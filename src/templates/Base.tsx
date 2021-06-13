import React from 'react';

import { Meta } from '../layout/Meta';
import { Config } from '../utils/Config';
import { Banner } from './Banner';
import { Company } from './Company';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Introduction } from './Introduction';
import { Navbar } from './Navbar';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="antialiased text-primary-500">
    <Meta title={Config.title} description={Config.description} />
    <Navbar />
    <Hero />
    <Introduction />
    <VerticalFeatures />
    <Banner />
    <Company />
    <Footer />
  </div>
);

export { Base };

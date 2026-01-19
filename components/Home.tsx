import React from 'react';
import { Hero } from './Hero';
import { Pillars } from './Pillars';
import { Execution } from './Execution';
import { GlobalFootprint } from './GlobalFootprint';
import { InquireCTA } from './InquireCTA';

interface HomeProps {
  onInquireClick: () => void;
  onTeamClick: () => void;
}

export const Home: React.FC<HomeProps> = ({ onInquireClick, onTeamClick }) => {
  return (
    <>
      <Hero onInquireClick={onInquireClick} />
      <Pillars />
      <Execution />
      <GlobalFootprint />
      <InquireCTA onTeamClick={onTeamClick} />
    </>
  );
};
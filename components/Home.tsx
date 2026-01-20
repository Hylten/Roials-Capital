import React from 'react';
import { Hero } from './Hero';
import { Capabilities } from './Capabilities';
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
      <Capabilities />
      <Execution />
      <GlobalFootprint />
      <InquireCTA onTeamClick={onTeamClick} />
    </>
  );
};